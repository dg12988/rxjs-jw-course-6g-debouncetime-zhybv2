import { fromEvent } from "rxjs";

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input').subscribe(value => console.log(value));