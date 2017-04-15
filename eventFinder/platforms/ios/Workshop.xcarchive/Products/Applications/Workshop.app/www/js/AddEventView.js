var AddEventView = function () {


    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-event', this.addAttendee);
        this.$el.on('click', '.add-location', this.addLocation);
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        return this;
    };

    this.addLocation = function(event) {
        console.log('addLocation');
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(
            function(position) {
                localStorage.longitude = position.coords.longitude
                localStorage.latitude = position.coords.latitude;
                alert(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;
    };

    this.addAttendee = function() {

        var name = $(".name").val()
        var description = $(".description").val()
        var time = $(".time").val()
        var date = $(".date").val()

        if (!name || !time || !date) {
            alert("Fill in all fields");
        } else if (!localStorage.latitude || !localStorage.longitude) {
            alert("Add location");
        } else {
            var data = {"name": name, 
                        "time": date+"T"+time, 
                        "description":description, 
                        "owner":3,
                        "lat": localStorage.latitude ,
                        "lon": localStorage.longitude};

            var dataStr = JSON.stringify(data);
            
            $.ajax({
                    type: "POST",
                    url: "http://104.236.108.142:8000/api/events/",
                    processData: false,
                    data: dataStr,
                    contentType: "application/json; charset=utf-8",
                    dataType   : "json",
                }).done(function (data, status, xhr) {
                    alert("Event added");
                }).fail(function (xhr, status, error) {
                    var message = "Failed\n";
                    if ((!xhr.status) && (!navigator.onLine)) {
                        message += "Bad Internet Connection\n";
                    }
                    message += "Status: " + xhr.status + " " + xhr.responseText;
                    alert(message);
                });
        }
    }

    this.initialize();

}