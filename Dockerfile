FROM node:8
RUN mkdir -p /usr/src && apt-get update && apt-get install -y zsh make git && mkdir /root/.zsh && git clone https://github.com/zsh-users/zsh-history-substring-search /root/.zsh/zsh-history-substring-search && git clone https://github.com/zsh-users/zsh-autosuggestions /root/.zsh/zsh-autosuggestions && git clone https://github.com/zsh-users/zsh-syntax-highlighting /root/.zsh/zsh-syntax-highlighting
WORKDIR /usr/src
COPY src /usr/src
RUN npm i
CMD ./node_modules/.bin/standard && ./node_modules/.bin/mocha --compilers js:babel-core/register --recursive test
