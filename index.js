/**
 * youtube-regex <https://github.com/tunnckoCore/youtube-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function youtubeRegex() {
  return /youtu(?:.+\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{6,11})/g;
};
