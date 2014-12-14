# youtube-regex [![NPM version][npmjs-img]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Coveralls][coveralls-img]][coveralls-url] [![regexps org][regexps-img]][regexps-url]
> The correct Youtube video id regex. Regex done right!


## Install [![Nodei.co stats][npmjs-ico]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install youtube-regex
$ npm test
```


## Online
- http://regexr.com/3a2p0
- https://regex101.com/r/rN1qR5/2


## Usage
```js
var youtubeRegex = require('youtube-regex');

// contains youtube url address
youtubeRegex().test('unicorn youtube.com/watch?v=0EWbonj7f18');
//=> true

// also these will works
youtubeRegex().test('youtube.com/watch?v=0EWbonj7f18');
//=> true
youtubeRegex().test('youtube.com/watch?feature=related&v=0EWbonj7f18');
//=> true
youtubeRegex().test('youtube.com/watch?v=0EWbonj7f18&feature=related');
//=> true
youtubeRegex().test('http://www.youtube.com/watch?v=0EWbonj7f18');
//=> true
youtubeRegex().test('http://www.youtube.com/watch?feature=related&v=0EWbonj7f18');
//=> true
```
> For more use-cases see [tests](./test.js)


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/youtube-regex
[npmjs-img]: http://img.shields.io/npm/v/youtube-regex.svg
[npmjs-ico]: https://nodei.co/npm/youtube-regex.svg?mini=true

[coveralls-url]: https://coveralls.io/r/regexps/youtube-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/youtube-regex.svg

[license-url]: https://github.com/regexps/youtube-regex/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/regexps/youtube-regex
[travis-img]: https://travis-ci.org/regexps/youtube-regex.svg

[depstat-url]: https://david-dm.org/regexps/youtube-regex
[depstat-img]: https://david-dm.org/regexps/youtube-regex.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/youtube-regex/graphs/contributors

[regexps-img]: http://img.shields.io/badge/regexps-approved-brightgreen.svg
[regexps-url]: https://github.com/regexps