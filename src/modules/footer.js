
class Footer {

    constructor(footerText, footerButton) {
      this.footerText = footerText;
      this.footerButton = footerButton;
    }
  }
  
  export const footer = new Footer('Click on the sushi to generate a new lunch!', './img/sushi_button.png');