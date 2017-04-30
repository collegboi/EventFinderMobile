// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    RegisterView.prototype.template = Handlebars.compile($("#register-tpl").html());
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EventsListView.prototype.template = Handlebars.compile($("#event-list-tpl").html());
    EventView.prototype.template = Handlebars.compile($("#event-tpl").html());
    EventLocView.prototype.template = Handlebars.compile($("#event-loc-tpl").html());
    AddEventView.prototype.template = Handlebars.compile($("#add-event-tpl").html());
    AttendeesView.prototype.template = Handlebars.compile($("#attendees-event-tpl").html());
    EventMapView.prototype.template = Handlebars.compile($("#all-events-loc-tpl").html());

    var service = new EventService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        router.addRoute('', function() {
            console.log('empty');
            if (localStorage.login == 1) { 
                slider.slidePage(new HomeView(service).render().$el);
            } else {
                slider.slidePage(new LoginView().render().$el);
            }
        });

        router.addRoute('register', function() {
            console.log('register');
            slider.slidePage(new RegisterView().render().$el);
        });

        router.addRoute('logout', function() {
            console.log('logout');
            localStorage.login = 0
            slider.slidePage(new LoginView().render().$el);
        });

        router.addRoute('home', function() {
            console.log('home');
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('event/:id', function(id) {
            console.log('details1');
            service.findById(id, function(output){
                slider.slidePage(new EventView(output).render().$el);
            });
        });

        router.addRoute('addEvent', function() {
            console.log('addEvent');
            slider.slidePage(new AddEventView().render().$el);
        });

         router.addRoute('event/attendees/:id', function(id) {
            console.log('details1');
            service.getAllAttendees(id, function(output){
                //alert(output);
                slider.slidePage(new AttendeesView(output).render().$el);
            });
        });

        router.addRoute('location/events/', function() {
            console.log('details2');
            service.getAll(function(output){
                slider.slidePage(new EventLocView().render().$el);
            });
        });

        router.addRoute('view-map', function() {
            console.log(' view-map');
            service.getAll(function(output){
                slider.slidePage(new EventMapView(output).render().$el);
            });
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
