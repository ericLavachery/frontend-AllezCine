
$(function() {
    var $button = $('.feature_movies .filtres button').click(function() {
      $button.not(this).removeClass('filtre_active');
      // removing `active` class from images except clicked
      $(this).toggleClass('filtre_active');
      // toggling class `active` of clicked image
    });
  });

var numFeatMovs = document.getElementById("numFeatMovs");
var twelveMovs = document.querySelectorAll(".feature_movies_container .row > div:nth-last-child(-n + 18)");

// console.log(twelveMovs);

function toggleMovies(){
    if(numFeatMovs.innerHTML === "Show more"){
        for(i = 0; i < twelveMovs.length; i++){
            twelveMovs[i].style.display = "block";
            numFeatMovs.innerHTML = "Show less";
        }
    }else{
        for(i = 0; i < twelveMovs.length; i++){
            numFeatMovs.innerHTML = "Show more";
            twelveMovs[i].style.display = "none";
    }
    }
};

var showFantasy = document.getElementById("showFantasy");
var showComedy = document.getElementById("showComedy");
var showDrama = document.getElementById("showDrama");
var showThriller = document.getElementById("showThriller");
var showAdventure = document.getElementById("showAdventure");
var showSciFi = document.getElementById("showSciFi");
var allMovs = document.querySelectorAll(".feature_movies_container .row > div");


// console.log(allMovs);

function filterMovAll(){
    for(var i = 0; i < allMovs.length; i++){
            allMovs[i].style.display = "block";
    }
    numFeatMovs.style.display = "inline-block";
    numFeatMovs.innerHTML = "Show less"
}


function filterMovFantasy(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "Fantasy" || filmCat2 === "Fantasy" || filmCat3 === "Fantasy"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}

function filterMovSciFi(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "SciFi" || filmCat2 === "SciFi" || filmCat3 === "SciFi"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}

function filterMovDrama(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "Drama" || filmCat2 === "Drama" || filmCat3 === "Drama"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}

function filterMovComedy(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "Comedy" || filmCat2 === "Comedy" || filmCat3 === "Comedy"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}

function filterMovAdventure(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "Adventure" || filmCat2 === "Adventure" || filmCat3 === "Adventure"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}

function filterMovThriller(){
    numFeatMovs.style.display = "none";
    for(var i = 0; i < allMovs.length; i++){
        var filmCat1 = allMovs[i].classList[3];
        var filmCat2 = allMovs[i].classList[4];
        var filmCat3 = allMovs[i].classList[5];
        if (filmCat1 === "Thriller" || filmCat2 === "Thriller" || filmCat3 === "Thriller"){
            allMovs[i].style.display = "block";
        }else {
            allMovs[i].style.display = "none";
        }
    }
}