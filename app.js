// // const os = require('os')
// // const user = os.userInfo()
// // console.log(user)
// // const currentOs = {
// //     name: os.type(),
// //     release:os.release(),
// //     totalmem: os.totalmem(),
// //     freemem: os.freemem()
// // }
// // console.log(currentOs)

// // const path=require('path')

// // // console.log(path.sep)

// // const filepath = path.join('/content', 'subfolder','text.txt')

// // const basename = path.basename(filepath)

// // console.log(filepath)

// // console.log(basename)

// // const abs= path.resolve(__dirname,'content','subfolder','test.txt')
// // console.log(abs)

// // import {moveFile} from 'move-file';

// // const movefile = os.moveFile()

// // movefile('C:\Users\Heman\Desktop\Node_app\app.js', 'C:\Users\Heman\Desktop\Node_app\new\app.js');
// // console.log('The file has been moved');

// // import {moveFile} from 'move-file';

// // await moveFile('C:\Users\Heman\Desktop\Node_app\app.js', 'C:\Users\Heman\Desktop\Node_app\new');
// // console.log('The file has been moved');




// // const path = require('path');

// // console.log(path.isAbsolute('/test/demo_path.js')); 
// // console.log(path.isAbsolute('test/demo_path.js')); 
// // console.log(path.isAbsolute('C:\\test\\demo_path.js'));

// var fs = require('fs'); 

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(9000); 

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);// what ever you give in url it will read and display
//   res.end();
// }).listen(8989);


let http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; // search = query (?) //http://localhost:8080/?year=2017&month=July
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8000);

              
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('first.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data); //path with file (first.html)
//     return res.end();
//   });
// }).listen(8080); 
