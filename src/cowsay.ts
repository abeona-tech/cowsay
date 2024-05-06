const lolcatjs = require('lolcatjs')

lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true
lolcatjs.options.animate = true

lolcatjs.fromFile('./dist/quote.txt')
