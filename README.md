# ExpressMVC
This repo is express MVC base on express generator. It modify to make clever design pattern to write node + express + mongoose. Bản hướng dẫn tiếng việt xem ở readme.txt.
## Set up in local 
0. You need nodeJS, npm and mongodb at local computer
1. Clone this repo: `git clone https://github.com/BKFA/bkfaJS`
2. Config your view engine in package.json: ejs, pug, hjs, etc... 
3. `npm install`
4. `npm install -g nodemon` to install nodemon, it track and monitor your project
5. `npm install -g browser-sync` to saving-time synchronised browser testing
6. (Optinal) `npm audit fix` sometimes any module old and need update
7. `npm start` to run -> it start gulp and nodemon
<br> Note: this repo run with sass preprocessor, if you run in windows environment, you need to install sass preprocessor. In ubuntu, you need to install ruby and compass to make gulp active.
## Set up with docker
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
<br>Thanks to read this article. Issue you puts at this repo's issue. Hope its help. :star: :star: :star:
