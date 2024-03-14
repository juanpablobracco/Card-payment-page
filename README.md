# Card-payment-page

Research:

How to deploid the characteres one by one:

- listener on placeholder of text input

- sintax of eventListener:

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





or


var textInputElement = document.getElementById('textInput');
      textInputElement.addEventListener('keyup', function(){
        var text = textInputElement.value;
        console.log('New text is "' + text + '"');
      });

      
To the Card, use the photo as a background of a new div container.

<section>
<div class="card" style="background-image: url('');">
  <h2><span></span>span></h2>
  ...
</div>

<div>
  <h2><span></span></h2>
</div>
<section>
