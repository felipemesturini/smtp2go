import { roundToDecimal } from "./utils-math";

// Testing promisses
const firstPromisse: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const age = roundToDecimal(Math.random(), 2);
       
        if (age > 0.5) {
            resolve(`The age is bigger than ${age}`);
        }
        else {
            reject(new Error(`Age is wrong to access ${age}`));
        }
    }, 2000);
}); 

firstPromisse
    .then((data: string) => 
        console.log(data)
    )
    .catch((error: Error) => {
        console.log(error.message);
    }

    )
    .finally(
        () => console.log("finally executed")
    );