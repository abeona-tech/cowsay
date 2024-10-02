import fs from 'fs'
import { spawn } from 'node-pty'

const text = fs.readFileSync('dist/quote.txt', 'utf8')
fs.writeFileSync('./dist/temp.txt', text)

let output = ''
const seed = Math.floor(Math.random() * 1000)
const ptyProcess = spawn('npx', ['lolcatjs', '--seed', seed.toString(), 'dist/temp.txt'], {})

ptyProcess.onData((data) => {
  output += data
})

ptyProcess.onExit(() => {
  // Remove the cursor show sequence
  output = output.replace(/\x1b\[\?25h/g, '')

  // Trim the "GG" and any associated control characters at the end
  output = output.replace(/\x1b\[1G\x1b\[0K.\x1b\[1G\x1b\[0K$/g, '')

  // Trim any trailing whitespace
  output = output.trim()

  fs.writeFileSync('./dist/lolcat.ansi', output)
  fs.unlinkSync('./dist/temp.txt')
})
