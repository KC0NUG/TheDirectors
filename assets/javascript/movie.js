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

$.ajax({
        url: "https://netflixroulette.net/api/api.php?title=How%20to%20train%20your%20dragon",
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {
        console.log(response);
        // Saving the image_original_url property
        // var imageUrl = response.data.image_original_url;

        // // Creating and storing an image tag
        // var catImage = $("<img>");

        // // Setting the catImage src attribute to imageUrl
        // catImage.attr("src", imageUrl);
        // catImage.attr("alt", "cat image");

        // // Prepending the catImage to the images div
        // $("#images").prepend(catImage);
      });
