import {Observable} from "rxjs";

let numbers = [1,2,3];
let source = Observable.create(observer => {
    for(let n of numbers){
        observer.next(n);
    }

    observer.complete();
})

source.subscribe(
    val => console.log(`value: ${val}`),
    e => console.log("errrrorr"),
    () => console.log("completed")
)
