

## Introduction

## This web application takes information from the API `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline` and delivers it on the screen in an informative and enjoyable way.

## The application fetches an array from the API and turns it into json. Then it displays the name of and image for each product in the array by creating a p html element and an img html element, respectively.

## The application can display more information about the product if the user clicks the "Show me more!" button. Clicking the button will result in the `clickButton` function creating a new div html element with the new information from the API.