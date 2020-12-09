//Array of the different lunches 
let lunch = [ 
    ["Sushi", "./img/sushi.jpg"],
    ["Dango", "./img/dango.jpg"],
    ["Gyoza", "./img/gyoza.jpg"],
    ["Okonomiyaki", './img/okonomiyaki.jpg'],
    ['Onigiri', './img/onigiri.jpg'],
    ['Sashimi', './img/sashimi.jpg'],
    ['Shoyu Ramen', './img/shoyu-ramen.jpg'],
    ['Shrimp Tempura', './img/shrimp-tempura.jpg'],
    ['Tonkatsu', './img/tonkatsu.jpg'],
    ['Udon', './img/udon.jpeg']
  ];

  function randomize() { 
    return lunch[Math.floor(Math.random() * lunch.length)];
  }

  const randomizeLunch = randomize();

  class LunchGenerator {

    constructor(name, img) {
      this.name = name;
      this.img = img;
    }
  
    showResult() {
      document.getElementById("name").innerHTML = randomizeLunch[0];
      document.getElementById("image").src = randomizeLunch[1];
    //   document.getElementById('button').addEventListener('click', ()=>{
    //   const randomizeLunch = randomize();
    //   });
    console.log(randomizeLunch[1]);
    }
  };
  
  export const lunchGenerator = new LunchGenerator(randomizeLunch[0], randomizeLunch[1]);