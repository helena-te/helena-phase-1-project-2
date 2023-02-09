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
    //const buttonNumber =
    for (let i=0; i<json.length; i++) {
      if (json[i].id==elementNumber) {
        console.log(json[i].id) 
        const prodDescription = json[i].description
      const prodPrice = json[i].price
      const prodLink = json[i].product_link
      moreInfoDiv.innerText = `Description: ${prodDescription} Price: ${prodPrice} Link: ${prodLink} `
     correspondingDiv.appendChild(moreInfoDiv)
      }
      else {console.log("peanuts")}
    }
    }
    
  }
    });
  function makePop(event) {
    console.log("made pop")
    console.log(event.target)
    console.log(event)
    // const target = event.target;
    // //.catch((error) => { document.getElementById("modal").classList.remove("hidden") setTimeout(() => { document.getElementById("modal").classList.add("hidden")
    // <div class="hidden" id="modal"> <h2>Error! Please try again.</h2> <p id="modal-message"></p> </div>
    

      const defaultBG = event.target.style.backgroundColor;
      const defaultBorder = event.target.style.border;
      const defaultPadding = event.target.style.padding;
      const defaultBoxShadow = event.target.style.box-shadow;
      const defaultTransition = event.target.style.transition;
      event.target.style.transition = "background 1s";
      event.target.style.backgroundColor = "#FDFF47";
      event.target.style.border = "1px solid";
      event.target.style.padding = "10px";
      event.target.style.boxShadow = "5px 10px #888888";
   
      
  
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

//stuff from before
// document.addEventListener("DOMContentLoaded", () => {
// fetch(makeupUrl)
//     .then((resp) => resp.json())
//     .then((json) => displayProdName(json))
//     .then((json) => displayProdPic(json))


// function displayProdName(json) {
//     json.forEach(product => 
//         {for (let i=495; i>0; i--) {
//             const thisDiv = document.getElementById(`${i}`)
//             cons
//             console.log(thisDiv)
//             if (thisDiv !== null) {
                
//                 //console.log(thisDiv.id)
//                 console.log("")
//                 if (product.id == thisDiv.id) {
//                     //console.log(product.id)
//                     console.log("ello")
//                     const prodName = document.createElement("p")
                    
//                     prodName.innerText = product.name
//                     console.log(prodName)
//                     //document.body.append(prodName);
//                     thisDiv.appendChild(prodName)
//                 }
//                 else {
//                     return null
                    
//                 }   
//             }
//         }
//         }
//     )     
// }

// function displayProdPic(json) {
//     json.forEach(product => 
//         {for (let i=495; i>0; i--) {
//             const thisDiv = document.getElementById(`${i}`)
//             console.log(thisDiv)
//             if (thisDiv !== null) {
                
//                 //console.log(thisDiv.id)
//                 console.log("")
//                 if (product.id == thisDiv.id) {
//                     //console.log(product.id)
//                     console.log("ello")
//                     const prodPic = document.createElement("img")
//                     prodPic.src = product.image_link
//                     //console.log(prodName)
//                     //document.body.append(prodName);
//                     thisDiv.appendChild(prodPic)
//                 }
//                 else {
//                     console.log(product.id)
//                     console.log(thisDiv.id)
                    
//                 }   
//             }
//         }
//         }
//     )    
// }
// function forProduct(product) { 
//     console.log(product.id)   
//     for (let i=0; i<496; i++) {
//         const thisDiv = document.getElementById(i)
//         if (product.id == thisDiv.id) {
//             console.log(product.id)
//         }
//     }
//     }   


// // function displayProdPic(json) {
  
    
// // }

// })