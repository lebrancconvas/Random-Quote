import fs from 'fs';
import * as quote from './quote.json' assert { type: 'json' };

let randomIndex = Math.floor(Math.random() * quote.default.length);

let heading = "# Random Quote";
let content = quote.default[randomIndex]; 

let markdown = `${heading}\n${content}`;

fs.writeFileSync('README.md', markdown);