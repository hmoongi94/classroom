/**
 * 주어진 배열을 무작위로 섞는 함수.
 * @param {Array} array - 섞을 배열.
 * @returns {Array} 무작위로 섞인 배열.
 */

function shuffleArray(array){
  /**
   * 주어진 최대값 내에서 무작위 인덱스를 반환하는 함수.
   * @param {number} max - 무작위 인덱스를 생성할 때 고려할 최대범위.
   * @returns {number} 생성된 무작위 인덱스.
   */
  function getRandomIndex(max){
    return Math.floor(Math.random()*max); // 0과 max사이의 랜덤한 정수 변환
  }

  // array의 모든 요소에 대해 루프를 돌며 무작위 위치와 교환
  array.forEach((currentValue, index)=>{
    const randomIndex = getRandomIndex(array.length); //랜덤 인덱스 생성

    // 요소 교환(swap): 배열 내의 두 요소의 위치를 교환
    const temp = array[index]; //현재 요소 임시 저장
    array[index] = array[randomIndex] //현재 위치에 랜덤위치의 요소 저장
    array[randomIndex] = temp; // 랜덤 위치에 임시 저장한 요소 저장
  })

  return array; // 섞인 배열 반환
}

//학생 목록 섞기
const shuffledArray = shuffleArray(studentList);

/**
 * 주어진 배열을 팀으로 나누는 함수
 * @param {Array} array - 팀으로 나눌 배열
 * @returns {Array} 팀으로 구성된 배열
 */
function createTeams(array){
  // 배열을 먼저 섞음(위에 함수 선언에서)
  const shuffled = shuffleArray(array)
  const teamSize = 4 // 예제 편의상 리터럴로 설정 팀의 기본 크기 설정

  // reduce 메서드를 사용하여 팀 생성
  // 누산하는 배열을 빈 배열로 만들고, push 메서드를 사용하여 새 팀을 추가하므로, 
  // 주의깊게 확인해볼 포커스
  const teams = shuffled.reduce((acc,current,index)=>{
    // 새 팀을 시작하거나 현재 팀에 학생 추가
    if(index % teamSize === 0 && shuffled.length - index >= teamSize)
    acc.push([]) // 새 팀 시작
    //현재 팀에 학생 추가
    acc[acc.length-1].push(current)
    return acc // 팀 배열 반환

    // 상수 teams는 마치 물이 적정선에 닿으면 다른 그릇에 덜어내는 것처럼 동작
  },[])

  //마지막 팀의 크기 조정
  //배열의 크기가 다른 경우 아래의 코드는 쓸모가 없어지는 안티패턴이긴하나, 
  // while문으로 조건이 성립할 때까지 반복하는 점과
  // unshift 메서드를 사용하여 배열의 맨 앞에 요소를 추가한다는 점
  // pop메서드를 사용하여 배열의 맨 뒤에 요소를 제거하는 점을 연구할 포인트
  const lastTeam = teams[teams.length-1]
  if(lastTeam.length<5 && teams.length>1){
    while(lastTeam.length<5){
      lastTeam.unshift(teams[teams.length-2].pop()) // 이전 팀에서 학생이동
    }
  }

  // 각 팀의 첫 번째 학생에게 '팀장-' 접두사 추가
  teams.forEach((team)=>{
    if(team.length>0){
      team[0]='팀장-' + team[0]; //팀장 지정
    }
  })

  return teams
  // 완성된 팀 배열 반환

}