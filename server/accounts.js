Accounts.onCreateUser(function(options, user) {
  if (options) {
    user.name = options.name;
  }
  return user;
});
