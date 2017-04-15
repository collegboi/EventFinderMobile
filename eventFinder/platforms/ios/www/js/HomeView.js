var HomeView = function (service) {

    var eventListView;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        eventListView = new EmployeeListView();
        this.loadView();
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
        service.findByName($('.search-key').val()).done(function(employees) {
            eventListView.setEmployees(employees);
        });
    };

    this.initialize();
}