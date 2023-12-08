/**
 * @param styles style속성에 적용할 스타일 문자열들
 * @returns ";"이 포함된 스타일 문자열
 * @description
 *
 * 문자열을 합치는 간단한 함수이므로, 사용성이 그리 높지는 않은 안티패턴이지만
 * 함수가 어떻게 호출되고 사용되어 결국엔 다른 형태로 바뀐다는 것을 익힐요량으로
 * styleValueMaker 함수를 만들었습니다.
 *
 */
function styleValueMaker() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return styles.join(';');
}
/**
 *
 * @param tagName string
 * @param props Props 타입 객체 (key:string, value: string)
 * @param children 전개 연산자를 사용하여 가변 인자로 받은 문자열들 최종형태는 문자열이 원소인 배열이다.
 * @returns HTML처럼 보이는 문자열
 * @description
 *
 * 반복적인 규칙이 담겨있는 HTML의 특성을 조립하는 함수입니다.
 * 굳이 DOM API 메서드를 사용하지 않고 문자열을 조립하면
 * 디버깅 할 때도 편하고, 빠르게 작성할 수 있습니다.
 *
 * 마치 '문장 만들기' 기능을 극대화시킨 GPT와 비슷한 느낌입니다.
 *
 * ?두 개의 지역변수 elementStrings, startTag는 각각의 역할을 수행하고 정해진만큼의 생명주기를 가집니다.
 *
 * typescript의 명시성에따라 아래의 함수 선언문 한줄을 읽는 것으로
 * 이 함수가 어떤 역할을 하는지 추론(assume)할 수 있습니다.
 */
function createElement(tagName, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    // init
    var elementStrings = [];
    // 태그 시작 부분
    // 태그 시작부분을 조립하는 아래의 기능도 필요하다면 함수로 분리할 수 있습니다.
    var startTag = "<".concat(tagName);
    if (props) {
        for (var prop in props) {
            startTag += " ".concat(prop, "=\"").concat(props[prop], "\"");
        }
    }
    startTag += '>';
    elementStrings.push(startTag);
    // 자식 요소들 추가
    elementStrings.push.apply(elementStrings, children);
    // 태그 종료 부분
    elementStrings.push("</".concat(tagName, ">"));
    var result = elementStrings.join(''); // join 메서드 덕분에 배열은 하나의 문자열로 합쳐집니다.
    return result;
}
//사용 예제
var styleString = styleValueMaker('color:red', 'font-size:16px', 'padding:10px');
console.log(styleString);
var divString = createElement('div', { id: 1, style: styleString }, ['이것은 스타일이 적용된 div입니다.', '테스트 중']);
console.log(divString);
