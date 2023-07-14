const User = require('../models/user')

insertUser = function(req , res , next){

    const user = new User({
        userName : req.body.username,
        userMail : req.body.userMail
      });
      console.log(req.body.username);
      console.log(req.body.userMail);
    
      user.save( ( result , error ) => {
        if(error){
          console.log(error);
          res.redirect('/')
          return;
        }
        console.log(result)
        res.redirect('/')
      });
}

getUser = function(req , res ,next){

    User.find({},'userMail userName', (error, result)=>{
      if(error) {
        console.log(error);
        res.redirect('/');
      }
      console.log(result);
      res.render('index', {items : result} );
      
    });
  
};

updateUser = function(req ,res ,next){
    const ID = req.body.id;
   
    const updatedUser = {
        userName : req.body.username,
        userMail : req.body.usermail
    };

    User.updateOne({_id : ID}, {$set : updatedUser} , (error , doc)=>{
        if(error){
            console.log(error);
            res.redirect('/');
            return;
        }
        console.log(doc);
        res.redirect('/getusers');
    })
};

deleteUser = function(req,res,next){
    const ID = req.body.id ;
  
    User.deleteOne({_id:ID}, (error , doc)=>{
      if(error){
        console.log(error);
        res.redirect('/');
        return;
      }
      console.log(doc);
      res.redirect('/getusers');
    })
}

module.exports = {
    insertUser : insertUser,
    getUser : getUser,
    updateUser : updateUser,
    deleteUser: deleteUser
} ; 