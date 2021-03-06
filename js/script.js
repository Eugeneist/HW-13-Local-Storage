import storage from "./storage.js";

// TASK 1

async function getPost() {
    try{
        const post = storage.get("key");
        
        if (post) {
            console.log(post);
        } else {
            const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            await request.json();
            post = storage.set("key");
            console.log(post);
        }
    } catch (error) {
        console.error(error);
    }
}

getPost();


// TASK #3

let isValidDateFormat = (str) => {  
    const date = /^(\d\d\d\d)\/(\d\d)\/(\d\d)\s(\d\d:\d\d)$/;
    return !!str.match(date);
};


console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false


