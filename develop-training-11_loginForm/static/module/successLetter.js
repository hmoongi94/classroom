const successLetterhtml = function(username,title){
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing = border-box;
  }
  #root{
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #root>h1{
    color: pink
  }

  </style>
</head>
<body>
  <div id="root">
  <h1>${username}님은 ${title} 편지를 보냈습니다!</h1>
  </div>
</body>
</html>`

}

module.exports = successLetterhtml