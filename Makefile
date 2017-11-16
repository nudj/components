CWD=$(shell pwd)
BIN:=./node_modules/.bin

.PHONY: build test tdd

build:
	@docker build \
		-t components-image \
		--build-arg NPM_TOKEN=${NPM_TOKEN} \
		.

test:
	-@docker rm -f components-container 2> /dev/null || true
	@docker run --rm -it \
		--name components-container \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		components-image

flow:
	-@docker rm -f components-container 2> /dev/null || true
	@docker run --rm -it \
		--name components-container \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		-v $(CWD)/src/.flowconfig:/usr/src/.flowconfig \
		components-image \
		/bin/sh -c '$(BIN)/flow'

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

ssh:
	-@docker rm -f components-container 2> /dev/null || true
	@docker run --rm -it \
		--name components-container \
		-v $(CWD)/.zshrc:/root/.zshrc \
		-v $(CWD)/src/lib:/usr/src/lib \
		-v $(CWD)/src/test:/usr/src/test \
		-v $(CWD)/src/.npmrc:/usr/src/.npmrc \
		-v $(CWD)/src/.flowconfig:/usr/src/.flowconfig \
		-v $(CWD)/src/package.json:/usr/src/package.json \
		components-image \
		/bin/zsh
