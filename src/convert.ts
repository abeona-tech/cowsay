import fs from 'fs'
import path from 'path'
import Convert from 'ansi-to-html'
import nodeHtmlToImage from 'node-html-to-image'

const convert = new Convert({ newline: true })

const srcDir = path.resolve(__dirname, '..', 'src')

let ansiString = fs.readFileSync(path.join(__dirname, 'lolcat.ansi'), 'utf-8')

let html = convert.toHtml(ansiString)

let css = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf-8')

html = `
  <style>${css}</style>
  <div class="container"><pre>${html}</pre></div>
`
fs.writeFileSync(path.join(__dirname, 'cowsay.html'), html)

nodeHtmlToImage({
  output: path.join(__dirname, `cowsay-quote.png`),
  html,
  puppeteerArgs: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
    defaultViewport: {
      width: 1600 * 0.75,
      height: 900 * 0.75,
    },
  },
})
  .then(() => console.log('The image was created successfully!'))
  .catch((error) => console.error('oops, something went wrong!', error))
