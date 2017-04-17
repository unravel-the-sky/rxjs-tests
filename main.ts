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
let output = document.getElementById("output");
let button = document.getElementById("button");
let click = Observable.fromEvent(button, "click");

let load = (url: string) => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(element => {
            let div = document.createElement("div");
            div.innerText = element.title;
            output.appendChild(div);
        });
    })

    xhr.open("GET", url);
    xhr.send();
}

click.subscribe(
    val => load("movies.json"),
    error => console.log('errrr'),
    () => console.log('complete')
)
