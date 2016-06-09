import Ember from 'ember';
import DS from 'ember-data';

const DUMMY_CHART_DATA = [
  {
    id: 1,
    name: 'Brazil',
    var1: 20,
    var2: 43,
    var3: 30,
    var4: 70,
  },
  {
    id: 2,
    name: 'Egypt',
    var1: 10,
    var2: 80,
    var3: 45,
    var4: 30,
  },
  {
    id: 3,
    name: 'Germany',
    var1: 14,
    var2: 60,
    var3: 95,
    var4: 53,
  },
  {
    id: 4,
    name: 'Mauritius',
    var1: 10,
    var2: 80,
    var3: 45,
    var4: 30,
  },
  {
    id: 5,
    name: 'Slovenia',
    var1: 40,
    var2: 34,
    var3: 25,
    var4: 92,
  },
  {
    id: 6,
    name: 'Thailand',
    var1: 56,
    var2: 24,
    var3: 26,
    var4: 59,
  },
  {
    id: 7,
    name: 'Iran',
    var1: 80,
    var2: 50,
    var3: 41,
    var4: 83,
  },
  {
    id: 8,
    name: 'Canada',
    var1: 45,
    var2: 53,
    var3: 45,
    var4: 50,
  },
  {
    id: 9,
    name: 'Indonesia',
    var1: 53,
    var2: 70,
    var3: 85,
    var4: 10,
  },
  {
    id: 10,
    name: 'Bahrain',
    var1: 22,
    var2: 53,
    var3: 89,
    var4: 60,
  }
];

//preformat dummy data
const dummy_data = DUMMY_CHART_DATA.map(function(d,i) {
  d.var1 = { id: 'var1', value: d.var1};
  d.var2 = { id: 'var2', value: d.var2};
  d.var3 = { id: 'var3', value: d.var3};
  d.var4 = { id: 'var4', value: d.var4};
  return d;
});


export default Ember.Route.extend({
  config: Ember.Object.create({
    selectedParam: '',
    sortedByParam: 'var1',
    legendItems: ['var1', 'var2', 'var3', 'var4'],
    data: dummy_data,
  }),

  model() {
    return this.config;
  },


});
