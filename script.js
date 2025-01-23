/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arrNew = [
    { id: 5, name: "jain", age: "18", profession: "developer" },
    { id: 6, name: "foster", age: "20", profession: "inter" },
    { id: 7, name: "thor", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    let develop=arr.filter(e => e.profession==="developer");
    develop.map(e => {
    console.log(`ID: ${e.id}, Name: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);
    });
  }
/*Without Using Filter Function Only Using Map*/

/*function PrintDeveloperbyMap() {
    let trans=arr.map(e =>{
    if(e.profession=="developer")
        return e;
    else
        return null;
    }).filter(e => e !== null);
    console.log(trans);
    } */

  function PrintDeveloperbyForEach() {
    arr.forEach((e)=>
    {
        if(e.profession==="developer")
            console.log(`ID: ${e.id}, Name: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);
    });
  }
  
  function addData() {
        arr.push({ id: 4, name: "Susan", age: "20", profession: "intern" });
        arr.map((e)=>{
            console.log(`ID: ${e.id}, Name: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);  
        });
  }
  
  function removeAdmin() {
    arr=arr.filter(e => e.profession !== "admin");
    arr.forEach((e)=>{
        console.log(`ID: ${e.id}, Name: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);  
    });
   
  }
  
  function concatenateArray() {
    arr=arr.concat(arrNew);
    arr.forEach((e)=>{
        console.log(`ID: ${e.id}, Name: ${e.name}, Age: ${e.age}, Profession: ${e.profession}`);  
    });
  }