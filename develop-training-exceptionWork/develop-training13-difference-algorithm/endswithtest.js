function test(inputJSONPath, outputJSONPath) {
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) {
    console.log("if문")
  } else {
    console.log("else문")
  }
}

test("sadfasf.jso","agasda.json")
// 잘 작동함