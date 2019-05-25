# PrismagremClient

scorll 포인트가 어느정도 도달할시 Story section 을 psotion:fixed로 되게하기

추천 유저 찾아보기 API 동기화 하기

--ToDo--
호이스팅하기[]
explore page만들기[]
infinite scroll[]
Dm기능[]
hashtag 기능은 해봐야지[]
Feed Page Ui수정,회원추천 unfollow와 overlay만 하고 끝내기로 []
줄어든 화면에서 feed의 사진 전환 크기 문제
postsCount 문제해결[x]
Profile page 링크로 이동시 안나오던 문제 해결[x]
Profile page에도 editProfilePhoto기능넣기
자잘한것 : fullPost 이미지 넘기기 고치기,small editProfile button 링크 넣기,로그아웃 버튼 넘기기,auth page 푸터 고려해서 ui수정하기[x]
비밀번호 와 비밀번호 확인 비교하기 , 비밀번호 변경 API[x]
Pofile Route Layout [x]
프로필 편집 페이지 만들기 ,옵션 버튼클릭시 팝업만들기[x]
오버레이 X버튼 >버튼 만들고 토글되게 만들고 ,기능들 불러오기[x]
모바일 화면 fullPost만들기[x]
더블클릭시 좋아요 기능[x]
fullPost heart toggle 기능[x]
더블클릭시 Heart Icon Animation 나오게하기[x]
profilePhoto prisma 연결,loading설정하기,image component 생성[x]

--Log--

5/5 -- 스크롤을하면 Story컴포넌트가 postion:fixed됨 (최상위컴포넌트에 props로 전달하여 이벤트발생시마다 전체가 render되는 문제)
회원님을 위한 추천을 위해 10명의 유저를 가져오는 getUsers API생성
데이터베이스의 유저를 동기화 follow 버튼 생성

5/6 -- Profile Page Layout만듬,width:100%와 자식컴포넌트에 padding-bottom:100% 사용하면 정사각형됨. 하지만 오버레이가 힘듬. 다음부터는  
 grid쓸거임. Overlay는포기

5/7 -- Post 페이지가 반응형과 모바일사이즈에 변화하도록 레이아웃 구상

5/8 -- Posts 를 3개씩 나누어 정사각형 유지되도록 layout을만듬, Overlay만듬, ProfilePage축소시 화면 변경점 수정 (Header 휴대폰사이즈의 UI수정 필요)

5/9 -- Header Footer FeedPage Profile @media 적용, FeedPage에 축소시 나타날 스토리 레이아웃만듬, 포스트 클릭시 나타날 FullPost Layout짜는중, 댓글에 좋아요 기능을 추가할 필요가있음. 스토리도 포스트처럼 만들어야함.

5/11 -- FullPost Layout을 만듬, Profile Container에서 fullPost state를 사용하여 post 값 전달 하게하여. 클릭시 fullPost가 나타남.

5/12 -- 오버레이 토글은 위한 clickListner와 ref사용, splice의사용으로 인한 props가 뒤로가기나 앞으로가기시 0가되어 나타나지 않는 문제로 인하
여 splice를 immutable하게 하는 방법으로 교체함, FullPost의 Comments Height조절, comment추가 기능 넣음, FullPost 이미지 전환을 만들었으나 좌측애니메이션은 못넣겠다. 다음 포스트를 보는기능은 안하기로한다.

5/13 -- EditProfile 버튼에 history.push로 링크. EditProfile Page Ui 50% 제작 flex: 0 0 333px 형식을 처음 사용해보는데 생각대로 되지가 않는다.

5/14 -- EditProfile UI 완성, action 에 따라 view변경.

5/15 -- fixed가 느리게 발생하는 것은 useState를 handler안에 두어서 계속되는 rendering때문이라고 본다. fixed Story view 최적화.
모바일 fullPost UI done

5/16 -- 좋아요 토글 기능 to fullPost, onDoubleClick, minisize FullPOst UI, Back end user에 gender,phoneNumber schema 추가

5/17 -- FullPost Image doublie Click시 HeartIcon 나오게함, Edit Profile 가능, 비밀번호 변경API필요, 사진업로드 기능은 좀더 알아 봐야겠다.

5/19 -- Profile Container에서 render가 계속해서 발생하지 않는 버그., file을 graphql로 서버에서 S3업로드와 prisma저장 하려 하였으나 에러로 axios를 사용하기로 함, useMutation 문제로 mutation 방법을 바꿔보자

5/20 -- Image 업로드는 apollo cilent를 사용해야하는데, Apollo client 사용시 변환점이 너무 많아서 branch를 다시 돌아가기로 결정

5/21 -- apollo link, mutation 제거하고 Rest API 로 교체

5/22 -- image 파일을 aws S3를 이용하여 사진 링크를 생성 하였다. git merge to master , error fix 함,
req는 뜨는데 req.response는 왜 안뜨는지 해결해야 함.

5/23 -- profilePhoto prisma 연결,loading설정하기,image component 생성

5/24 -- 비밀번호 변경 완료. 3개의 입력값 필수, 비밀번호 확인, 비밀번호 비교, 이전비밀번호와 비교, 비밀번호 변경

5/25 -- Profile page 링크로 이동시 안나오던 문제 해결
