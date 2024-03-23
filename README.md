# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

<img width="933" alt="desktop size" src="https://github.com/juanpablobracco/Card-payment-page/assets/64668332/b4e6ad07-f535-48e6-962c-d72f40828359">
<img width="501" alt="movile size" src="https://github.com/juanpablobracco/Card-payment-page/assets/64668332/09747bf1-9643-460a-b59c-4602357340ab">


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Event Handling:
I utilized event handlers to respond to user actions. For instance:
When the user clicked the “Submit” button, an event handler triggered the display of card data.
Event listeners were attached to specific elements (e.g., form submission) to execute custom JavaScript code.
To see how you can add code snippets, see below:

Personal research to develop:

- registering an event handler
  
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
  
  Events are things that happen in the system you are programming, which the system tells you about so your code can react to them.
How to deploid the characteres one by one:


- listener on placeholder of text input

sintax of eventListener:

addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)

- Ideas . https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

let element = document.getElementById("username");
        const x = () => {
          element.setAttribute("placeholder"," ");
        }
    
        element.addEventListener("click",x);
        const y = () => {
          if(element.value === ""){
            element.setAttribute("placeholder", "USERNAME");
          }
        }
        
        element.addEventListener("mouseout", function(){
        element.placeholder = "new placeholder";
        })


- PSI DSS STANDARD -
Security standard documentation to handler payment personal data. 

Documentation: https://www.pcisecuritystandards.org/document_library/?category=mpoc&document=mpocsectest


### Useful resources

- (https://developer.mozilla.org/es/docs/Web/API/Event) - Usufull intro to Events and handlers to manipulate the DOM properly. 
- (https://www.pcisecuritystandards.org/document_library/?category=mpoc&document=mpocsectest) - Security standard documentation to handler payment personal data- Not used to this proyect, but interesting to learn more about the proper way to handle this kind of sensitive personal data.

