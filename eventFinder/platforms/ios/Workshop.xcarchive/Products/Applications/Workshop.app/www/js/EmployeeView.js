var EmployeeView = function (event) {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-attendee', this.addAttendee);
        this.render();
    };

    this.render = function() {
        //alert(event.geometry.coordinates[0]);
        localStorage.eventName = event.properties.name;
        localStorage.eventLon = event.geometry.coordinates[0];
        localStorage.eventLat = event.geometry.coordinates[1];
        this.$el.html(this.template(event));
        return this;
    };

    this.addAttendee = function() {

        var eventID = $(".eventid").val();
        var data = { "event": eventID, "attendee": localStorage.userID };

        alert(data);

        var dataStr = JSON.stringify(data);
        
        $.ajax({
                type: "POST",
                url: "http://104.236.108.142:8000/api/attendee/",
                processData: false,
                data: dataStr,
                contentType: "application/json; charset=utf-8",
                dataType   : "json",
            }).done(function (data, status, xhr) {

                var response = xhr.responseJSON.message;

                if (response != "User successfully added") {
                    alert(response);
                } else {
                    alert("Successfully attending");
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

    this.initialize();
}

// var EmployeeView = function(id) {

//     this.initialize = function() {
//         this.$el = $('<div/>');
//         this.render();
//         // this.$el.on('click', '.add-location-btn', this.addLocation);
//         // this.$el.on('click', '.add-contact-btn', this.addToContacts);
//         // this.$el.on('click', '.change-pic-btn', this.changePicture);
//     };



//     this.render = function() {
//         this.$el.html(this.template());
//         return this;
//     };

//     // this.addLocation = function(event) {
//     //     console.log('addLocation');
//     //     event.preventDefault();
//     //     navigator.geolocation.getCurrentPosition(
//     //         function(position) {
//     //             alert(position.coords.latitude + ',' + position.coords.longitude);
//     //         },
//     //         function() {
//     //             alert('Error getting location');
//     //         });
//     //     return false;
//     // };

//     // this.addToContacts = function(event) {
//     //     event.preventDefault();
//     //     console.log('addToContacts');
//     //     if (!navigator.contacts) {
//     //         alert("Contacts API not supported", "Error");
//     //         return;
//     //     }
//     //     var contact = navigator.contacts.create();
//     //     contact.name = {givenName: employee.firstName, familyName: employee.lastName};
//     //     var phoneNumbers = [];
//     //     phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
//     //     phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
//     //     contact.phoneNumbers = phoneNumbers;
//     //     contact.save();
//     //     return false;
//     // };

//     // this.changePicture = function(event) {
//     //     event.preventDefault();
//     //     if (!navigator.camera) {
//     //         alert("Camera API not supported", "Error");
//     //         return;
//     //     }
//     //     var options =   {   quality: 50,
//     //                         destinationType: Camera.DestinationType.DATA_URL,
//     //                         sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
//     //                         encodingType: 0     // 0=JPG 1=PNG
//     //                     };

//     //     navigator.camera.getPicture(
//     //         function(imgData) {
//     //             $('.media-object', this.$el).attr('src', "data:image/jpeg;base64,"+imgData);
//     //         },
//     //         function() {
//     //             alert('Error taking picture', 'Error');
//     //         },
//     //         options);

//     //     return false;
//     // };

//     this.initialize();
// }
