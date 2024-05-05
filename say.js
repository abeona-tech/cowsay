"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cowsay = require("cowsay");
var fs = require("fs");
var path = require("path");
var wrap = require("word-wrap");
// Read the quotes from the JSON file
var quotes = JSON.parse(fs.readFileSync(path.join(__dirname, 'tech_quotes.json'), 'utf-8'));
// Pick a random quote
var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Wrap the text at 120 characters
var wrappedQuote = wrap(randomQuote, { width: 40 });
// Generate the cowsay message
var message = cowsay.say({ text: wrappedQuote });
// Print the message to a file in rich text format
fs.writeFileSync(path.join(__dirname, 'quote.txt'), message);
