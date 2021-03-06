$("#char-dropdown").change(function () {
  let selectedChar = $(this).children("option:selected").val();
  $("#character-div").empty();
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#character-div").offset().top
  }, 2000);
  getCharacterInfo(selectedChar);
})

function getCharacterInfo(character) {
  const key = "126917828959679";
  const queryURL = `https://superheroapi.com/api.php/${key}/search/${character}`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    let charName = response.results[0].name;
    let charFullName = response.results[0].biography['full-name'];
    let eyeColor = response.results[0].appearance['eye-color'];
    let hairColor = response.results[0].appearance['hair-color'];
    let alias = response.results[0].biography.aliases[0];
    let charImage = response.results[0].image.url;
    let intelligence = response.results[0].powerstats.intelligence;
    // let strength;
    // if (response.results[0].powerstats.strength === null) {
    //   strength = "noooo";
    // } else {strength = response.results[0].powerstats.strength;}
    let strength = response.results[0].powerstats.strength;
    let speed = response.results[0].powerstats.speed;
    let durability = response.results[0].powerstats.durability;
    let power = response.results[0].powerstats.power;

    let quote;

    console.log(character);



    switch (character) {
      case "Ozymandias":
        quote = `"I don't mind being the smartest man in the world, I just wish it wasn't this one."`;
        break;
        case "Nite Owl":
        quote = `"Y'know, this must be how ordinary people feel. This must be how ordinary people feel around us."`;
        break;
      case "Rorschach":
        quote = `"I live my life free of compromise, and step into the shadows without complaint or regret."`;
        break;
      case "Dr Manhattan":
        quote = `"We're all puppets, Laurie. I'm just a puppet who can see the strings."`;
        break;
      case "Moloch":
        quote = `"For everything I did, everything I stole, everyone I killed, nothing changed. I was still me."`;
        break;
        case "The Comedian":
        quote = `"Once you realize what a joke everything is, being the Comedian is the only thing that makes sense."`;
        break;
      case "Silk Spectre":
        quote = `"I used to be a masked avenger too, remember … I mean, I'm used to going out at three in the morning and doing something stupid."`;
        break;
      default:
    }

    const charInfo = `<div class="character-section tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child has-background-black is-radiusless box">
                <p class="title has-text-warning">${charName}</p>
                <p class="has-text-warning">Full Name: ${charFullName}</p>
                <p class="has-text-warning">AKA: ${alias} </p>
              </article>
              <article class="tile is-child has-background-warning is-radiusless is-shadowless box">
                <p class="title has-text-black">APPEARANCE</p>
                <p class="has-text-black">Hair: ${hairColor}</p>
                <p class="has-text-black">Eyes: ${eyeColor}</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="power-tile tile is-child has-background-warning is-radiusless is-shadowless box">
                <p class="title has-text-black has-text-centered">POWERS</p>
                <div class="content has-text-black">
                  <ul type="1">
                    <li>STRENGTH: ${strength}</li>
                    <li>INTELLIGENCE: ${intelligence}</li>
                    <li>SPEED: ${speed}</li>
                    <li>DURABILITY: ${durability}</li>
                    <li>POWER: ${power}</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child has-background-black is-radiusless box">
              <p class="title has-text-warning">Quote</p>
              <div class="content">
                <p class="subtitle has-text-warning">${quote}</p>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child has-background-warning is-radiusless is-shadowless box">
            <figure class="image">
              <img src="${charImage}">
            </figure>
          </article>
        </div>
      </div>`;

    $("#character-div").append(charInfo);
    $("#character-div").attr("class", "cd-with-content");
  });
}