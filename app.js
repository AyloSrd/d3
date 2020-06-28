const data = [
  {},
  {}
]
const createStatistic = (str) => {
  let chrs = str.split('').sort()
  let sentenceData = []
  
  let character = '' 
  let frequency = 1

  for (let i = 0; i < chrs.length; i++) {
    character = chrs[i]
    if (chrs[i] === chrs[i + 1]) {
      frequency++
    }else{
      sentenceData.push([character, frequency])
      character = chrs[i]
      frequency = 1
    }
  }
  return sentenceData
} 
d3.select("form")
    .on(
      'submit', 
      () => {
      d3.event.preventDefault();
      var input = d3.select('input');
      data.shift()
      data.push(createStatistic(input.property('value')))
      console.log(data)
    });
/*
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
      )*/