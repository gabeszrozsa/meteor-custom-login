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

Router.route('/login', function () {
  this.render('login');
});

Router.route('/register', function () {
  this.render('register');
});
