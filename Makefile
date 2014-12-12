# Makefile <https://github.com/tunnckoCore/dotfiles>
#
# Copyright (c) 2014 Charlike Mike Reagent, contributors.
# Released under the MIT license.
#

JSCS      = node_modules/.bin/jscs
MOCHA     = node_modules/.bin/mocha
_MOCHA    = node_modules/.bin/_mocha
JSHINT    = node_modules/.bin/jshint
ISTANBUL  = node_modules/.bin/istanbul
COVERALLS = node_modules/.bin/coveralls

lint:
	npm install
	${JSHINT} .
	${JSCS} . --reporter inline

test: lint
	${MOCHA}

test-cov: lint
	${ISTANBUL} cover ${_MOCHA}

test-travis: lint
	${ISTANBUL} cover ${_MOCHA} --report lcovonly
  
coveralls: test-travis
	cat ./coverage/lcov.info | ${COVERALLS}

clean:
	rm -rf node_modules coverage

.PHONY: lint test coveralls clean
