//Array of the different lunches 
let lunch = [ 
    ["Sushi", "./img/sushi.jpg", "Yummy! My favorite!"],
    ["Dango", "./img/dango.jpg", "Delicious!"],
    ["Gyoza", "./img/gyoza.jpg", "I love dumplings!"],
    ["Okonomiyaki", './img/okonomiyaki.jpg', "Traditional Japanese pancake is so tasy!"],
    ['Onigiri', './img/onigiri.jpg', "Nom Nom"],
    ['Sashimi', './img/sashimi.jpg', "So good!"],
    ['Shoyu Ramen', './img/shoyu-ramen.jpg', "Ramen is my go to!!"],
    ['Shrimp Tempura', './img/shrimp-tempura.jpg', "Crunchy and delicious!"],
    ['Tonkatsu', './img/tonkatsu.jpg', "Yum!!"],
    ['Udon', './img/udon.jpeg', "I love Japanese Noodles"]
  ];

  function randomize() { 
    return lunch[Math.floor(Math.random() * lunch.length)];
  }

  const randomizeLunch = randomize();

  class LunchGenerator {

    constructor(name, img, quote) {
      this.name = name;
      this.img = img;
      this.quote = quote;
    }
  
    showResult() {
      document.getElementById("name").innerHTML = randomizeLunch[0];
      document.getElementById("image").src = randomizeLunch[1];
      document.getElementById("quote").innerHTML = randomizeLunch[2];
      document.getElementById('button').addEventListener('click', ()=>{
        window.location.reload()
      });
    }
  };
  
  export const lunchGenerator = new LunchGenerator(randomizeLunch[0], randomizeLunch[1], randomizeLunch[2]);