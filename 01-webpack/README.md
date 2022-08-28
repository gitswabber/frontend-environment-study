# Webpack

This document explains webpack and the reason why we use it

## Before Webpack...

See [example code](01-before-webpack)

This way has a problem : **global scope pollution**

Which means, sum() can be changed with other function or value if we re-define it.

## To solve global scope pollution > IIFE module

[Immediately Invoked Function Expression](02-iife-module)

It has independent scope in function and this means the function by IIFE way can't be polluted from outside.

### Various module specification

There are a variety of module specs with above way like CommonJS, AMD and UMD.
