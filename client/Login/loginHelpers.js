Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
          // console.log("login process");
          if (error) {
            //"User not found"
            //"Match failed"
            //"Incorrect password"
            console.log(error.reason);
          }
          else {
            Router.go('/');
          }
        });
    }
});
