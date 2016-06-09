import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-chart'],

  actions: {
    legendItemClicked: function(item){
      this.model.set("sortedByParam", item);
    },

    legendItemMouseOver: function(item){
      this.model.set("selectedParam", item);
    },

    legendMouseOut: function(){
      this.model.set("selectedParam", undefined);
    }
  }
});
