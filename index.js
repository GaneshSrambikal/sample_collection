let info = document.getElementById("info");

let collection = [];
let nameFile = [];
let finalFile = [];
function display() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let data = {
    name: name,
    age: age,
  };

  collection.push(data);
  console.log(collection);
  finalFile.push(collection);
  info.innerHTML = "Name : " + name + ", " + "Age :" + age;
}
const save = () => {
  let filename = document.getElementById("filename").value;
  let filedata = {
    filename: filename,
    date: Date(),
  };
  nameFile.push(filedata);
  collection.push(nameFile);
  console.log(collection);
};
const showAll = () => {
  console.log(finalFile);
};
