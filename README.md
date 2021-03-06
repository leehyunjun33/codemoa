# 개요
CODEMOA란, 기존에 영문으로만 구성되어 있던 코드첨삭 해외 사이트들을 대신하여 한글로 이루어진 홈페이지가 있으면 어떨가 싶어 만들게 되었습니다. 오류에 대한 질의 응답 뿐만 아니라 강의 기능, 자신의 발자취를 남기는 포트폴리오 기능 등을 구현한 웹사이트입니다.

# 구현기능
* 카테고리 별로 모르는 것을 질문할 수 있고, 그것을 답변할 수 있습니다.  
* 맘에 드는 답변을 채택할 수 있고, 채택된 답변을 모아 볼 수 있습니다.
* 맘에 드는 사용자를 즐겨 찾기 하여 포트폴리오를 볼 수 있습니다.
* 자신의 발자취가 담겨 있는 포트폴리오를 볼 수 있습니다.
* 강의를 보면서 메모를 할 수 있습니다.

# 상세 내용
* 요구 사항 분석
  * 구현 전
     * 어떠한 기능이 있는 로그인 페이지
     * 모바일 화면에서도 볼 수 있도록 반응형 질문 및 답변등록, 채택된 답변, 강의 리스트 페이지
     * 강의 동영상을 볼 수 있는 강의 상세 페이지
     * 답변은 로그인 유저만 가능하도록
     * 글 보기는 비로그인 유저도 볼 수 있도록
  
  * 구현 후
    * group by, distinct 등과 같은 정규화를 통해 테이블 중복성 제거
    * 테이블 데이터의 빠른 호출은 위한 데이터 인덱싱 처리

* 개발 환경 구성
  * 데이터베이스 및 서버 관리
    * 원활한 데이터베이스 관리를 위해 AWS EC2 인스턴스 IP와 MySQL WorkBench 연결
    * EC2 간편 접속을 위한 Secure CRT 사용 
    * nodemon, nohup을 사용하여 원활한 프로세스 관리
  
  * 코드 관리
    * vs-code의 sftp 확장 기능으로 EC2와 연동 하여 실시간 코드 업데이트
    * git branch, add, push, pull 명령어를 사용해 git hub에 코드 백업 및 팀원과 코드 공유

* 프론트 엔드
  * angular 8
    * 라우터 기능을 사용하여 페이지 이동
    * aot, lvy 기능을 탑재하여 빠른 페이지 로딩
    * 뷰페이지의 각 요소들을 컴포넌트로 구성하여 코드 재활용
    * ngFor, ngIf, ngModel, ngClass, ngStyle등을 사용하여 데이터 양방향 통신 구현
  
  * javaScript
    * jQurey, vanilla js(순수 자바스크립트 코드)를 사용하여 따따부따
  
  * 부트스트랩
    * 어떤 요소를 사용하여 반응형
    * 정형화된 UI 구현
 * 백 엔드
   * mySql
     * 어떤 테이블과 질문 및 답변 페이지를 연결하여 등록, 수정, 삭제 기능 구현
   * mongodb
     * 몽고즈 사용
    

# 어려웠던 점
 * 처음 접한 angular
    * angular 공식 문서 완독
    * 문제 해결을 위한 구글링, git 이슈 키워드 검색
    
 * Angular와 다양한 npm 모듈 그리고 db버전의 라이브러리 호환 문제
    * angular 에서 제공하는 cli 활용
    * npm cli 활용
    * 호환성의 주체를 설정
      * angular 8에 맞는 npm 모듈과 db버전 사전 검색
      
