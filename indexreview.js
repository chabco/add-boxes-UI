// console.log('*********');
// const boxContainer = document.querySelector('.box-container');
// const boxes = document.querySelectorAll('.box');
/**********************************
 * Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/

 //createElement
 const el = document.createElement('div');
 //add the box class
 el.classList.add('box')
 //append the new element to the DOM
 const container = document.querySelector('.box-container');
container.appendChild(el);

//change background color of all boxes

//#1 get all boxes
const allBoxes = document.querySelectorAll('.box')
//loop through all items
allBoxes.forEach((i) => {
//add event listener that fires on click
//and update their background color
i.addEventListener('click', (e) => {
    const currentBG = e.target.style.backgroundColor;
    e.target.style.backgroundColor =
    (currentBG === 'orange')    ?   'pink'   :
    (currentBG === 'pink')    ?   'lightblue'      :   'orange';
    });
});