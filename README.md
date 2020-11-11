
## SpaceX Launcher

  

### Overview
An application that lists all the launch programs by SpaceX. There will be a left side filter with Year, Launch success/failure and Land success/failure.
  

- React server side rendering with [express js](https://expressjs.com/)

- Bundled application with [webpack 4](https://webpack.js.org/)

- Used [sass](https://sass-lang.com/) as CSS preprocessor

- Used [Redux](https://redux.js.org/) with [saga](https://redux-saga.js.org/)

- Created as [PWA](https://web.dev/progressive-web-apps/)

- Rendered html stream using [RenderToNodeStream](https://reactjs.org/docs/react-dom-server.html#rendertonodestream)

- Used [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) for template generation

- Responsive design using [CSS Grids](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

- Used [@loadable/component](https://www.npmjs.com/package/@loadable/component) for lazy loading components and created a custom lazy-load component for images using [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)


- Unit tests using [jest](https://jestjs.io/) and [enzyme](https://enzymejs.github.io/enzyme/)

- Deployed as container on [Heroku](https://www.heroku.com/) with [Docker](https://www.docker.com/)

- CI/CD for `master` branch using [circleci](http://circleci.com/) to Heroku

- Hands on code - not used [CRA](https://github.com/facebook/create-react-app) to build the app

  

### Scripts to run

  

-  `build` : Production build, will create all the client side bundles and also copy the server script to dist-ssr directory

-  `start:dev` : Local development start

-  `start` : Start server with copied file `ssr-dist/index.js`

-  `test`: To run the tests

 -  `lint`: To run the eslint check

  

### Directory structure

  
```
.
└───dist
| ...
└───dist-ssr
| ...
└───package.json
└───Dockerfile
└───.circleci
│
└───src
│ └───components
│ │ ... all the functional components
│ └───services
│ | ... service files
| App.js
| app.scss
│ └───helpers
| |
| ... helper functions
│
└───webpack-config
| |
| webpack.common.js
| webpack.dev.js
| webpack.prod.js
└───server
| |
| index.js
└───static
| |
| ... static files like images, icons etc
└───spec
|
main.test.js

```

### Working demo
  

[Click here to see the demo](https://spacex-launcher-ui.herokuapp.com)

  

> Deployed to heroku with Heroku's container registry

### Web accessibility
> No known problems found - [achecker.ca](https://achecker.ca/checker/index.php)
![enter image description here](https://images2.imgbox.com/75/f5/sDXpv0WH_o.png)

  

### Lighthouse score

  

> Desktop score : [click here to see the report](https://github.com/kiranlm/spacex-launcher-ui/blob/master/reports/report.pdf)

> ![Desktop view](https://images2.imgbox.com/b0/39/CCbQJWjN_o.png)

  

### Screenshots

  

#### Desktop View

  

![enter image description here](https://images2.imgbox.com/04/96/9Huydixf_o.png)

  

#### Tablet View

  

![enter image description here](https://images2.imgbox.com/90/77/68HD7gI1_o.png)

#### Mobile View

  

![enter image description here](https://images2.imgbox.com/88/00/VObVqq0q_o.png)

  

> Made by Kiran LM
