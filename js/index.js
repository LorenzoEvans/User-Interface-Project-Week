// JS goes here

// Home Page JS.

class Header {
    constructor(header) {
        this.element = header;
        // this.item = document.querySelectorAll('.header');
        this.element.style.fontSize = '2.8rem';
        this.element.style.fontWeight = 'Bold';
        console.log(this.item);
        this.element.style.fontFamily = 'Roboto';
    }
}

let navMenu = document.querySelector('.navMenu');
console.log(navMenu)
// navMenu.addEventListener('click', () => {
//     console.log('got it')

// })

// Services Page JS
let headers = document.querySelectorAll('.header');
headers = Array.from(headers).map(header => new Header(header))
// console.log(headers);


let dataTabs = document.querySelectorAll(`.textStyling[data-tab]`)
let buttonData = document.querySelectorAll(`button[data-tab]`)


class Button {
    constructor(button) {
        this.element = button;
        this.element.addEventListener('click', () => {
            console.log('got it');


        })
    }
}
let serviceButtons = Array.from(document.querySelectorAll('.serviceBtn'));
serviceButtons.map(button => new Button(button));
console.log(serviceButtons);
// console.log(buttonData);
// console.log(dataTabs);



let modal = document.querySelector('#navOpen');
let open = document.getElementById('openModal')
navMenu.addEventListener('click', function () {

    open.style.display = 'block';
    //  if (event.target == open) {
        modal.style.display = 'none';
    // }
})

let close = document.querySelector('.closedNav');
close.addEventListener('click', function () {
    open.style.display = 'none';
    modal.style.display = 'block';
    console.log('something')
})

// window.addEventListener('click', function () {
  
// })




let anchors = Array.from(document.querySelectorAll('.navAnchor'));

// anchors = anchors.map(anchor => new Anchor(anchor));
console.log(anchors);