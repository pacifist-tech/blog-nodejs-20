
import process from 'process'

const startTime = process.hrtime();

import { VERSION } from 'https://coffeescript.org/browser-compiler-modern/coffeescript.js';
console.log(VERSION);

const endTime = process.hrtime(startTime);
console.log(`Execution time: ${endTime[0]}s ${endTime[1] / 1000000}ms`);



