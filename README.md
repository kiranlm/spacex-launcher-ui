
## SpaceX Launcher

### Overview
* Used React SSR with expresss, webpack, SASS
* Rendered html stream using `RenderToNodeStream`
* Used `HtmlWebpackPlugin` for template generation
* Responsive design using CSS Grids
* Used `@loadable/component` for lazy loading components and created a custom lazy-load component for images
* Hands on code
* Unit tests using jest and enzyme
* Deployed as container on Heroku

### Scripts to run
* `build` : Production build, will combine `build-client` and `build-ssr`
* `start:dev` : Local development start
* `start` : Start server with build files
* `test`: To run the tests

### Major packages
- [x] "react": "16.13.1"
- [x] "react-router": "5.0.0"
- [x] "jest": "26.6.3"
- [x] "webpack": "4.44.2"
- [x] "@loadable/component": "5.14.1"

### Directory structure
```
.
└───dist
|   ...
└───dist-ssr
|   ...
└───package.json
└───Dockerfile
│
└───src
│   └───components
│   │   ...
|   |   └───
|   |       |...
│   └───services
│   |   ...
|   App.js
|   app.scss
│   
└───webpack-config
|       └───client 
|       |   |
|       |   webpack.common.js
|       |   webpack.dev.js
|       |   webpack.prod.js
|       └───ssr
|           |
|           webpack.ssr.js 
└───server
|   |
|   index.js 
└───spec
    |
    main.test.js
```
#### Working demo
 [Click here to see the demo](http://spacex-launcher-ui.herokuapp.com)
 > Deployed to heroku with Heroku's container registry
###  Lighthouse score
> Desktop score
![Desktop view](https://images2.imgbox.com/b9/ab/ZXT5xIVs_o.png)

> Mobile score
![enter image description here](https://images2.imgbox.com/0a/e6/GcWH8Q82_o.png)
### Screenshots
#### Desktop View
![enter image description here](https://images2.imgbox.com/42/67/zDPMmTg4_o.png)

#### Mobile View
![enter image description here](https://images2.imgbox.com/12/6b/9BcXDyBj_o.png)

> Made by Kiran LM
