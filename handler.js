// 'use strict';

// module.exports.hello = async (event) => {
//   // return {
//   //   statusCode: 200,
//   //   body: JSON.stringify({
//   //     message: 'Go Serverless v1.0! Your function executed successfully!',
//   //     input: event,
//   //   }),
//   // };

//   return {'test'}

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

const { create, jsonMiddleware } = require('slspress');

const handler = create();
function test(ttt){return ttt}

const Handlebars = require('handlebars');
fs = require('fs')

const context = {
  breeds: ['a','b']
  
};

const getFormattedContent = data => {
// const templateListSource = require('./template-list.hbs');
const templateListSource = fs.readFileSync('./template-list.hbs', 'utf-8')
const templateList = Handlebars.compile(templateListSource);


// const templateShowSource = require('./template-show');
// const templateShow = Handlebars.compile(templateShowSource);


const html = templateList(data);

fs.writeFile('./test-new.html', html, function(err) {
  if (err) {
    return console.log(err)
  }})

  return html
}

handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/hello-world', (req, res) => {
        // return res.ok('hello-world');
        
        return res.ok({
              statusCode: 200,
              // body: JSON.stringify({
              //   message: test(html),
              //   // input: req,
              // }),
              headers: {
                'Content-Type': 'text/html'
              },
              body: getFormattedContent(context)
            });
    });

    handler.on('handle2')
    .middleware(jsonMiddleware)
    .get('/hello-world2', (req, res) => {
        // return res.ok('hello-world');
        return res.ok({
              statusCode: 200,
              body: JSON.stringify({
                message: '22222222',
                // input: req,
              }),
            });
    });

module.exports = handler.export();

