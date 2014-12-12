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

describe('youtube-regex', function() {
  it('should work with `watch` links', function(done) {
    assert.ok(test('youtube.com/watch?v=0EWbonj7f18'));
    assert.ok(test('youtube.com/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('youtube.com/watch?v=0EWbonj7f18&feature=related'));
    assert.ok(test('http://www.youtube.com/watch?v=0EWbonj7f18'));
    assert.ok(test('http://www.youtube.com/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('http://www.youtube.com/watch?v=0EWbonj7f18&feature=related'));
    assert.ok(test('https://www.youtube.com/watch?v=0EWbonj7f18'));
    assert.ok(test('https://www.youtube.com/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('https://www.youtube.com/watch?v=0EWbonj7f18&feature=related'));
    assert.ok(test('www.youtube.com/watch?v=0EWbonj7f18'));
    assert.ok(test('www.youtube.com/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('www.youtube.com/watch?v=0EWbonj7f18&feature=related'));
    done();
  });
  it('should work with `embed` links', function(done) {
    assert.ok(test('youtube.com/embed/watch?v=0EWbonj7f18'));
    assert.ok(test('youtube.com/embed/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('youtube.com/embed/v/0EWbonj7f18'));
    assert.ok(test('youtube.com/embed/v=0EWbonj7f18'));
    done();
  });
  it('should work with shortlikns youtu.be/{id}', function(done) {
    assert.ok(test('http://youtu.be/0EWbonj7f18'));
    assert.ok(test('http://youtu.be/n17B_uFF4cA'));
    done();
  });
  it('should work with `attribution_link`s (wtf?)', function(done) {
    assert.ok(test('youtube.com/attribution_link?u=/watch?v=0EWbonj7f18'));
    assert.ok(test('youtube.com/attribution_link?u=/v/0EWbonj7f18'));
    assert.ok(test('youtube.com/attribution_link?u=/embed/watch?feature=related&v=0EWbonj7f18'));
    assert.ok(test('youtube.com/attribution_link?u=/embed/watch?v=0EWbonj7f18'));
    assert.ok(test('youtube.com/attribution_link?u=/embed/v/0EWbonj7f18'));
    assert.ok(test('youtube.com/attribution_link?u=/embed/v=0EWbonj7f18'));
    done();
  });
});
