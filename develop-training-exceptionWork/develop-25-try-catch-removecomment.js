const workVariable = {
  first: "1",
  second: "2.5"
}

function convertToIntegers(obj) {
  const result = {}

  for (const key in obj) {
    // key가 두개뿐이지만, for in 문을 사용하여 객체의 모든 속성을 순회합니다.
    try {
      const valueAsInteger = parseInt(obj[key], 10);
      if (valueAsInteger.toString() !== obj[key]) {
        throw new Error(`${obj[key]}은(는) 정수로 정확하게 변환될 수 있습니다.`)
      }
      result[key] = valueAsInteger;
    } catch (error) {
      // 변환 중 에러가 발생하면 여기서 처리합니다.
      console.log(`"${key}" 속성 처리 중 오류 발생: ${error.message}`)
    }
  }

  return result;
}

const convertedValues = convertToIntegers(workVariable)
console.log(convertedValues)