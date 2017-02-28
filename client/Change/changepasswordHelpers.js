Template.ChangePassword.events({
  "submit #changePasswordForm": function(event, template){
     event.preventDefault();

     var old_pass = $('#old-password').val();
     var new_pass = $('#new-password').val();

     Accounts.changePassword(old_pass, new_pass, function(error){
        if (error) {
          console.log(error);
        } else {
          console.log("pass changed!");
        }
     });
  }
});
