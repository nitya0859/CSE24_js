//Asynchronous programming with Promises

let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data loaded");
    }else{
        reject("Error occured");
    }
});
promise.then(result=>console.log(result)).catch(error=>console.error(error));

//Asynchronous programming with async/await
async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
}
getData();

//Fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); //multiple .then but last step is .catch 

//Error handling with try/catch
try{
    var x=y+10;
}
catch(error){
    console.log(error.message);
}

//local storage
localStorage.setItem('name','Jeet');
//retrieve data
var name1=localStorage.getItem('name');
console.log(name1);

//remove data
localStorage.removeItem('name');

//Store object
var user={name:'Jeet',age:30};
localStorage.setItem('user',JSON.stringify(user));
