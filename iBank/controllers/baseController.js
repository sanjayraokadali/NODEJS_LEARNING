const User = require('../models/user');


exports.Home = (req, res)=>{

    res.render('homepage.hbs');
}

exports.Login = (req,res)=>{
    
    res.render('login.hbs');
}

exports.Register = (req,res)=>{

    res.render('register-user.hbs');
}


exports.UserAccount = (req,res)=>{

    const user = new User(req.body.username, req.body.email, req.body.phone);
    user.save();

    res.render("user-account.hbs", {user: user});

    

}