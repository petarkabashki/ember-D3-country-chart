import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['context-legend'],


  actions:{
    itemClicked: function(item){
      this.sendAction("itemClicked", item)
    },

    mouseOver: function(item){
      this.sendAction("itemMouseOver", item)
    },

    mouseout: function(){
      console.log("mouseout")
      this.sendAction("mouseOut")
    }

  },


});
