function loadFunction(name) {
    console.log("".concat(name, " \uD568\uC218\uAC00 \uB85C\uB4DC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
    return "loadFunction";
}
function functionA() {
    console.log('functionA 함수영역');
    loadFunction('functionA');
    return 'functionA';
}
function functionB() {
    console.log('functionB 함수영역');
    loadFunction('functionB');
    return 'functionB';
}
function main() {
    console.log('main 함수영역');
    console.log("return \uAC12: ".concat(functionA()));
    console.log("return \uAC12: ".concat(functionB()));
    return 'end';
}
console.log(main());
