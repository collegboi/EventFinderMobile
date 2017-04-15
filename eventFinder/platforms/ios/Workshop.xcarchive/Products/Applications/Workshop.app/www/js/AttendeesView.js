var AttendeesView = function (attendees) {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(attendees));
        return this;
    };

    this.initialize();

}