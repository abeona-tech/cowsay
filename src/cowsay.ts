// node ./node_modules/carbon-now-cli/dist/cli.js ./dist/quote.txt -l -w 800 -h 400 -t png --save-as quote -p presentation --config ./src/.carbon-now.json
import { execSync } from 'child_process'

const command =
  'node ./node_modules/carbon-now-cli/dist/cli.js dist/quote.txt -l -w 800 -h 400 -t png --save-as dist/quote -p presentation --config src/.carbon-now.json'
execSync(command, { stdio: 'inherit' })
