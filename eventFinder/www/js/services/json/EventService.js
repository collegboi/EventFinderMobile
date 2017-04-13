var EventService = function() {
    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://104.236.108.142:8000/api/events/";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.getAll = function() {
        return $.ajax({url: url});
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id});
    }

    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }


}