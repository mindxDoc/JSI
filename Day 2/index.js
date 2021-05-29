// ---------------- Object.assign() ----------------
let o1 = {
    a: 21,
    b:25,
    c:34
}
let o2 = {
    a: 27,
    b:26
}

let finalObj = Object.assign({},o1,o2)
console.log(finalObj)

let copyO1 = Object.assign({},o1)
console.log(copyO1)

// ---------------- Spread Syntax ----------------
// function call
let sum = (x,y,z) => {
    return x+ y +z
}

let numbers = [1,4,7]
console.log(sum(...numbers))

//copy object & array
let copyO1Spread = {...o1}
console.log("copy by spread syntax", copyO1Spread)

let copyArray = [...numbers]
console.log(copyArray)
// Nối array
let arr1 = ["abv",34,"jasdjksd"]
let connectArr = [...arr1,...numbers]
console.log("connect arrray" ,connectArr)
//Convert string -=> array
let str = "Hello, xin chao cac em"
let chars = [...str]
console.log("convert string -> array", chars)

// ---------------- map() & filter() ----------------
const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

let animalNames = animals.map((animal)=>{
    return animal.name
})
console.log("animal names",animalNames)

let bigAnimal = animals.filter((animal) =>{
    return animal.weight > 100
})
console.log("big animal", bigAnimal)


















































