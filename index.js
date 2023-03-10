const makeupUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"


document.addEventListener("DOMContentLoaded", () => {
    fetch(makeupUrl)
    .then((resp) => resp.json())
    .then((json) => makeProductDivs(json))
  
  // makes a div html element for each element of the API array
  function makeProductDivs(json) {
  json.forEach(element => 
    {const newDiv = document.createElement("div")
    newDiv.id = element.id
    newDiv.innerText = element.name
    newDiv.style.fontFamily = "Lucida Bright"

    document.body.appendChild(newDiv)

    const newInput = document.createElement("input")
    newInput.setAttribute("type", "button");
    newInput.setAttribute("value", "Show me more!");
    newInput.setAttribute("id", `${element.id}-btn`);
    newInput.setAttribute("class", "buttonclass")
    newInput.style.borderRadius = "12px"
    newInput.style.fontFamily = "Playfair"
    newInput.style.backgroundColor = "#CCFFFF"
    newInput.style.borderColor = "#00FFFF"
    newDiv.appendChild(newInput)

    const newImg = document.createElement("img")
    newImg.src = element.image_link
    newImg.setAttribute("class","imgclass");

    newDiv.appendChild(newImg)
    
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
 
  // when called, this function executes and displays more information about the product
  function clickButton(event) {
    const whichButton = event.target;
    const elementNumber = whichButton.id.split("-")[0]
    const correspondingDiv = document.getElementById(elementNumber)
    const moreInfoDivMaybe = document.getElementById(`div${elementNumber}`)
    if (typeof(moreInfoDivMaybe) != 'undefined' && moreInfoDivMaybe != null)
      {
        console.log("exists")
      }
    else {
    fetch(makeupUrl)
    .then((resp) => resp.json())
    .then((json) => callback(json))
    function callback(json) {
    for (let i=0; i<json.length; i++) {
      if (json[i].id==elementNumber) {
          const moreInfoDiv = document.createElement("p")
          const prodLinkElement = document.createElement("a")      
          const prodDescription = json[i].description
          const prodPrice = json[i].price
          const prodLinkValue = json[i].product_link

          const moreInfoDivID = `div${json[i].id}` 
          moreInfoDiv.innerText = `Description: ${prodDescription} Price: $${prodPrice}`
          moreInfoDiv.setAttribute("id", moreInfoDivID)

          prodLinkElement.setAttribute("href", prodLinkValue)
          prodLinkElement.innerText = "Click to visit product site!"

          correspondingDiv.style.fontFamily = "Lucida Bright"
          correspondingDiv.appendChild(moreInfoDiv)
          correspondingDiv.appendChild(prodLinkElement)
        }
      else {console.log("peanuts")}
      }
    }
    }
    }

    // when called, this function highlights the event target with a pink box
    function makePop(event) {
      const defaultBG = event.target.style.backgroundColor;
      const defaultBorder = event.target.style.border;
      const defaultPadding = event.target.style.padding;
      const defaultBoxShadow = event.target.style.boxShadow;

      event.target.style.backgroundColor = "#FF1493";
      event.target.style.border = "1px solid";
      event.target.style.padding = "10px";
      event.target.style.boxShadow = "5px 10px #FFDFDD";
        
      setTimeout(() =>
        {
          event.target.style.backgroundColor = defaultBG;
          event.target.style.border = defaultBorder;
          event.target.style.padding = defaultPadding;
          event.target.style.boxShadow = defaultBoxShadow;
        }, 1000);
    } 
  });
  

