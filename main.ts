// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter"

import {Observable} from "rxjs";

// let numbers = [1, 2, 3];
// let source = Observable.create(observer => {

//     let index = 0;
//     let produceValue = () => {
//         observer.next(numbers[index++]);

//         if (index < numbers.length) {
//             setTimeout(produceValue, 250);
//         }
//         else {
//             observer.complete();
//         }
//     }

//     produceValue();

// }).map(n => n * 10)
//   .filter(n => n > 10)

// source.subscribe(
//     val => console.log(`value: ${val}`),
//     e => console.log("errrrorr"),
//     () => console.log("completed")
// )

// MODULE 2
let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
                        .map((e: MouseEvent) => {
                            return {
                                x: e.clientX,
                                y: e.clientY
                            }
                        })
                        .filter(val => val.x < 10000);

function onNext(value){
    circle.style.left = value.x;
    circle.style.top = value.y;
}

source.subscribe(
    onNext,
    error => console.log('errrr'),
    () => console.log('complete')
)
