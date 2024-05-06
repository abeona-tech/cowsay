Cowsay Application
___

![Cowsay](./src/profile%20pic.png) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/meowso/cowsay) ![GitHub top language](https://img.shields.io/github/languages/top/meowso/cowsay) ![GitHub last commit](https://img.shields.io/github/last-commit/meowso/cowsay) ![GitHub issues](https://img.shields.io/github/issues/meowso/cowsay) ![GitHub pull requests](https://img.shields.io/github/issues-pr/meowso/cowsay) ![GitHub stars](https://img.shields.io/github/stars/meowso/cowsay?style=social) ![GitHub forks](https://img.shields.io/github/forks/meowso/cowsay?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/meowso/cowsay?style=social) ![GitHub followers](https://img.shields.io/github/followers/brunopalma?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/m3auso?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/cowsayco?style=social)

This project is a simple implementation of the classic command-line program `cowsay` that tweets a quote a day.

**Table of Contents**

- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install
npm run start
```

## Scripts

**npm run clean:** Removes the dist directory.
**npm run compile:** Compiles the TypeScript files.
**npm run start:** Runs the clean, compile, say, lolcat, convert, and tweet scripts in order.
**npm run convert:** Runs the convert.js script.
**npm run say:** Runs the say.js script.
**npm run lolcat:** Runs the lolcat.js script and outputs to lolcat.ansi.
**npm run tweet:** Runs the tweet.js script.

## Dependencies

- ansi-to-html: ^0.7.2
- cowsay: ^1.6.0
- dotenv: ^16.4.5
- lolcatjs: ^2.4.3
- node-html-to-image: ^4.0.0
- node-pty: ^1.0.0
- twitter-api-v2: ^1.16.3
- typescript: ^5.4.5
- word-wrap: ^1.2.5

## Dev Dependencies

- @types/node: ^20.12.2
- @types/lolcatjs: ^2.4.1

## Author

Bruno Palma

Email: <cat@cowsay.co>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
