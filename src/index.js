import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';

class App {

    constructor() {
      this.renderTemplate();
    }
  
    renderTemplate() {
      const template = `
      <header>
        <h1>${header.headerTitle}</h1>
        <p>${header.headerText}</p>
      </header>      
        `;
  
      document.body.innerHTML = template;
    }
  }
  
  new App;