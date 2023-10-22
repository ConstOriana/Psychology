z// Home 

let isImgVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 400 && isImgVisible === false) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});

let isTitleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 790 && isTitleVisible === false) {
    $('.title-appear').fadeIn();
  } else {
    $('.title-appear').fadeOut();
  }
});

let isFirstArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 980 && isFirstArticleVisible === false) {
    $('.appear-one').fadeIn();
  } else {
    $('.appear-one').fadeOut();
  }
});

let isSecondArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 1050 && isSecondArticleVisible === false) {
    $('.appear-two').fadeIn();
  } else {
    $('.appear-two').fadeOut();
  }
});

let isThirdArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 1090 && isThirdArticleVisible === false) {
    $('.appear-three').fadeIn();
  } else {
    $('.appear-three').fadeOut();
  }
});

let isFourthArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 1500 && isFourthArticleVisible === false) {
    $('.appear-four').fadeIn();
  } else {
    $('.appear-four').fadeOut();
  }
});

let isFifthArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 1580 && isFifthArticleVisible === false) {
    $('.appear-five').fadeIn();
  } else {
    $('.appear-five').fadeOut();
  }
});

let isSixthArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 1640 && isSixthArticleVisible === false) {
    $('.appear-six').fadeIn();
  } else {
    $('.appear-six').fadeOut();
  }
});

//Treatment

let isAgendaArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 60 && isAgendaArticleVisible === false) {
    $('.treatment-article-agenda').fadeIn();
  } else {
    $('.treatment-article-agenda').fadeOut();
  }
});

let isDurationArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 150 && isDurationArticleVisible === false) {
    $('.treatment-article-duration').fadeIn();
  } else {
    $('.treatment-article-duration').fadeOut();
  }
});

let isPaymentArticleVisible = false;
$(document).scroll(function() {
  let y = $(this).scrollTop();
  if (y > 200 && isPaymentArticleVisible === false) {
    $('.treatment-article-payment').fadeIn();
  } else {
    $('.treatment-article-payment').fadeOut();
  }
});




