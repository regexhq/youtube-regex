'use strict';

var youtubeRegex = require('./index')
var read = require('fs').readFileSync;

var fixture = read('fixture.txt', 'utf-8');

// contains youtube url address
youtubeRegex().test(fixture);
//=> true
