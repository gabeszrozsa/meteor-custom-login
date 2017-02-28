if (Accounts._resetPasswordToken) {
  Session.set('resetPassword', Accounts._resetPasswordToken);
}


Accounts.onLogin(function(){
    // console.log("onlogin");
});

Accounts.onLogout(function(){
    // console.log("onlogout");
});
