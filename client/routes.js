MainController = RouteController.extend({
    layoutTemplate: 'mainLayout',
    onBeforeAction: function() {
        if (Meteor.userId()) {
            this.next();
        } else {

          switch (this.originalUrl) {
            case "/register":
              this.render("register");
              break;
            case "/login":
              this.render("login");
              break;
            default:
              this.render("login");
          }

        }
    }
});

Router.configure({
    controller: 'MainController'
});


Router.route('/', function () {
  this.render('start');
});

// Router.route('/#', function () {
//   this.render('start');
// });

Router.route('/login', function () {
  this.render('login');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/forgot', function () {
  this.render('ForgotPassword');
});

Router.route('/#/reset-password/:token', function () {
  this.render('ResetPassword');
});

Router.route('/change-password', function () {
  this.render('ChangePassword');
});
