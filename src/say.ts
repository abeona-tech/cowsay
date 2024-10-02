import * as cowsay from 'cowsay'
import * as fs from 'fs'
import * as path from 'path'
import wrap from 'word-wrap'

const distDir = path.resolve(__dirname, '..', 'dist')
const srcDir = path.resolve(__dirname, '..', 'src')

const quotes: string[] = JSON.parse(fs.readFileSync(path.join(srcDir, 'tech_quotes.json'), 'utf-8'))

const usedQuotesFile = path.join(srcDir, 'used_quotes.json')
let usedQuotes: string[] = []
if (fs.existsSync(usedQuotesFile)) {
  usedQuotes = JSON.parse(fs.readFileSync(usedQuotesFile, 'utf-8'))
}

const availableQuotes = quotes.filter(quote => !usedQuotes.includes(quote))

if (availableQuotes.length === 0) {
  usedQuotes = []
  availableQuotes.push(...quotes)
}

const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)]

usedQuotes.push(randomQuote)
fs.writeFileSync(usedQuotesFile, JSON.stringify(usedQuotes, null, 2))

const wrappedQuote = wrap(randomQuote, {
  width: 40,
  indent: '',
  trim: true,
  cut: false,
  newline: '\n',
  escape: (str: string) => str,
})

const message = cowsay.say({ text: wrappedQuote })

fs.writeFileSync(path.join(distDir, 'quote.txt'), message + '\n')
