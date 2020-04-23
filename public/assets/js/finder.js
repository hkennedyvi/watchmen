$(document).ready(getCharacters);

$("#comic-btn").click(function() {
    console.log("hiii")
})

$(".char-dropdown").change(function() {
    let selectedChar = $(this).children("option:selected").val();
    
    console.log(selectedChar);
 
})

function getCharacters() {
  const queryURL = "https://superheroapi.com/api.php/";
  const key = "126917828959679";
  const searchTerm = "/search/ozymandias";

  $.ajax({
    url: queryURL + key + searchTerm,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      console.log(response.results[0].name);
      console.log(response.results[0].biography['full-name'])
      console.log(response.results[0].biography.aliases)
      console.log(response.results[0].powerstats);
      console.log(response.results[0].image.url);
      comicDiv = $("#comic-test");
      const image = $("<img>")
      image.attr("src", response.results[0].image.url);
      comicDiv.append(image);
  });
}