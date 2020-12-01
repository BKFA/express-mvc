# ExpressMVC
#### `MVC design pattern for developing Express app. Technology stack:` <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=flat-square&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=flat-square"/> <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=flat-square&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=flat-square&logo=docker&logoColor=white"/>

Vietnamese tutorial is available at [readme.txt](https://github.com/BKFA/expressMVC/blob/master/readme.txt).
## Set up in local 
0. Preinstall nodejs, npm and mongodb at local computer
1. Clone this repo: `git clone https://github.com/BKFA/bkfaJS`
2. Config your view engine in package.json: ejs, pug, hjs, etc... 
3. `npm install`
4. `npm install -g nodemon` to install nodemon, it track and monitor your project
5. `npm install -g browser-sync` to saving-time synchronised browser testing
6. (Optinal) `npm audit fix` sometimes any module old and need update
7. `npm start` to run -> it start gulp and nodemon
<br> Note: this repo run with sass preprocessor, if you run in windows environment, you need to install sass preprocessor. In ubuntu, you need to install ruby and compass to make gulp active.

## Set up with <img src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=flat-square&logo=docker&logoColor=white"/>
0. You need to install docker and docker-compose
1. `sudo docker-composer up`
### File and folder structure:
	+ Config: your customize (etc: const), database.js where you define your mongodb string - it contain db name.
	+ Controllers: code your logic and bussiness, it call models, and return views or data.
	+ Models: define schema and query db.
	+ Views: your front-end.
	+ routers: define routers and call controller.
	+ Public: somethings client can access at sometimes (css, js, img, file...)
<br>Connect router, controller, models with your customize.
#### Thanks to read this article :gift:. Feel comfortable to put your issues. Hope it help. :star: :star: :star:
