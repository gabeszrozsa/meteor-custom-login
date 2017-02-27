Template.register.events({
  'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Accounts.createUser({
              email: email,
              password: password
          },
          function(error,success){
            if (error) {
              // “Email already exists”, if the email is registered to another user.
              // “Need to set a username or email”, if the email field is empty.
              // “Password may not be empty”, if the password field is empty.
              console.log(error.reason);
            } else {
              Router.go('/');
            }
          });

  }
});
