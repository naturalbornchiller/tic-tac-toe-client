//JS

class Person {//makes empty object then runs code to 
    //put things inside...instead of writing a constructor
    //function to set instance properties, we use the 
    //constructor method inside of this class definition
    //instead
    constructor(name, occupation) {
        this.name = name // keyword new creates empty object
        //keyword 'this' refers to the empty object
        //dot notation puts it in name key
        this.occupation = occupation 
    }

    //instead of putting instance methods in 
    //prototypes we put them in the class definition
    sleep(){
        console.log("zzzzzz")
    }
}

// this is better because it is more compact
// another example 
class Rectangle {

    constructor(length, width) {
        this.length = length
        this.width = width
    }
    area() {
        return this.length * this.width
    }
}