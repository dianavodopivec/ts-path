const human: string = "Peter"
console.log(human)

const zip: number = 28395
console.log(zip)

const isScrolling: boolean = false
console.log(isScrolling)

//Custom type -> Ideal to scale applications and make it dynamic.
type Genre = "m" | "f" | "x"
type Toggle = boolean | null

//Void function -> VOID type is not needed.
//Don't use return in a void function.
const voidFunction = (human:string, zip:number, genre:Genre, isScrolling?: Toggle) => console.log(human, zip, genre, isScrolling)
voidFunction(human, zip, "f")

//The function is receiving a STRING type PARAMETER and returning a NUMBER type VALUE.
const wordLength = (word:string):number => word.length 
console.log(wordLength("Hello Typescript!")) 


