# Static build
Build with command `webpack`
You can then preview the result by opening index.html from `/build`

# Dev server
For webpack hot re-loader, run `npm run start-dev`, then the page is
accessible via localhost:8080

# Frontend file structure
```
app $ tree
.
├── build - compiled js|html|css
├── src
│   ├── styles - general styles (i.e. colors, button styles, etc.)
│   ├── images - general images (i.e. logos, icons)
│   ├── components - react components (stateless) and redux containers
│   │   ├── model - contains all logic - reducers, actions
│   │   ├── styles - component style (images and sass)
│   │   ├── Component.js - the react component - visual only
│   │   ├── Container.js - the redux container - connects component with store (state)
│   └── views - layout that uses components
├── app.js - handles views
├── entry.js - renders the app
├── index.html
└── store.js - combines redux stores
```
