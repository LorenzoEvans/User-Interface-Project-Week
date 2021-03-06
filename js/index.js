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

let headers = document.querySelectorAll('.header');
headers = Array.from(headers).map(header => new Header(header))

let navMenu = document.querySelector('.navMenu');
// console.log(navMenu)
// navMenu.addEventListener('click', () => {
//     console.log('got it')

// })


let modal = document.querySelector('#navOpen');
let open = document.getElementById('openModal')

let anchors = Array.from(document.querySelectorAll('.navAnchor'));
// console.log(anchors);
navMenu.addEventListener('click', function () {

    open.style.display = 'block';
    //  if (event.target == open) {
    modal.style.display = 'none';
    // }

    anchors.forEach((anchor) => {
        anchor.style.fontWeight = 'Bold';

        anchor.style.lineHeight = '8.5rem';

        anchor.style.fontSize = '4.8rem';
        anchor.style.display = 'block';
    })
})

let close = document.querySelector('.closedNav');
close.addEventListener('click', function () {
    open.style.display = 'none';
    modal.style.display = 'block';

    console.log('something')
})




// Services Page JS

// console.log(headers);


let buttonData = document.querySelectorAll(`button[data-tab]`)

// let articleData = document.querySelectorAll(``)
class Button {
    constructor(button) {

        this.element = button;
        this.btnData = this.element.dataset.tab
        console.log(this.btnData)
        // this.element = button;

        // this.btnData = this.element.dataset.tab;

        if (this.btnData === 'all') {
            this.services = document.querySelectorAll('.service');

        } else {

            this.services = document.querySelectorAll(`.service[data-tab='${this.btnData}']`);
        }

        this.services = Array.from(this.services).map(service => new Servicer(service));



        // console.log(this.dataTabs);

        this.element.addEventListener('click', () => {
            console.log('got it');

            this.serviceSelector();
            if (this.element.style.background !== "#5E9FB9"){
                this.element.style.background = '#5E9FB9';
            }
            this.element.style.background = '#5E9FB9';
            this.element.style.color = '#FFFFF';
        
            // this.services.map(() => {
            //         if (this.element.style.background !== 'white'){
            //             // this.element.style.color = 'black';
            //             // this.element.style.background = 'white';
            //             // this.element.style.background = '#5E9FB9';
            //             // this.element.style.color = '#FFFFF'; 
            //             this.element.style.color = 'black';
            //             this.element.style.background = 'white';
            //         }
                 
            // })
          console.log(this.services);
            console.log(event.currentTarget)
            // let color = this.services.style.color ;
            // let BG = this.services.style.background ;
            // if (this.element.dataset.tab || this.services !== 'all'){
            //     console.log(this.element.dataset.tab);
            //     console.log(this.services);
            //     this.element.style.background = 'white';
            //     this.element.style.color = 'black';
            // }

            // if (this.element.dataset.tab === 'all'){
            //     // this.element.style.background = 'white';
            //     // this.element.style.color = 'black';
            //     this.element.style.background = '#5E9FB9';
            //     this.element.style.color = '#FFFFF';
            // }

            // else if (this.element.dataset.tab === this.services){
            //       this.element.style.background = 'white';
            //     this.element.style.color = 'black';
            // }


        })
    }

    serviceSelector() {

        let services = document.querySelectorAll('.service');
        // console.log(DataTabs)
        services.forEach(function (service) {
            service.style.display = 'none';
        })

        this.services.forEach(service => service.selectService());
    }


}

class Servicer {
    constructor(item) {
        this.item = item;
    }

    selectService() {
        this.item.style.display = null;
    }
}

let serviceButtons = Array.from(document.querySelectorAll('.tab'));
serviceButtons.map(button => new Button(button));
console.log(serviceButtons);
console.log('this is buttonData:', buttonData);


let mobileImgs = document.querySelectorAll('.mobile');
console.log(mobileImgs);
// console.log('this is dataTabs:', this.dataTabs);