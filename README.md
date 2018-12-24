##React Embedded Widget

After clone install dependencies:  
`npm i`

####Development
Run:  
`npm start`  
in project root (where package.json is), and go to  
`localhost:8080`

####Production
Run:  
`npm run build`  
in project root (where package.json is). Bundle will be in `dist` folder
in project root, file named `widget.js`. Place that file in project, and 
load it (it should be loaded at bottom of page).

Last step is to mount our widget  
`EmbeddableWidget.mount(all_cities);`