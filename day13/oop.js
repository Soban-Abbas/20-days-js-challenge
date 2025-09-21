class user{
    constructor(name,age){
this._name=name;
this._age=age;
}

get name(){
    return `${this._name.toUpperCase()}`
}


set name (newname){
    this._name=newname;
}
}

let user1=new user("soban",19);
console.log(user1.name);
user1.name="ali";
console.log(user1.name);