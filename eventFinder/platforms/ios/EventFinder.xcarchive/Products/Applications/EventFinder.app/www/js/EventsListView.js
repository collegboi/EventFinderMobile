var EventsListView = function () {

    var events;

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.setEvents = function(list) {
        events = list;
        this.render();
    }

    this.render = function() {
        this.$el.html(this.template(events));
        return this;
    };

    this.initialize();

}