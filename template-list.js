module.exports = `
<html>
  <head>
    <title>Show Me A Dog</title>
    
  </head>
  <body>
    <h1>Show Me A...</h1>
    <div>
      <ul class="breed-list">
        {{#each breeds}}
          <li class="breed-list-item"><a href="{{this}}">{{this}}</a></li>
        {{/each}}
      </ul>
    </div>
    
  </body>
</html>
`;