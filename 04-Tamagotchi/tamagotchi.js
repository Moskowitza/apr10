function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
        } else {
            console.log("No thanks! I'm full.");
        }
    };
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzz");
            console.log("================");
            this.sleepy = false;
            this.board = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
            console.log("================");
        }
    };
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            console.log("================");
        } else {
            console.log("Not right now. Later?");
            console.log("================");
        }
        this.increaseAge = function () {
            this.age++;
            console.log("Happy Birthday to me! I'm " + age + "old!")
            console.log("================")

        }
    };
}
var dog = new DigitalPal();
dog.outside = false;
dog.bark = function () {
    console.log("Woof! Woof!")
    console.log("================")
    }
dog.goOutside = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        console.log("================")
        this.outside=true;
    }else{
        console.log("We're already outside though...");
        console.log("================")
    }
}
dog.goInside=function() {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        dog.outside=false;
        console.log("================")
    }else{
        console.log("I'm already inside...");
        console.log("================")
    }
}

var cat = new DigitalPal();
cat.houseCondition=100;
cat.meow=function(){
    console.log("Meow, Meow");
    console.log("================")
}
cat.destroyFurniture=function(){
    this.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored=false;
    this.sleepy=true;
    console.log("================")
}
cat.buyNewFurniture=function(){
    this.houseCondition+=50;
    console.log("Are you sure about that?");
    console.log("================")
}

// console.log(dog)

var animals={
    dog:dog,
    cat:cat
}
var pet = process.argv[2];
var activity = process.argv[3];

animals[pet][activity]();

// if (pet==="dog"){
//     if (activity==="play"){
//         dog.play();
//     }
//     else if (activity==="feed"){
//         dog.feed();
//     } 
//     else if (activity==="sleep"){
//         dog.sleep();
//     }
//     else if (activity==="goOut"){
//         dog.goOutside();
//     }
//     else if (activity==="goIn"){
//         dog.goInside();
//     }
// }
// if (pet==="cat"){
//     if (activity==="play"){
//         cat.play();
//     }
//     else if (activity==="feed"){
//         cat.feed();
//     } 
//     else if (activity==="sleep"){
//         cat.sleep();
//     }
//     else if (activity==="destroy"){
//         cat.destroyFurniture();
//     }
//     else if (activity==="buy"){
//         cat.buyNewFurniture();
//     }
// }