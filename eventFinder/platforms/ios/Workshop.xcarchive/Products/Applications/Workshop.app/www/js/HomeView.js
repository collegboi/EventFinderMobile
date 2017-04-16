var HomeView = function (service) {

    var eventListView;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('search', '.search-key', this.findByName);
        eventListView = new EmployeeListView();
        this.loadView();
        //this.findByName();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(eventListView.$el);
        return this;
    };

    this.loadView = function() {

        service.getAll(function(output){
            eventListView.setEmployees(output);
        });
    }

    this.findByName = function() {

        var name = $('.search-key').val();

        if (!name ) {
            this.loadView();
        } else {
            service.findByName(name,function(output){
                eventListView.setEmployees(output);
            });
        }
    };

    this.initialize();
}