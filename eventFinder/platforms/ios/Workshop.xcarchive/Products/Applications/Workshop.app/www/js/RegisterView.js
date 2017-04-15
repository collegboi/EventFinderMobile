var RegisterView = function () {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.new-register', this.newRegister);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        //$('.content', this.$el).html(employeeListView.$el);
        return this;
    };

    this.newRegister = function() {

        var password = $(".password").val()
        var passwordAgain = $(".password-again").val()
        var username = $(".username").val()
        var firstname = $(".first-name").val()
        var lastname = $(".last-name").val()
        var email = $(".email").val()

        if (!password || !passwordAgain || !username || !firstname || !lastname || !email) {
            alert("Fill in all fields");
        } else if (password != passwordAgain) {
            alert("Passwords do not match");
        } else {

            var data = { "username": username, 
                         "email": email, 
                         "first_name":firstname, 
                         "last_name":lastname, 
                         "password":password };

            var dataStr = JSON.stringify(data);
            
            $.ajax({
                    type: "POST",
                    url: "http://104.236.108.142:8000/api/register",
                    processData: false,
                    data: dataStr,
                    contentType: "application/json; charset=utf-8",
                    dataType   : "json",
                }).done(function (data, status, xhr) {

                    var response = xhr.responseJSON.message;

                    if (response != "User successfully added") {
                        alert(response);
                    } else {
                        alert(response);
                        router.load(" ");
                    }
                    
                }).fail(function (xhr, status, error) {
                    var message = "Login Failed\n";
                    if ((!xhr.status) && (!navigator.onLine)) {
                        message += "Bad Internet Connection\n";
                    }
                    message += "Status: " + xhr.status + " " + xhr.responseText;
                    alert(message);
                    alert(data);
                });
        }
    }
    this.initialize();
}