var LoginView = function () {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.login-button', this.tryLogin);
        //this.$el.on('click', '.signup', this.loadRegisterView);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        //$('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    this.loadRegisterView = function() {
        router.load("register");
    }

    this.tryLogin = function() {
        alert("Logging in");
        
        var username = $("#username").val()
        var password = $("#password").val()

        if(!username || !password) {
            alert("Fill all fields");
        }else {
        
            $.ajax({
                    type: "GET",
                    url: "http://104.236.108.142:8000/api/token-auth/?format=json&password="+password+"&username="+username,
                    data: { }
                }).done(function (data, status, xhr) {

                    if (!xhr.responseJSON.token) {
                        alert("Error logging in");
                    } else {
                        localStorage.authtoken = localStorage.authtoken = "Token " + xhr.responseJSON.token;
                        localStorage.username = $("#username").val();
                        localStorage.lastUserPwd = $("#password").val();
                        alert("Successfull");
                        router.load("home");
                    }
                    
                }).fail(function (xhr, status, error) {
                    var message = "Login Failed\n";
                    if ((!xhr.status) && (!navigator.onLine)) {
                        message += "Bad Internet Connection\n";
                    }
                    message += "Status: " + xhr.status + " " + xhr.responseText;
                    alert(message);
                    //showOkAlert(message);
                    //logoutPressed();
                });
        }
    }

    // this.findByName = function() {
    //     service.findByName($('.search-key').val()).done(function(employees) {
    //         employeeListView.setEmployees(employees);
    //     });
    // };

    this.initialize();
}