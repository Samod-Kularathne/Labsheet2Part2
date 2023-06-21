function Q1(){
    const Mark1 = 30;
    const Mark2 = 40;
    const Mark3 = 90;

    const total = Mark1 + Mark2 + Mark3;
    const average = total / 3;

    document.write("Total marks:", total);
    document.write("<br>");
    document.write("Average marks:", average);
}

function Q2(){
    var name = "Samod";
    var age = 23;
    var gender = "male";

    document.write("name - ",name);
    document.write("<br>");
    document.write("age - ",age);
    document.write("<br>");
    document.write("gender - ",gender);
}

function Q3(){
    const base = 4;
    const hight = 6;
    const area = 0.5*base*hight;


    document.write("area of the triangle =  ",area);
}

function Q4(){
     let a = 10;
     let b = 20;

        document.write(a += b);
        document.write("<br>");
        document.write(a -= b);
        document.write("<br>");
        document.write(a += b);
        document.write(a *= b);
        document.write("<br>");
        document.write(a /= b);
        document.write("<br>");
        document.write(a %= b);
}

function Q5(){
    var x = 5;
    var y = 4;
    var text1 = "A";
    var text2 = "B";

        document.write(x >= y);
        document.write("<br>");
        document.write(x != y);
        document.write("<br>");
        document.write(text1 < text2);
}

function Q6(){
    var statement1 = "what a very";
    var statement2 = " nice day";

    document.write("concatenate string: ", statement1.concat(statement2));
}

function Q7(){
    var x = 5 + 5;
    var y = "5" + 5;
    var z = "Hello" + 5;

        document.write(x);
        document.write("<br>");
        document.write(y);
        document.write("<br>");
        document.write(z);
}
