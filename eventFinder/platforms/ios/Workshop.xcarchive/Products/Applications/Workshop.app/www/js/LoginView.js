var LoginView = function () {

    var homeView;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.login-button', this.tryLogin);
        homeView = new HomeView();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        //$('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    this.tryLogin = function() {
        alert("Logging in");
        $('.content', this.$el).html(homeView.$el);
        // var username = $("#username").val()
        // var password = $("#password").val()
        //  $.ajax({
        //         type: "GET",
        //         url: "http://104.236.108.142:8000/api/token-auth/?format=json&password=tester&username=timothy",
        //         data: { }
        //     }).done(function (data, status, xhr) {
        //         localStorage.authtoken = localStorage.authtoken = "Token " + xhr.responseJSON.token;
        //         localStorage.lastUserName = $("#in-username").val();
        //         localStorage.lastUserPwd = $("#in-password").val();
                
        //         $.$el.changePage('#home',{ transition: "slide"});
        //         // this.$el.load("#home");
        //     }).fail(function (xhr, status, error) {
        //         var message = "Login Failed\n";
        //         if ((!xhr.status) && (!navigator.onLine)) {
        //             message += "Bad Internet Connection\n";
        //         }
        //         message += "Status: " + xhr.status + " " + xhr.responseText;
        //         alert(message);
        //         //showOkAlert(message);
        //         //logoutPressed();
        //     });
    }

    // this.findByName = function() {
    //     service.findByName($('.search-key').val()).done(function(employees) {
    //         employeeListView.setEmployees(employees);
    //     });
    // };

    this.initialize();
}