// var pet = process.argv[2];
// var weather = process.argv[3];

var dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}
var cats = {
    raining: false,
    noise: "meow",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}


dogs.makeNoise();
cats.raining = true;
cats.makeNoise();


