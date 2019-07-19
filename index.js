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

        el.style.top=`${xInput.value}px`;
        el.style.left=`${yInput.value}px`;

        // console.log(clickable);

        let boxes = document.querySelector('.box');

//add color selection tool
        // let colorpick = document.getElementById("menu");
        // let result = colorpick.options[colorpick.selectedIndex].value;
        // console.log(result);

//add color input type tool
        const colorchoose = document.getElementById('color-input');
        // console.log(colorchoose);

//disallow over extending with feedback
        if (`${xInput.value}` >= 350 || `${yInput.value}` >= 550) {
            alert("You are out of bounds! :C");
            boxContainer.style.backgroundColor = "red";
        } else {
            el.classList.add('box');
            boxContainer.appendChild(el);
//for color selection tool
            // el.style.backgroundColor = result;
//for color input tool
            el.style.backgroundColor = colorchoose.value;

//click boxes to remove them
            // el.addEventListener('click', (e) => {
            //     e.target.remove();

            // });
//make boxes hoverable and then moves to a random location
            el.addEventListener('mouseover', (e) => {
                el.style.top= Math.floor(Math.random()*338) +1 +'px'
                el.style.left = Math.floor(Math.random()*538) +1 +'px'
            });
        };
    });