const person =  {
    name : 'Alice',
    age : 28,
    location : "South Jordan",

    call(){
        this.displayDetails();
        this.displayName();
        this.displayLocation();
    },

    displayDetails : function() {
        console.log("Name: " + this.name + " Age: " + this.age);
    },

    displayName : function() {
        console.log("Name: " + this.name);
    },

    displayLocation(){
        console.log("Location: " + this.location);
    }


 };

 const Alice = person

 Alice.call();