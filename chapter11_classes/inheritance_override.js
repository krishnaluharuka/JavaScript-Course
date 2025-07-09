class Human{
    constructor(name){
        this.name = name;
    }

    learns(){
        console.log("Human Learns from others");
    }
}


class Student extends Human{
    learns(){
        // super.learns();
        console.log("Student learns from teacher");
    }

}


const std = new Student("Radhe");
std.learns();
console.log(`${std instanceof Human ? 'yes student is instance of Human' : 'no'}`);