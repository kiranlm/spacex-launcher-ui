## SpaceX Launcher

### Overview

- Used React SSR with expresss, webpack, SASS
- Readered html stream using `RenderToNodeStram`
- Used `HtmlWebpackPlugin` for template generation
- Responsive design using CSS Grids
- Used `@loadable/component` for lazy loading
- Hands on code
- Unit tests using jest and enzyme
- Deployed as container on Heroku

### Available scripts

- `build-ssr` : For ssr build
- `build-client` : For client side build
- `build` : Production build, will combine `build-client` and `build-ssr`
- `start:dev` : Local development start
- `start` : Start server with build files
- `test`: To run the tests

### Major packages used

- [x] "react": "16.13.1"
- [x] "react-router": "5.0.0"
- [x] "jest": "26.6.3"
- [x] "webpack": "4.44.2"
- [x] "@loadable/component": "5.14.1"

### Application structure

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

### Screenshots

#### Desktop View

![enter image description here](https://images2.imgbox.com/42/67/zDPMmTg4_o.png)

#### Mobile View

![enter image description here](https://images2.imgbox.com/12/6b/9BcXDyBj_o.png)

> Made by Kiran LM
