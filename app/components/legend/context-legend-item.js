import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['context-legend-item'],

  actions: {
    click: function (item) {
      //console.log("click")
      this.sendAction("clicked", item)
    },
    mouseover:function(item){
      //console.log("mouseOver", item)
      this.sendAction("mouseOver", item)
    }
  }

});
