import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';

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
      <h2 id="name">${lunchGenerator.name}</h2>
      <img id="image" src="${lunchGenerator.img}">
      <p id="quote">${lunchGenerator.name}</p>
      </main>     
        `;
  
      document.body.innerHTML = template;
    }
  }
  
  new App;