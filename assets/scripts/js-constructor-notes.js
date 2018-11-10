//JS constructor example: blueprint for person object instances
function Person(name, occupation) {
    this.name = name
    this.occupation = occupation
}

//to change the blueprint and add a method
Person.prototype.sleep = function() {
    console.log('zzzzz')
}

const michael = new Person("Michael", "Developer")

michael.name//"Michael"
michael.sleep()//"zzzzzz"