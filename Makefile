CWD=$(shell pwd)
BIN:=./node_modules/.bin

.PHONY: build test tdd

build:
	@docker build \
		-t components-image \
		.

test:
	-@docker rm -f components-container 2> /dev/null || true
	@docker run --rm -it \
		--name components-container \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		components-image \
		/bin/sh -c '$(BIN)/standard && $(BIN)/mocha --compilers js:babel-core/register --recursive test'

tdd:
	-@docker rm -f components-container 2> /dev/null || true
	@docker run --rm -it \
		--name components-container \
    -v $(CWD)/src/lib:/usr/src/lib \
    -v $(CWD)/src/test:/usr/src/test \
		components-image \
		$(BIN)/nodemon \
			--quiet \
			--watch ./ \
			--delay 250ms \
			-x '$(BIN)/mocha --compilers js:babel-core/register --recursive test || exit 1'
