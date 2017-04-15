// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    RegisterView.prototype.template = Handlebars.compile($("#register-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    EmployeeLocView.prototype.template = Handlebars.compile($("#employee-loc-tpl").html());

    var service = new EventService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        router.addRoute('', function() {
            console.log('empty');
            //slider.slidePage(new LoginView().render().$el);
            slider.slidePage(new HomeView(service).render().$el);
        });


        router.addRoute('register', function() {
            console.log('register');
            slider.slidePage(new RegisterView().render().$el);
        });

        router.addRoute('home', function() {
            console.log('home');
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('employees/:id', function(id) {
            console.log('details1');
            service.findById(parseInt(id)).done(function(employee) {
                slider.slidePage(new EmployeeView(employee).render().$el);
            });
        });

        router.addRoute('location/employees/', function() {
            console.log('details2');
            slider.slidePage(new EmployeeLocView().render().$el);
        });

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByHexString('#ffffff');
        StatusBar.styleDefault();

        FastClick.attach(document.body);
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */

}());
