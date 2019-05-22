
//retrive the info from the search box
let searchBox = document.querySelector('#main-search');
let ingredient;
searchBox.addEventListener('keypress', function(event) {
    if(event.key == "Enter"){
         ingredient = [];
         ingredient  = searchBox.value.split(' ');
         console.log(ingredient);
    }
});



