const loginSuccess = function(){`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./loginForm.css">
</head>
<body>
  <h1></h1>
  <script>
    document.getElementsByTagName("h1")
    h1[0].textContent = "${parsedBody.username}님! 접속을 환영합니다. 편지를 제게 보내주세요!"
  </script>
</body>
</html>`
}

module.exports = loginSuccess