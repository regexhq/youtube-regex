# Makefile <https://github.com/tunnckoCore/dotfiles>
#
# Copyright (c) 2014 Charlike Mike Reagent, contributors.
# Released under the MIT license.
#

MOCHA     = node_modules/.bin/mocha
_MOCHA    = node_modules/.bin/_mocha
ISTANBUL  = node_modules/.bin/istanbul
COVERALLS = node_modules/.bin/coveralls

test: 
	npm install
	${MOCHA}

test-cov:
	npm install
	${ISTANBUL} cover ${_MOCHA}

test-travis:
	npm install
	${ISTANBUL} cover ${_MOCHA} --report lcovonly
  
coveralls: test-travis
	cat ./coverage/lcov.info | ${COVERALLS}

clean:
	rm -rf node_modules coverage

.PHONY: lint test coveralls clean
