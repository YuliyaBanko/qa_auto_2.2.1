class Button {
    constructor(width, height, type, color) {
      this.width = width;         
      this.height = height;       
      this.type = type;           
      this.color = color;         
    }
    onClick() {
      console.log({
        width: this.width,
        height: this.height,
        type: this.type,
        color: this.color
      });
    }
  }
 
  let newButton = new Button(200, 50, 'button', 'green');
  newButton.onClick()

  function testButton(button, expectedWidth, expectedHeight, expectedType, expectedColor) {
    console.log('свойства этого экземпляра класса соответствуют заданным?');
    if (button.width === expectedWidth) {
      console.log('positive');
    } else {
      console.log(`negative. Expected ${expectedWidth},`);
    }
    if (button.height === expectedHeight) {
      console.log('positive');
    } else {
      console.log(`negative. Expected ${expectedHeight}`);
    }
    if (button.type === expectedType) {
      console.log('positive');
    } else {
      console.log(`negative. Expected ${expectedType}`);
    }
    if (button.color === expectedColor) {
      console.log('positive');
    } else {
      console.log(`negative. Expected ${expectedColor}`);
    }
  }
  let expectedWidth = 100;
  let expectedHeight = 50;
  let expectedType = 'button';
  let expectedColor = 'red';
  

  testButton(newButton, expectedWidth, expectedHeight, expectedType, expectedColor)
  