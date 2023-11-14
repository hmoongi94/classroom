class TitleManager {
  /**
   * @param {string} tagName
   * @param {object} stateDataObject
   * 
   * stateDataObject 매개변수는 값이 대입되지 않았을 때를 대비하도록 기본값을 설정해두었다.
   * default parameter라고 부른다.
   */
  constructor(tagName, stateDataObject = {basicTitle: "기본 제목", newTitle: "새로운 제목"}){
    this._tagName = tagName; //은닉화하였다.
    this._stateData = stateDataObject;
  }

  /**
   * _tagName, 언더바가 앞에 있는 형태는 은닉화를 의미한다.
   * 숨겨두었다는 뜻이며, 일반적으로 외부에서 접근할 수 없다.
   * getter, setter를 통해서만 접근이 가능하다.
   * Java에서도 private 키워드를 사용한다.
   * 아래의 getter를 통해 일반적인 .tagName으로 접근이 가능하다.
   */

  get tagName(){
    return this._tagName;
  }

  /**
   * 아래의 setter때문에 매개변수 tagName은 일련의 검사를 거치게 된다.
   */

  set tagName(value){
    // 태그 이름 검증 로직
    // Html은 계속 업데이트되기 때문에, 아래의 코드는 완전하게 검사하진 못한다.
    // "문자열"과 "띄어쓰기"는 허용하지 않는 것은 불변하기 때문에 해당 클래스에서 1차적인 검사를 진행한다.
    // 2차적인 것은 별도의 모듈이나 문서(HTML5, 브라우저)에서 검사한다.
    if(typeof value === "string" && value.trim()!==''){
      this._tagName = value;
    } else{
      throw new Error("유요한 태그이름이어야 합니다.")
    }
  }

  //상태 데이터에 대한 getter 및 setter
  get stateData(){
    return this._stateData;
  }
  
  set stateData(value){
    const isValidObject = (obj) =>{typeof obj === 'object' && obj !== null};

    if(isValidObject(value)){
      this._stateData = value;
    } else {
      throw new Error("유효한 객체 이름이어야 합니다.")
    }
  }

  // UI 업데이트 및 제목 변경 로직
  updateUI(){
    // 아래의 elements는 dom API메서드이므로, node.js에서는 실행되지 않는다.
    // 구조만 확인할 것
    const elements = document.getElementsByTagName(this._tagName)
    if(elements.length>0){
      elements[0].textContent = this._stateData.basicTitle
    } else{
      throw new Error("지정된 태그 이름의 요소를 찾을 수 없습니다.")
    }
  }

    updateTitle(){
      this._stateData.basicTitle = this._stateData.newTitle;
      this.updateUI();
    }

}

