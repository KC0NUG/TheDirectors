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
var NetURL = ""
$("addActorSearch").on("click", function() {
  NetURL = $('actorSearch').val().trim();
  $.ajax({
          url: "https://netflixroulette.net/api/api.php?actor=" + NetURL,
          //search by director, actor, and title works, year is weird jay lowi
          method: "GET"
        })

        // After the data from the AJAX request comes back
        .done(function(response) {
          console.log(response);
          NetImgArray.push(response[0].poster);
          NetImgArray.push(response[1].poster);
          NetImgArray.push(response[2].poster);
          console.log(NetImgArray);

        });
});
