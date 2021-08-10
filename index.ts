import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const sliderInput = document.querySelector('input#slider');

fromEvent(sliderInput, 'input').pipe(
  map(event => event.target['value'])
).subscribe(value => console.log(value));