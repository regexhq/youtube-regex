/**
 * youtube-regex <https://github.com/tunnckoCore/youtube-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function youtubeRegex() {
  var regex = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/g;

  return regex;
};
