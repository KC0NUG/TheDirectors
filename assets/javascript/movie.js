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
          for (i = 0; response[i].poster != undefined ; i++) {
            NetImgArray.push(response[i].poster);
            console.log(i + 1);
          };
          // NetImgArray.push(response[0].poster);
          // NetImgArray.push(response[1].poster);
          // NetImgArray.push(response[2].poster);
          console.log("after forloop");
          console.log(NetImgArray);

        });
});
