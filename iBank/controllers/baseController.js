
exports.Home = (req, res)=>{

    res.render('homepage.hbs');
}

exports.Login = (req,res)=>{
    
    res.render('login.hbs');
}

exports.Register = (req,res)=>{

    res.render('register-user.hbs');
}
