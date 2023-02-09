const makeupUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
document.addEventListener("DOMContentLoaded", () => {
    fetch(makeupUrl)
    .then((resp) => resp.json())
    .then((json) => makeProductDivs(json))
    //.then((json) => addClickButton(json));
  function makeProductDivs(json) {
  json.forEach(element => 
    {const newDiv = document.createElement("div")
    newDiv.id = element.id
    newDiv.innerText = element.name
    document.body.appendChild(newDiv)
    const newInput = document.createElement("input")
    newInput.setAttribute("type", "button");
    newInput.setAttribute("value", "Show me more!");
    newInput.setAttribute("id", `${element.id}-btn`);
    newInput.setAttribute("class", "buttonclass")
    newDiv.appendChild(newInput)
    const newImg = document.createElement("img")
    newImg.src = element.image_link
    newImg.setAttribute("class","imgclass");
    newDiv.appendChild(newImg)
    console.log(newImg)
    //the below code needs to be here
    const buttonz = document.getElementsByClassName("buttonclass")
    const imgs = document.getElementsByClassName("imgclass")

    for (const aButton of buttonz) {
      aButton.addEventListener("click", clickButton)
    }
    for (const img of imgs) {
      img.addEventListener("mouseover", makePop)
    }
    }
    )
    

  }

  function clickButton(event) {
    console.log("button clicked")
    const whichButton = event.target;
    const elementNumber = whichButton.id.split("-")[0]
    const correspondingDiv = document.getElementById(elementNumber)
    fetch(makeupUrl)
    .then((resp) => resp.json())
    .then((json) => callback(json))
    function callback(json) {
    const moreInfoDiv = document.createElement("p")
    const prodLinkElement = document.createElement("a")
    for (let i=0; i<json.length; i++) {
      if (json[i].id==elementNumber) {
        console.log(json[i].id) 
        const prodDescription = json[i].description
        const prodPrice = json[i].price
        const prodLinkValue = json[i].product_link
        prodLinkElement.setAttribute("href", prodLinkValue)
        moreInfoDiv.innerText = `Description: ${prodDescription} Price: ${prodPrice} Link: ${prodLink} `
        moreInfoDiv.appendChild(prodLinkElement)
        correspondingDiv.appendChild(moreInfoDiv)
      }
      else {console.log("peanuts")}
    }
    }
    
  }
    });
  function makePop(event) {
    console.log("made pop")
    
      const defaultBG = event.target.style.backgroundColor;
      const defaultBorder = event.target.style.border;
      const defaultPadding = event.target.style.padding;
      const defaultBoxShadow = event.target.style.boxShadow;
      const defaultTransition = event.target.style.transition;
      event.target.style.transition = "FFFFFF";
      event.target.style.backgroundColor = "#FF00BF";
      event.target.style.border = "1px solid";
      event.target.style.padding = "10px";
      event.target.style.boxShadow = "5px 10px #E6E6FA";
   
   
  
      setTimeout(function()
      {
        event.target.style.backgroundColor = defaultBG;
        event.target.style.border = defaultBorder;
        event.target.style.padding = defaultPadding;
        event.target.style.boxShadow = defaultBoxShadow;
          setTimeout(function() {
            event.target.style.transition = defaultTransition;
          }, 1000);
      }, 1000);
  
  } 

