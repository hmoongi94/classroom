# json 임포트
# json을 사용하려면 node.js와 다르게 임포트 해야한다.
import json

# 예제를 위한 임의의 json파일 경로
file_path = "example.json"


# 개발자가 만들 함수
def update_func(data):
    # 내용
    return


def delete_func(data):
    # 내용
    return


def create_json(data):
    # open 함수는 파일을 열 때 사용됩니다. 첫 번째 인자로 파일경로를, 두 번째 인자로 '모드'를 지정
    # 'w', write의 줄임말, 보통 '모드'라고 불리며 'w'는 파일을 쓰기 위해 열며, 파일이 존재하지 않으면 새로 생성
    with open(file_path, "w") as file:
        # json.dump 메서드는 Python 데이터를 JSON형식의 문자열로 변환하여 파일에 쓰기(write) 진행
        # 여기서는 data변수의 내용을 JSON형태로 파일에 저장
        json.dump(data, file, indent=4)


def read_json():
    try:
        # 'r' 모드는 파일을 읽기 위해 엽니다.
        # Node.js 에서는 readFile, readFileSync를 사용하지만 '모드' 방식 덕분에 똑같이 open메서드로 통일되어 매우 편리하다.
        # with as 문법을 사용하면 파일을 열고 닫는 것을 자동으로 처리할 수 있다.
        # '연다'와 '닫는다'를 명시적으로 사용하는 것이 python의 장점 중 하나
        with open(file_path, "r") as file:
            # json.load 메서드는 파일의 내용을 JSON으로 파싱하여 Python데이터 타입으로 변환합니다.
            return json.load(file)
    except FileNotFoundError:
        # except는 예외가 발생했을 때 사용하는 javascript의 try catch와 비슷한 문법이다.
        # None 데이터 타입은 javascript의 null과 비슷하다.
        return None


def update_json(update_func):
    try:
        # 'r+' 모드는 읽기와 쓰기를 모두 할 수 있는 모드로 권한이 많기 때문에 남용은 위험하다.
        with open(file_path, "r+") as file:
            data = json.load(file)  # 파일의 내용을 읽어서 Python 데이터 타입으로 변환
            # update_func()는 개발자가 정의한 임의의 함수
            update_func(data)  # 인자로 받은 업데이트 함수를 호출하여 data를 업데이트
            # 파이썬도 javascript와 동일하게 인터프리터이기 때문에 seek, truncate 처럼 위에서 아래로 순차적으로 읽는 것을 활용,
            # 읽어내는 위치도 조절할 수 있다.
            file.seek(
                0
            )  # 파일의 처음으로 커서를 이동. 이는 파일을 새로운 내용으로 '덮어쓰기'
            json.dump(
                data, file, indent=4
            )  # 수정된 data를 다시 JSON형태로 파일에 씁니다.
            file.truncate()  # 파일의 현재 위치 이후의 내용을 삭제합니다. '이전 파일을 삭제하시겠습니까?' 라는 느낌
    except FileNotFoundError:
        print("파일을 못 찾을 때 예외처리")
        create_json({})  # 파일이 없을 경우 새로운 파일을 생성
        # 상당히 절차적이다.


# Delete: JSON 파일의 특정 데이터 삭제 함수
def delete_json(delte_func):
    try:
        with open(file_path, "r+") as file:
            data = json.load(file)  # 파일 내용을 읽어 Python데이터 타입으로 변환
            # delete_func()는 개발자가 정의한 함수
            delete_func(data)  # 인자로 받은 삭제함수를 호출하여 특정 데이터를 삭제
            file.seek(0)  # 파일의 처음으로 커서이동
            json.dump(
                data, file, indent=4
            )  # 수정된 data를 다시 JSON형태로 파일에 씁니다.
            file.truncate()  # 파일의 현재 위치 이후의 내용을 삭제
    except FileNotFoundError:
        print("파일을 못 찾을 때 예외처리")


# __name__: 현재의 모듈
# __main__: 실행되는 스크립트 파일
if __name__ == "__main__":
    # {
    #   "items": [
    #  ]
    # }
    create_data = {"items": []}
    create_json(create_data)  # JSON 파일 생성 및 데이터쓰기

    # Update 예제: 새 아이템 추가
    def add_item(data):
        # append는 배열에 데이터를 추가하는 함수로, javascript의 push와 비슷하다.
        # data[]는 객체의 키를 접근하는데 사용하는 방식으로, 파이썬에서 특정 컨벤션에 따라, . 대신 [] 표기법을 사용하는 편이다.
        data["items"].append({"name": "example", "value": 123})

        update_json(add_item)  # JSON 파일 업데이트

        # Read예제
        print(read_json())  # JSON파일 읽기

        # Delete 예제: 아이템 삭제
        def remove_item(data):
            # 아래의 for in 문을 javascript 방식으로 바꾸어 작성하면
            # for(let item of data.items){
            #   if (item.name==='example'){
            #     data.items.splice(data.items.indexOf(item),1);
            #     break;
            #   }
            # }
            # 이며 파이썬은 반복문이 for in 문법을 사용하고 다른 방식의 반복문을 사용하지 않는다.
            # javascript는 for in 문법지원 하지만, 좀처럼 사용하지 않지만, 파이썬은 주로 for in 문법을 사용하며
            # 파이썬은 반복문의 종류가 for in, while 두가지 뿐이다.
            # 반복문이 일관되어 '가독성'이 좋지만, javascript의 풍부한 반복문 지원보다 편의성면에서 떨어진다.
            data["items"] = [
                item for item in data["items"] if item["name"] != "example"
            ]

        delete_json(remove_item)  # JSON 파일의 특정 데이터 삭제
        # 변경된 데이터 확인
        print(read_json())  # JSON파일읽기
