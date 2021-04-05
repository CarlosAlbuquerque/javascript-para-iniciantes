let movieTilte = [];
let movieImg = [];

function send(){

    movieTilteValue = document.getElementById('movieTitle').value;
    movieTilte.push(movieTilteValue);  
    console.log(movieTilte);

    movieImgValue = document.getElementById('movieImg').value;
    movieImg.push(movieImgValue);  
    console.log(movieImg);

    movieTilteDOM = document.getElementById('movieTitle')
    movieImgDOM = document.getElementById('movieImg')
    console.log(movieTilteDOM, movieImgDOM);

    movieTilteDOM.innerHTML = movieTilteDOM.innerHTML + movieTilte

}   