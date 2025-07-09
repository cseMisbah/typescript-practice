//Class : properties, method, constructor
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username : ".concat(this.userName, " , age : ").concat(this.age));
    };
    return User;
}());
//class object
var user1 = new User("Ratan", 45);
user1.display();
var user2 = new User("Bilkis", 68);
user2.display();
