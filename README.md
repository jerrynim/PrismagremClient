# PrismagremClient

scorll 포인트가 어느정도 도달할시 Story section 을 psotion:fixed로 되게하기

추천 유저 찾아보기 API 동기화 하기

--ToDo--
Story API, 동기화하기
Pofile Route Layout [x]
프로필 편집 페이지 만들기 ,옵션 버튼클릭시 팝업만들기
--Log--

5/5 -- 스크롤을하면 Story컴포넌트가 postion:fixed됨 (최상위컴포넌트에 props로 전달하여 이벤트발생시마다 전체가 render되는 문제)
회원님을 위한 추천을 위해 10명의 유저를 가져오는 getUsers API생성
데이터베이스의 유저를 동기화 follow 버튼 생성

5/6 -- Profile Page Layout만듬,width:100%와 자식컴포넌트에 padding-bottom:100% 사용하면 정사각형됨. 하지만 오버레이가 힘듬. 다음부터는  
 grid쓸거임. Overlay는포기

5/7 -- Posts 를 3개씩 나누어 정사각형 유지되도록 layout을만듬, Overlay만듬, ProfilePage축소시 화면 변경점 수정 (Header 휴대폰사이즈의 UI수정 필요)
