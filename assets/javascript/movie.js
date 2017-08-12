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
var NetImgArray = [];
var NetURL = "";

$(document).on("click","#addActorSearch", function() {
  console.log("working");
  NetURL = $('#actorSearch').val().trim();

  console.log(NetURL);
  $.ajax({
          url: "https://netflixroulette.net/api/api.php?actor=" + NetURL,
          //search by director, actor, and title works, year is weird jay lowi
          method: "GET"
        })

        // After the data from the AJAX request comes back
        .done(function(response) {
          console.log(response);

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
  
  if (active) {
    return `<div class="item active"><img src="${poster}"><div class="container"><div class="carousel-caption"></div></div></div>`;
  }

  return `<div class="item"><img src="${poster}"><div class="container"><div class="carousel-caption"></div></div></div>`;
}


          $("#carouselInd").empty();
          $("#carousel").empty();

          // Number of response objects retruned by the API
          var posterCount = response.length;

          for (var i = 0; i < response.length; i++) {
            $("#carouselInd").append(getCarouselIndicator(i));

            $("#carousel").append(getCarouselItem(response[i]));

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
=======
          for (i = 0; i < response.length ; i++) {
            NetImgArray.push(response[i].poster);
            console.log(i + 1);
          };
          // NetImgArray.push(response[0].poster);
          // NetImgArray.push(response[1].poster);
          // NetImgArray.push(response[2].poster);
          console.log("after forloop");
