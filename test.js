/**
 * youtube-regex <https://github.com/tunnckoCore/youtube-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var youtubeRegex = require('./index');

function test(str) {
  return youtubeRegex().test(str);
}

var fixtures = {
  // should not match
  invalid: [
    'youtube.com/embed/v=0EWbonj7f18',
    'youtube.com/e/v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/embed/v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/v=0EWbonj7f18',
    'hey guys go to youtube and v=thisweird video i found',
    'i found a youtube video on 4chan /v/foobarbaz',
    'but we work at youtu.be and /thisweird video'
  ],
  // short links
  shortlinks: [
    'youtu.be/WijF8aivOo8',
    'youtu.be/0EWbonj7f18'
  ],
  // mixed
  mixed: [
    'youtube.com/user/sandervandoorntv/watch?v=WijF8aivOo8',
    'youtube.com/user/sandervandoorntv/watch?v=WijF8aivOo8&feature=related',
    'youtube.com/user/sandervandoorntv/watch?feature=related&v=WijF8aivOo8',
    'youtube.com/watch?v=0EWbonj7f18',
    'youtube.com/watch?feature=related&v=0EWbonj7f18',
    'youtube.com/watch?v=0EWbonj7f18&feature=related',
    'youtube.com/embed/watch?v=0EWbonj7f18',
    'youtube.com/embed/watch?feature=related&v=0EWbonj7f18',
    'youtube.com/embed/v/0EWbonj7f18',
    'youtube.com/e/v/0EWbonj7f18',
    'youtube.com/e/watch?v=0EWbonj7f18',
    'youtube.com/e/watch?feature=related&v=0EWbonj7f18'
  ],
  // attribution link
  attrlink: [
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch?v=WijF8aivOo8',
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch?v=WijF8aivOo8&feature=related',
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch?feature=related&v=WijF8aivOo8',
    'youtube.com/attribution_link?u=/watch?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/watch?feature=related&v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/watch?v=0EWbonj7f18&feature=related',
    'youtube.com/attribution_link?u=/embed/watch?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/embed/watch?feature=related&v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/embed/v/0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/v/0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/watch?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/watch?feature=related&v=0EWbonj7f18'
  ],
  // trailing slash
  trailing: [
    'youtube.com/user/sandervandoorntv/watch/?v=WijF8aivOo8',
    'youtube.com/user/sandervandoorntv/watch/?v=WijF8aivOo8&feature=related',
    'youtube.com/user/sandervandoorntv/watch/?feature=related&v=WijF8aivOo8',
    'youtube.com/watch/?v=0EWbonj7f18',
    'youtube.com/watch/?feature=related&v=0EWbonj7f18',
    'youtube.com/watch/?v=0EWbonj7f18&feature=related',
    'youtube.com/embed/watch/?v=0EWbonj7f18',
    'youtube.com/embed/watch/?feature=related&v=0EWbonj7f18',
    'youtube.com/e/watch/?v=0EWbonj7f18',
    'youtube.com/e/watch/?feature=related&v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?v=WijF8aivOo8',
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?v=WijF8aivOo8&feature=related',
    'youtube.com/attribution_link?u=/user/sandervandoorntv/watch/?feature=related&v=WijF8aivOo8',
    'youtube.com/attribution_link?u=/watch/?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/watch/?feature=related&v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/watch/?v=0EWbonj7f18&feature=related',
    'youtube.com/attribution_link?u=/embed/watch/?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/embed/watch/?feature=related&v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/embed/v/0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/v/0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/watch/?v=0EWbonj7f18',
    'youtube.com/attribution_link?u=/e/watch/?feature=related&v=0EWbonj7f18'
  ]
};

describe('youtube-regex', function() {
  describe('should match id from', function() {
    it('shortlinks `youtu.be/{id}`', function(done) {
      fixtures.shortlinks.forEach(function each(link) {
        assert.ok(test(link));
      });
      done();
    });
    it('common used links', function(done) {
      fixtures.mixed.forEach(function each(link) {
        assert.ok(test(link));
      });
      done();
    });
    it('attribution links', function(done) {
      fixtures.attrlink.forEach(function each(link) {
        assert.ok(test(link));
      });
      done();
    });
    it('trailing slash (watch/?v=id) links', function(done) {
      fixtures.trailing.forEach(function each(link) {
        assert.ok(test(link));
      });
      done();
    });
  });
  describe('should NOT match id from', function() {
    it('invalid links', function(done) {
      fixtures.invalid.forEach(function each(link) {
        assert(!test(link));
      });
      done();
    });
  });
});
