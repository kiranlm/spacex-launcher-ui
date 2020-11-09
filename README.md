## SpaceX Launcher

### Overview

- Used React SSR with expresss, webpack, SASS
- Rendered html stream using `RenderToNodeStream`
- Used `HtmlWebpackPlugin` for template generation
- Responsive design using CSS Grids
- Used `@loadable/component` for lazy loading components and created a custom lazy-load component for images
- Hands on code
- Unit tests using jest and enzyme
- Deployed as container on Heroku

### Scripts to run

- `build` : Production build, will create all the client side bundles and also copy the server script to dist-ssr directory
- `start:dev` : Local development start
- `start` : Start server with copied file `ssr-dist/index.js`
- `test`: To run the tests

### Major packages

- [x] "react": "16.13.1"
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
│   │   ... all the functional components
│   └───services
│   |   ... service files
|   App.js
|   app.scss
│   └───helpers
|       |
|        ... helper functions
│
└───webpack-config
|       |
|       webpack.common.js
|       webpack.dev.js
|       webpack.prod.js
└───server
|   |
|   index.js
└───static
|   |
|    ... static files like images, icons etc
└───spec
    |
    main.test.js
```

#### Working demo

[Click here to see the demo](https://spacex-launcher-ui.herokuapp.com)

> Deployed to heroku with Heroku's container registry

### Lighthouse score

> Desktop score : [click here to see the report](https://github.com/kiranlm/spacex-launcher-ui/blob/master/reports/report.pdf)  
> ![Desktop view](https://images2.imgbox.com/b0/39/CCbQJWjN_o.png)

### Screenshots

#### Desktop View

![enter image description here](https://images2.imgbox.com/42/67/zDPMmTg4_o.png)

#### Mobile View

![enter image description here](https://images2.imgbox.com/12/6b/9BcXDyBj_o.png)

> Made by Kiran LM
