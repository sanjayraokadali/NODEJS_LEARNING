const fs = require('fs');
const path = require('path');

module.exports = class User {

    constructor(username,
                email,
                phone,
                password=null,
                addressLine1=null,
                addressLine2=null,
                city=null,
                state=null,
                zipCode=null){

        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }

    displayUser(){
        console.log(this);
    }

    save(){
        fs.writeFileSync('./users/'+this.username+'.txt', this.username);
    }
}
