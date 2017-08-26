/*Week 8 homework Team The Directors
https://github.com/KC0NUG/TheDirectors.git
Team Members:
Chucks @KC0NUG
*/
/*Week 8 homework Team The Directors
https://github.com/KC0NUG/TheDirectors.git
Team Members:
Chucks @KC0NUG
*/

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwGa3AV0lfZzG4ckvLEHQFBA0X6UZRPVw",
    authDomain: "movie-vault-8d0ef.firebaseapp.com",
    databaseURL: "https://movie-vault-8d0ef.firebaseio.com",
    projectId: "movie-vault-8d0ef",
    storageBucket: "movie-vault-8d0ef.appspot.com",
    messagingSenderId: "1027534137254"
  };
  firebase.initializeApp(config);


    // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  // ...
// });

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

  




var NetImgArray = [];
var NetURL = "";

$(document).ready( function() {
  console.log("working");
  NetURL = window.localStorage.getItem('Mname');

  console.log(NetURL);
  $.ajax({
          url: "https://netflixroulette.net/api/api.php?actor=" + NetURL,
          //search by director, actor, and title works, year is weird jay lowi
          method: "GET"
        })

        // After the data from the AJAX request comes back
        .done(function(response) {
          console.log(response);


          // When an image in the document is clicked, pass it the response
          // from the API and do some stuff.
          $(document).on("click", "img", response, function() {

            var urlOfImage = $(this).attr("src"); // HTML IMG element which will contain the src which is a URL

            var movie = response.find(function(element) {
              return (element.poster === urlOfImage);
            });

            console.log(movie);
            $("#MovieZone").text(movie.summary);

          });

          $("#carouselInd").empty();
          $("#carousel").empty();

          // Number of response objects retruned by the API
          var posterCount = response.length;

          for (var i = 0; i < response.length; i++) {
            $("#carouselInd").append(getCarouselIndicator(i));

            // $("#carousel").append(getCarouselItem(response[i]));

//            console.log(getCarouselItem(response[i]));

            if (i == 0) {
              $("#carousel").append(getCarouselItem(response[i], true));
            }
            else {
              $("#carousel").append(getCarouselItem(response[i]));
            }
          }

          $("#carousel").append(getCarouselCtl());

/*
          $("#carouselInd").append(getCarouselIndicator(0));
          $("#carousel").prepend(getCarouselItem(response[0]));
          console.log(getCarouselItem(response[0]));
          NetImgArray.push(response[0].poster);
          NetImgArray.push(response[1].poster);
          NetImgArray.push(response[2].poster);
          console.log(NetImgArray);
*/
        });
});

function getCarouselCtl() {
  return `<a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a><a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>`
}

function getCarouselIndicator(count, active = false) {
  if (active || count == 0) {
    return `<li data-target="#myCarousel" data-slide-to="${count}" class="active"></li>`;
  }

  return `<li data-target="#myCarousel" data-slide-to="${count}"></li>`;
}

function getCarouselItem(movie, active = false) {
  var poster = movie.poster;
   var title = movie.show_title;

   if (active) {
    return `<div class="item active"><img src="${poster}" data-title='${title}'><div class="container"><div class="carousel-caption">${title}</div></div></div>`;
  }

  return `<div class="item"><img src="${poster}" data-title='${title}'><div class="container"><div class="carousel-caption">${title}</div></div></div>`;

}

/////////////////////////////////////////////////
var movieID ="";
   /////////////////////////////////////////////////
var genreList = [{"id":28, "type": "action"},
                {"id":12, "type": "adventure"},
                {"id":16, "type": "animation"},
                {"id":35, "type": "comedy"},
                {"id":80, "type": "crime"},
                {"id":99, "type": "documentary"},
                {"id":18, "type": "drama"},
                {"id":10751, "type": "family"},
                {"id":14, "type": "fantasy"},
                {"id":36, "type": "history"},
                {"id":27, "type": "horror"},
                {"id":10402, "type": "music"},
                {"id":9648, "type": "mystery"},
                {"id":10749, "type": "romance"},
                {"id":878, "type": "science fiction"},
                {"id":10770, "type": "tv movie"},
                {"id":53, "type": "thriller"},
                {"id":10752, "type": "war"},
                {"id":37, "type": "western"},
                ]
  ////////////////////////////////////////////////
var genreChoiceName ="";
var genreChoiceID;
      // Perfoming an AJAX GET request to our queryURL 119450
      $(document).on("click", "#addActorSearch", function() {
        genreChoiceName = $("#actorSearch").val().toLowerCase().trim();
        for (i = 0; i < genreList.length; i++){
        if (genreChoiceName === genreList[i].type) {
          genreChoiceID = genreList[i].id ;
          break;
        } }
      $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie?with_genres=" + genreChoiceID + "&api_key=a047d6b87fa4f7951cd40ad3fcd83136",
        //Where you see "878" in the url, that is the genre id. Type genreList in the console to see other genres
        method: "GET"
      })

      .done(function(response) {
        console.log(response);
        movieID = response.results[0].id;
        var newurl = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=a047d6b87fa4f7951cd40ad3fcd83136";
       console.log(newurl);
        $.ajax({
        url: newurl,
        method: "GET"
      })
        .done(function(data) {
        console.log(data);

      });
        console.log(response.results[0].id);
      });
        // console.log(response.genres.length);
        // for (i = 0; i < response.genres.length ; i++)
        // { console.log("---------------");
        //   console.log(response.genres[i].id);
        //   console.log(response.genres[i].name);
        //   tempgen = response.genres[i].id + "-" + response.genres[i].name;
        //   $("#info").append("<p>" + response.genres[i].id + "</p>");
        //   $("#info").append("<p>" + response.genres[i].name + "</p>");
        //   $("#info").append("<p>------------------</p>");
        //   genre.push(tempgen);

        //https://api.themoviedb.org/3/movie/343611?api_key=a047d6b87fa4f7951cd40ad3fcd83136
      //https://api.themoviedb.org/3/find/tt2406468?api_key=###&external_source=imdb_id
      //find/{external_id}
      // /discover/movie?with_genres=18&primary_release_year=2014
//https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=a047d6b87fa4f7951cd40ad3fcd83136
//genre/movie/list?language=en-US
      // After the data from the AJAX request comes back


      });
