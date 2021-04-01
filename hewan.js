//Membuat sebuah objek dan menampilkannya di console log
let animal = {
    name: "Cow",
    foot: "4",
    species: "mammals",
    color: ["black", "white"],
    food: "grass",
    voice: "mooooo"
}
console.log(animal);

for (let data in animal){
    document.write('<li>' + animal[data])
}

const strengths = {
    animalStrengths: function () {
        return 'produce milk';
    }
};
console.log(strengths.animalStrengths());

//2
const data= 
    [
    {
        name: 'Alpha',
        class: 'Dragon',
        club: ['Bola', 'Bulutangkis']
    },
    {
        name: 'Beta',
        class: 'Lizard',
        club: ['Membaca', 'Bulutangkis']
    }
    ];
    for (let value in data) {
        document.write(`${data[value].name} ada di kelas ${data[value].class}, dia mengikuti club ${data[value].club} <br>`)
    }

//3

  //function printById
  let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

  function printById(id){
      todos[id-1]
  }

  function printById(id){
      console.log(todos[id-1]);
  }

  //function add(NewTodo)
  let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

  todos.push
  (id = 3, todo = 'ngerjain tugas')
  console.log(todos);

  //function delete
  let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

  function deleteById(id){
      delete todos[id]
      console.log(todos);
  }

  deleteById(1)

  //function editById
  let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

  function editById(id, newValue){
      todos[id] = newValue
      console.log(todos);
  }

  editById(1, 'belajar CRUD')

    
