function Q1(){
    const mammal = {
        color : "orange",
        type  : "cat",
        legs  : 4,
        name  : "kitty",
        speed :24,
    }

    document.write(mammal.type + "<br>");
    document.write(mammal.name + "<br>");

}

function Q2(){
    const person = {
        firstName : "John",
        lastName  : "Doe",
        id        : 5566,
        fullName(){
            return this.firstName + " " + this.lastName;
        }
    };

    document.write("id - ", person.id);
    document.write("<br>");
    document.write("name - ", person.fullName());
}

function Q3(){
    const triangle = {
        height : 25,
        base   : 24,
        color  : "red",
        area (){
            return this.height*this.base*0.5;
        }
    };
    document.write("area = " , triangle.area() );
}
