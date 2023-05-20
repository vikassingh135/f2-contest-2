let users = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let id = 4;

let cards = document.querySelector(".cards");

function displayUsers(users) {
  cards.innerHTML = '';
  console.log(users);
  users.forEach((user) => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
      <div>${user.id}.</div>
      <div>Name: ${user.name}</div>
      <div>Profession: ${user.profession}</div>
      <div>Age: ${user.age}</div>
    `;
    cards.appendChild(newCard);
  });
}

displayUsers(users);

const addUser = () => {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  console.log(name, profession, age);
  users.push({
    id: id,
    name: name,
    age: age,
    profession: profession,
  });
  
  if(document.getElementById("selected-profession").value==='select') {
    displayUsers(users);
  } else filterUsers();
  
  document.getElementById("name").value = '';
  document.getElementById("profession").value = '';
  document.getElementById("age").value = '';
  id++;
};

const filterUsers = () => {
  let profession = document.getElementById("selected-profession").value;
  if(profession==="select") {
    alert("Please select profession");
    return;
  }
  if(profession==="all") {
    displayUsers(users);
    return;
  }
  let filteredUsers = users.filter((user) => user.profession===profession);
  displayUsers(filteredUsers);
};
