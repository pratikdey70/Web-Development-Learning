function person(name,age,hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

let rajesh = new person("Rajesh",24,"Reading");
console.log(rajesh);

let Pratik = new person("Pratik",20,"Cooking");
console.log(Pratik);
