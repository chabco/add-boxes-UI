console.log('*********');
/**********************************
 * Add a form for the user to input an x and a y coordinate/
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/
const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');

// //create box that will be added to the space
// //create element variable
// const el = document.createElement('div');

// //add class to element
// el.classList.add('box');

// //append el child to '.box-container'
// boxContainer.appendChild(el);

//create variables of all x and y
const xInput = document.querySelector('.x-form');
const yInput = document.querySelector('.y-form');
const pressMe = document.querySelector('.pressMe');

//css control

//create function for adding boxes
    pressMe.addEventListener('click', (e) => {
        const el = document.createElement('div');
        el.classList.add('box');
        boxContainer.appendChild(el);

        el.style.top=`${xInput.value}px`;
        el.style.left=`${yInput.value}px`;
});