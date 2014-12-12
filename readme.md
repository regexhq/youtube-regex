# youtube-regex [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url] [![Coveralls][coveralls-shields]][coveralls-url]
> The correct Youtube video id regex. Regex done right!


## Install [![Nodei.co stats][npmjs-install]][npmjs-url] 
> Install with [npm](https://npmjs.org)

```
$ npm install youtube-regex
$ npm test
```


## Usage
```js
var youtubeRegex = require('youtube-regex');

// contains youtube url address
youtubeRegex().test('unicorn youtube.com/watch?v=0EWbonj7f18');
//=> true
```


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/youtube-regex/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/youtube-regex
[npmjs-shields]: http://img.shields.io/npm/v/youtube-regex.svg
[npmjs-install]: https://nodei.co/npm/youtube-regex.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/youtube-regex?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/youtube-regex.svg

[license-url]: https://github.com/tunnckoCore/youtube-regex/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/youtube-regex
[travis-img]: https://travis-ci.org/tunnckoCore/youtube-regex.svg

[depstat-url]: https://david-dm.org/tunnckoCore/youtube-regex
[depstat-img]: https://david-dm.org/tunnckoCore/youtube-regex.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
