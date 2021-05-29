// const alice = {
//     name:"alice",
//     age: 20
// }
// const bob = {
//     name:"bob",
//     age: 20
// }

class Person {
    name = "demo"
    age = 01

    constructor (name,age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log("Hello, my name is" + this.name)
    }
}

const alice = new Person("alice", 20)
console.log("alice", alice)
const bob = new Person("bob", 10)
bob.sayHello()
console.log(bob === alice)

//Ke thua
class Student extends Person{
    className= "mindX"
    grade = 0

    constructor(name, age, className, grade){
        super(name, age)
        this.className = className
        this.grade = grade
    }

    sayHello(){
        super.sayHello()
        console.log("I'm " + this.age+ " years old")
    }
}

const abc = new Student("abc", 25, "mindX Web I", 12)
console.log("abc",abc)

//----------HTML render--------
let app = document.getElementById("app")
let btnAddForm = document.getElementById("btnAddForm")

btnAddForm.addEventListener("click", ()=> {
    const myForm =new MyForm()
    myForm.render(app)
})

class MyForm {
    input = null
    button = null
    constructor (){
        this.input = document.createElement("input")
        this.button = document.createElement("button")

        this.button.innerHTML = "Get Form"
        this.button.addEventListener("click",() => {
            console.log(this.input.value)
        })
    }

    render(container){
        const div = document.createElement("div")
        div.appendChild(this.input)
        div.appendChild(this.button)
        container.appendChild(div)
    }
}

