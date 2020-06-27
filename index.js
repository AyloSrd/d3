console.log('k')

d3.selectAll('div')
	.style(
		'font-size',
		() => `${Math.random()*300}px`
	)