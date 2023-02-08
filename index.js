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
    newDiv.appendChild(newImg)
    })
    

  }
  //when domcontentloads, I want to add an Event Listener to each Button

//   const buttonz = document.getElementsByClassName("buttonclass")
//   function addClickButton(json) {
//     console.log("this function fires")
//     //buttonz.addEventListener("click", clickButton())
//   }
const buttonz = document.body.getElementsByClassName("buttonclass")
    console.log(buttonz.length)
    buttonz.addEventListener("click", clickButton)

  function clickButton(json) {
    console.log("button clicked")
    const moreInfoDiv = document.createElement("p")
    //const buttonNumber = 
    const prodDescription = json.element.description
    const prodPrice = json.element.price
    const prodLink = json.element.product_link
    moreInfoDiv.innerText = `Description: ${prodDescription} Price: ${prodPrice} Link: ${prodLink} `
    //document.body.
  }
    });
  //});
//       addToy = !addToy;
//       if (addToy) {
//         toyFormContainer.style.display = "block";
//       } else {
//         toyFormContainer.style.display = "none";
//       }


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