const fs = require('fs');
const path = require('path');
const db = require('../util/database');

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

        db.execute("SELECT * from world.city limit 1;")
            .then(result => {
                const data = result[0];
                console.log(data);
                fs.writeFileSync('./users/'+this.username+'.txt', JSON.stringify(data));
            })
            .catch(err =>{
                const result = err
            });

        
    }
}
