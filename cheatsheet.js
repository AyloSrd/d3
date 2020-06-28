
//	notes app
d3.select("#new-note")
.on('submit', function() {
  d3.event.preventDefault();
  var input = d3.select('input');
  d3.select('#preview').style('display', 'none')
  d3.select("#notes")
	.append('p')
	  .classed('note', true)
	  .text(input.property('value'));
  input.property('value', '');
});

d3.select("#remove-notes-btn")
  .on('click', function() {
d3.selectAll(".note")
  .remove()
});

d3.select("#feeling-lucky-btn")
.on('click', () => {
d3.selectAll(".note")
  .style(
	'font-size',
	() => `${Math.random()*50 + 10}px`
  )
});


d3.select("input")
.on(
  'input',
  () => {
	let tempTxt = d3.event.target.value //or d3.select(d3.event.target).property('value')
	d3.select('#preview')
		.style('display', 'block')
		.text(tempTxt)
	
	tempTxt === '' && d3.select('#preview').style('display', 'none')
  }
  )