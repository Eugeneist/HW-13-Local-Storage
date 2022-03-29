import storage from "./storage.js";

// TASK 1 V1

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((data) => {
    storage.set("key", data);
    const post = storage.get("key", data);
    if (post) {
        console.log(post);
    } else {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
        storage.set("key", data);
        })
    };
})

// TASK 1 V2

async function getPost() {
    try{
        const post = storage.get("key");
        console.log(post);

        if (!post) {
            const request = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            request.json();
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
    // if (str.match(date)) {
    //     return true;
    // } else {
    //     return false;
    // }
    return date.test(str);
};


console.log(isValidDateFormat("2012/09/18 12:10")); // true
console.log(isValidDateFormat("12.02.2022 12:10")); // false


