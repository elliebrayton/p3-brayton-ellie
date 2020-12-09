import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
import { footer } from './modules/footer';

class App {

    constructor() {
      this.renderTemplate();
      lunchGenerator.showResult();
    }
  
    renderTemplate() {
      const template = `
        <header>
            <h1>${header.headerTitle}</h1>
            <p>${header.headerText}</p>
        </header> 
        <main>
            <div class="lunch-wrapper">
                <h2>Today's lunch will be: <span id="name">${lunchGenerator.name}!</span></h2>
                 <img id="image" src="${lunchGenerator.img}">
            </div>
            <div class="toby-wrapper">
                <div class="quote-wrapper">
                    <p id="quote">${lunchGenerator.quote}</p>
                </div>
                <img src="img/toby.png" alt="shiba-cartoon">
            </div>
        </main>     
        <footer>
            <p>${footer.footerText}</p>
            <img src="${footer.footerButton}" alt="sushi_button">
        </footer>
        `;
  
      document.body.innerHTML = template;
    }
  }
  
  new App;