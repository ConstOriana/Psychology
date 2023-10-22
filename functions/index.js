/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

import express from 'express';
import mongoose from 'mongoose';
import mainRoute from './src/routes/index.js'
import { config } from './src/config/envConfig.js';
//import session from 'express-session';
//import { createHash } from'./src/utils/bcrypt.js';
import errorHandler from './src/middlewares/errorHandler.js';
import compression from 'express-compression';
import { addLogger } from './src/middlewares/logger.js';
import cors from 'cors';

const baseUrlFrontend = config.nodeEnv == 'development' ? config.baseUrlDevFrontend : config.baseUrlProdFrontend;

const appServer = express();

const corsOptions = {
    credentials: true,
    origin: baseUrlFrontend,
    optionsSuccessStatus: 200
}

// Middlewares
appServer.use(addLogger);
appServer.use(compression({ brotli: { enabled: true, zlib: {} } }));
appServer.use(cors(corsOptions));
appServer.use(express.json());
appServer.use(express.urlencoded({extended: true}));
//appServer.use(express.static('public'));
// appServer.use(session({
//     secret: createHash('secretoConHashRandom'),
//     resave: false,
//     saveUninitialized: false
// }));
appServer.use('/', mainRoute);
appServer.use(errorHandler);

mongoose.connect(config.mongooseApiKey)
    .then(res => console.log('Database connected'))
    .catch(error => {
        console.log("Cannot connect to database: " + error);
        process.exit();
    });

if(config.nodeEnv == 'development'){
    const server = appServer.listen(8080, () => console.log(`Server running on port: 8080`));
    server.on('error', error => console.log(error));
}

export const app = onRequest(appServer);
