'use strict';

var youtubeRegex = require('./index')
var read = require('fs').readFileSync;

var fixture = read('fixture.txt', 'utf-8');

// var regex = youtubeRegex('g');
// var input = fixture;

// if(regex.test(input)) {
//   while (match = regex.exec(input)) {
//     console.log(match[1]);
//   }
// }
