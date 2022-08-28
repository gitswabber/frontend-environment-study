# frontend development environment

For understanding environment of frontend development!


## Node.js

As Java can be executed on cross-platform, 
Node.js helps that javascript(It has dependency on web browser) can run server on any OS environment.

Node.js has various library such as embedded http server library(apache, etc...) 
so it can run server without additional setting.

### npm

Package manager of Node.js.

There are various ways of downloading libraries such as using CDN or installation directly.

But that is not that efficient when it comes to handling version and some situation like network issue.

That's why we use npm!

#### npm vs yarn

Yarn installs dependency packages in parallel, whereas NPM installs them sequentially.

## Webpack

Module bundler.

There are a variety of resources such as script, stylesheet, image, etc
and Webpack organizes them and converts into bundler.

Following are main attributes.

* Entry : Initial entry point of Webpack(path of javascript)

* Output : Path of output.(from entry to output)

* Loader : Basically Webpack only builds javascript and json so Loader helps other resources(html, css, image and etc) can be built on Webpack.

* Plugin : It gives additional functions. Plugin converts result into other thing whereas Loader translates file before making result. 


## Babel

Javascript compiler.
This means(javascript is interpreter language) 
it compiles the latest fe languages or syntax(ex: typescript) into javascript which all browsers can execute.

It translates es6 syntax to es5 as well.

### polyfill

babel plugin
