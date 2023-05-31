console.log("fetch api");
console.log(fetch("https://reqres.in/api/users"));

fetch("https://reqres.in/api/users")
  .then((response) => {
    if (response.ok) {
      console.log("Success");
    } else {
      console.log("Not succesful");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Errror"));

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers:{
    "Content-Type":"application/json"
  },   
  body: JSON.stringify({
    name: "Haron",
  }),
}).then(response => {
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log("Errror"));


//   feching from local data
fetch('todos/luigi.json').then((response)=>{
    console.log("resolved",response);
    return response.json()
}).then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log("rejected",err);
})


// asynch and await
const getTodos=async()=>{
    const response=await fetch("todos/luigi.json")

    if(response.status!==200){
        throw new Error("Cannot fetch the data")
    }
    const data=await response.json()
    return data
}
getTodos().then(data=>console.log("asynked data",data))
.catch(err=>console.log('rejected:',err.message))
console.log("-----------------------------------");

// promises
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is the then " + message);
}).catch((message) => {
  console.log("This is the catch " + message);
});

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified<Cat",
      });
    } else {
      resolve("Thumbs up and subscribe");
    }
  });
}
watchTutorialPromise()
  .then((message) => {
    console.log("Success : " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
