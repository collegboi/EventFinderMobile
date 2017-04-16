var EventService = function() {
    
    var urlEvents = "http://104.236.108.142:8000/api/events/";
    var urlAttendees = "http://104.236.108.142:8000/api/attendeesEvent/";
    var searchEvents = "http://104.236.108.142:8000/api/eventSearch/";

    this.initialize = function() {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.getAllAttendees = function(id, handleData) {
        alert(urlAttendees+id);
        $.ajax({
            type: "GET",
            url: urlAttendees + id,
            success:function(data) {
                handleData(data); 
            }
        });
    }

    this.getAll = function(handleData) {
        $.ajax({
            type: "GET",
            url: urlEvents,
            success:function(data) {
                handleData(data.features); 
            }
        });
    }

     this.findById = function(id, handleData) {
         $.ajax({
            type: "GET",
            url: urlEvents + id,
            success:function(data) {
                handleData(data); 
            }
        });
    }

     this.findByName = function(searchKey, handleData) {
        $.ajax({
            type: "GET",
            url: searchEvents + searchKey,
            success:function(data) {
                handleData(data.features); 
            }
        });
    }
}