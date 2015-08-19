# React Bootstrap Native Slider

###Overview
A set of three tests of react-hot-loader module for Webpack.  Specifically, for how it handles source maps with webpack-dev-server.


###To Install Tests
Open terminal at the webpack-dev-server-test and enter:

```npm install```


### To Run Tests
In same terminal enter:

```npm run startX```

where "X" should be replaced with the number of the test, "1", "2" or "3".

Once webpack-dev-server is running, open http://localhost:8080 in the Chrome browser.  Edit app/HelloWorld.jsx to add something, like a number, to the Hello World text inside the returned span, the save the file.

### The Tests
#### Test 1
```npm run start1```
devtool parameter is set to "source-map".  The loaders are 'react-hot' and 'babel'.

When I run this, hotloading works correctly - i.e when HelloWorld.jsx is resaved, the "Hello World" text on the page updates without a full page refresh.  However, source maps do not update correctly.

#### Test 2
```npm run start2```
devtool parameter is set to "source-map".  The loaders is 'babel' only.

When I run this, hotloading does not work correctly - i.e when HelloWorld.jsx is resaved, the "Hello World" text on the page updates but after a full page refresh.  Source maps update correctly though.

#### Test 3
```npm run start3```
devtool parameter is set to "eval".  The loaders are 'react-hot' and 'babel'.

When I run this, hotloading works correctly - i.e when HelloWorld.jsx is resaved, the "Hello World" text on the page updates without a full page refresh.  However, source maps do not update correctly.















