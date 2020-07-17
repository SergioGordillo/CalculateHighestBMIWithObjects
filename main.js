var mark= {
    fullName: 'Mark Smith',
    mass: 65,
    height: 1.65,
    calcBMI: function (mass, height) {
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
}

var john= {
    fullName: 'John Brown',
    mass: 90,
    height: 1.85,    
    calcBMI: function (mass, height) {
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

if(mark.BMI>john.BMI){
    console.log("The person with the highest MBI from our program is " + mark.fullName + " with a BMI of " + mark.BMI + ".");
} else if (john.BMI>mark.BMI){
    console.log("The person with the highest MBI from our program is " + john.fullName + " with a BMI of " + john.BMI + ".");
} else if (john.BMI==mark.BMI) {
    console.log ("Both of them have the same BMI");
}


