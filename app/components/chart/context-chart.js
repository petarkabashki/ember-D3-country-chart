import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: ['context-chart'],
  attributeBindings: ['width','height'],
  classNameBindings: ['selectedParam'],

  // ---------------------------------------------------------------------------
  // Drawing Functions
  // ---------------------------------------------------------------------------

  update() {
    this.updateRows();
  },

  updateRows() {
    //  check if we have inserted element already
    if(!this.get('element')) {
      return;
    }

    const xScale = d3.scale.linear().range([0, 500]).domain([0, 100]);
    const selectedParam = this.selectedParam;
    //console.log("updateRows:  this.sortedByParam=", this.sortedByParam)
    //console.log("updateRows:  this.selectedParam=", this.selectedParam)
    const rowsData = this.get('data').sort((a,b) => {
        const aval = a[this.sortedByParam].value,
              bval = b[this.sortedByParam].value;

        if (aval > bval) {
          return 1;
        }
        if (aval < bval) {
          return -1;
        }
        return 0;
      });

    const d3el = d3.select(this.get('element')).select('.chart-wrapper');

    const rowsSelection = d3el.selectAll('.rope-row-item').data(rowsData, function(d) {
      return d.id;
    });
    const enterRowsSelection = rowsSelection.enter();

    //  rows
    const enterRows = enterRowsSelection.append('g').attr('class', 'rope-row-item');
    enterRows
      .append('g')
        .attr('class', 'row-item__title')
        .attr('transform', 'translate(0,15)')
          .append('text')
            .text(function(d) { return d.name; });

    //  parent container for dots and line
    const rowItemGroup = enterRows
      .append('g')
        .attr('class', 'row-item__group')
        .attr('transform', 'translate(100,0)')
        ;

    rowItemGroup.each(function(d,i){
      const sel = d3.select(this);
      const lineData = [d.var1, d.var2, d.var3, d.var4]
          //.map(d => Object.assign({}, d, {selected: d.id === this.selectedParam}))
          .sort((a,b) => (a.value - b.value));
      const line = d3.svg.line()
        .x(function(d) { return d.value * 3; })
        .y(function(d) { return 0; })
        .interpolate("linear");

      sel.append("path")
        .classed("row-item__line", true)
        .attr("d", function(d) { return line(lineData) + "Z"; });
    })

    const rowDots = rowItemGroup
      .selectAll("g")
      .data(d => [d.var1, d.var2, d.var3, d.var4]
            .sort((a,b) => (a.value - b.value))
            )

    rowDots.enter()
        .append('g')
        .classed("row-item__dot", true)

    const circles = rowDots
      .append("circle")
      .attr("class", function(d,i) { return "row-item__dot--" + d.id })
      .attr("cx", (d) => d.value * 3)

    rowsSelection
      .attr('transform', function(d,i) {
        const rowHeight = 50;
        const offsetHeight = rowHeight * i;
        return 'translate(0,' + offsetHeight + ')';
      });

  },

  didInsertElement() {
    this.update();
  },

  didReceiveAttrs() {
    this.update();
  },

});
