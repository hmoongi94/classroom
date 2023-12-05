# Tutorial

## 1. npm 초기화
`npm init -y`

## 2. typescript 설치
`npm install --save-dev typescript`

- typescript 패키지와 cli인터페이스인 ts-node 패키지와 구분하는 것이 좋다.
- ts-node는 typescript를 컴파일하지 않고, 간단히 실행할 수 있게 해주므로
  - 컴파일 전에 코드를 실행해보고 싶을때 사용한다. 
  - 컴파일 전, 후 가리지 않고 자주 확인하므로 마치 묶음처럼 사용되는 경우가 많다.

## 3. typescript config 파일 설정
`npx tsc --init`

- tsconfig.json 파일이 생성된다.

## 4. babel 설치
`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`
  
  - typescript로 개발을 착수하고, React를 사용하고, 그다음 babel을 통해 컴파일하는 일련의 '절차'에 고려해 설치했다.
  - `@babel/core`는 Babel 컴파일러의 핵심 패키지
  - `@babel/preset-env`는 환경에 맞게 ECMAScript 2015+ 버전의 코드를 변환해주는 Babel 프리셋(최종형태)
  - @babel/preset-react는 React의 JSX 문법을 JavaScript로 변환해주는 Babel 프리셋
  - @babel/preset-typescript는 TypeScript 코드를 JavaScript로 변환해주는 Babel 프리셋

여기서 컴파일하는 주체와 목적이 중요한데 쉽게 헷갈리는 부분은 다음과 같다.
  - typescript를 통해 컴파일 하지 않을 예정이다.
  - typescript는 React를 사용하기 위해 설치했다.
  - React는 Javascript의 라이브러리이다. 
  - typescript + React로 개발을 착수하고 최종형태는 babel이 컴파일하게 되는 구조이다.
  - **babel 컴파일러와 typescript 컴파일러는 역할은 같지만 해당 예제프로젝트에서는 typescript 컴파일러를 사용하지 않는다.**

## 5. babel config 파일 생성
디렉토리에서 .babelrc, babel.config.js 둘중 하나를 선택해서 생성

  - 예제상으로는 지난번과 다르게 rc파일을 생성했다.
  - 담겨진 내용은 preset(프리셋), pre set 이므로 말그대로 사전 설정을 뜻한다.
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```
  - 해당 설정에서 "presets"라는 key의 배열 순서가 상당히 중요한데,
  - typescript를 사용하고 React를 사용하고 babel을 통해 컴파일하는 구조이므로
  - typescript를 먼저 컴파일하고 React를 컴파일하고 babel을 통해 최종 컴파일을 하게 된다.
  - typescript를 가지고 React를 작성하고, 작성된 React는 preset-env를 통해 최종 컴파일된다.

## 6. webpack 설치
npm install --save-dev webpack@5 webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin

### 설치한 패키지 설명

 - webpack@5: 현재는 v4버전이 주류이지만, v5버전이 릴리즈되었으므로 v5버전을 설치했다.

 - webpack-cli : 명령줄 인터페이스를 통해 Webpack을 구성하고 실행할 수 있게 해주는 도구
 - 
 - webpack-dev-server: 개발 중인 애플리케이션을 위한 간단한 웹 서버를 제공하며, 라이브 리로딩 기능을 통해 파일 변경 시 자동으로 페이지를 새로고침하는 기능을 제공하는 편의도구로 추후 서버를 구축하여 배포할 때는 사용하지 않으며, 전적으로 개발 용도
 - babel-loader : 웹팩이 babel을 실행할 수 있도록 도와주는 로더(load, 적재하다)

 - css-loader : CSS 파일을 모듈처럼 import하여 사용할 수 있게 해주는 로더입니다. CSS 파일을 JavaScript 파일로 변환하여 번들에 포함시키는 역할로 css 파일이 Javascript 모듈이 되는 형태까지 변환 
 
 - style-loader : 스타일시트를 DOM에 주입하여 적용되도록 합니다. DOM 객체를 생성하여 css를 적용하는 역할, 최종형태

 
 - html-webpack-plugin : HTML에 번들링된 자바스크립트 파일을 삽입하는 플러그인으로, 설치하지 않고 번들링하면, HTML과 JS파일이 분리된 상태로 번들링된다. 따라서 클라이언트 요청을 단순화하기 위해 매우 자주 설치되는 플러그인

## 7. webpack config 파일 생성
`npx webpack-cli init`

- 해당 init 방식은 최신 webpack 버전에서만 작동될 수 있으므로 기본설정을 수동으로 작성하는 경우가 더 많다.

- 해당 명령을 실행하면 @webpack-cli/generators가 설치되는 일련의 과정이 진행된다.