// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // tagName: 'tr',
  tagName: 'div',
  className: 'libraryEntry',

  template: _.template('<div class="artist">(<%= artist %>)</div><div class="songTitle"><%= title %></div>'),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
