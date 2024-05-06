import fs from 'fs'
import path from 'path'
import Convert from 'ansi-to-html'
import nodeHtmlToImage from 'node-html-to-image'

const convert = new Convert({ newline: true })

const srcDir = path.resolve(__dirname, '..', 'src')

// Read the ANSI string from src/quote.txt
let ansiString = fs.readFileSync(path.join(__dirname, 'lolcat.ansi'), 'utf-8')

// Convert ANSI to HTML
let html = convert.toHtml(ansiString)

// Read the CSS from style.css
let css = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf-8')

// Add CSS and external links to the HTML
html = `
  <style>${css}</style>
  <div class="container"><pre>${html}</pre></div>
`
// Write the HTML to dist/cowsay.html
fs.writeFileSync(path.join(__dirname, 'cowsay.html'), html)

// Convert HTML to PNG
nodeHtmlToImage({
  output: path.join(__dirname, `cowsay-quote.png`),
  html,
  puppeteerArgs: {
    defaultViewport: {
      width: 599, // Set the width of the image
      height: 330, // Set the height of the image
    },
  },
})
  .then()
  .catch((error) => console.error('oops, something went wrong!', error))
