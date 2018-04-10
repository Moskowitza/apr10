function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    // method which prints all of the stats for a character
    this.printStats = function() {
      console.log("Name: " + this.name + "\nPosition: " + this.position +
       "\nAge: " + this.age + "\nFavorite Language: " +
      this.language);
      console.log("\n-------------\n");
    }
}
var aaron = new Programmer("Aaron", "Mop Boy ", 39, "javascript");
aaron.printStats();