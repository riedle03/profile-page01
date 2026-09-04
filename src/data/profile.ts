export interface Book {
  title: string
  publisher: string
  role: string
  year?: string
  blurb?: string
  store?: string
  link: string
  cover: string
  isNew?: boolean
}

export interface Course {
  title: string
  platform: string
  hours: string
  description: string
  link: string
  thumb: string
  isNew?: boolean
}

export interface Award {
  title: string
  institution: string
}

export const profile = {
  name: '이대형',
  role: '미림마이스터고 국어교사',
  intro: '국어 수업에서 출발해 AI 디지털 교육으로 넓혀 왔습니다. 교실에서 실제로 쓰이는 것만 만들고, 만드는 법을 교사에게 전합니다.',
  since: '2012년부터 미림마이스터고',
  photo: '/profile-image.jpg',
  contact: {
    phone: '010-9120-0829',
    email: 'riedel@e-mirim.hs.kr',
  },
  keywords: [
    '인공지능융합교육',
    '사회정서교육',
    '학습자중심수업',
    '에듀테크',
    '문해력3.0',
    '디지털 글쓰기',
    'PBL',
    '생태전환',
    '교과융합',
    '다문화',
    '기초학력',
    '직업기초능력',
  ],
}

export const books: Book[] = [
  {
    title: 'NEXT 에듀테크 수업에 바로 쓰는 선생님 바이브 코딩',
    publisher: '골든래빗',
    role: '공저',
    year: '2026.9',
    blurb: '코딩은 제미나이에게 맡기고, 구글 생태계 안에서 대화만으로 교실 자동화를 완성합니다.',
    store: '교보문고에서 보기',
    link: 'https://product.kyobobook.co.kr/detail/S000221179950',
    cover: '/covers/book-nextedutech.jpg',
    isNew: true,
  },
  {
    title: '요즘 교사를 위한 웹앱 만들기 with 바이브 코딩',
    publisher: '한빛미디어',
    role: '공저',
    year: '2026.9',
    blurb: '코딩을 몰라도 대화만으로 우리 반 웹앱을 만들고 배포까지 하는 법을 담았습니다.',
    store: 'YES24에서 보기',
    link: 'https://www.yes24.com/product/goods/196020146',
    cover: '/covers/book-vibecoding.jpg',
    isNew: true,
  },
  {
    title: '전국 1등급 족보로 완성하는 디지털교육연구대회',
    publisher: '길벗',
    role: '공저',
    link: 'https://www.yes24.com/product/goods/184394026',
    cover: '/covers/book-research.jpg',
  },
  {
    title: '요즘 교사를 위한 AI 디지털 수업 설계 가이드',
    publisher: '한빛미디어',
    role: '공저',
    link: 'https://www.yes24.com/product/goods/151350143',
    cover: '/aidigital.jpg',
  },
  {
    title: '대한민국 교육 르네상스',
    publisher: '앤써북',
    role: '공저',
    link: 'https://www.yes24.com/product/goods/167476779',
    cover: '/edu.jpg',
  },
]

export const courses: Course[] = [
  {
    title: '사회정서교육 기반 학급 운영 전략',
    platform: '비바샘',
    hours: '직무 6차시',
    description: '그라운드로 만드는 행복한 교실(중등편). SEL 5대 핵심역량으로 학급을 설계하고 감정일기·퀘스트·역량카드를 생활지도에 적용합니다.',
    link: 'https://t.vivasam.com/courses/bundle/c26-010',
    thumb: '/covers/course-vivasam-sel.png',
    isNew: true,
  },
  {
    title: '1등급은 다르다! 수상자들의 디지털교육 연구대회 필승 전략',
    platform: '아이스크림',
    hours: '4주 15차시',
    description: '디지털 교수학습분과 심사 기준을 뜯어보고 연구대회 전략을 세웁니다.',
    link: 'https://teacher.i-scream.co.kr/course/crs/creditView.do?crsCode=7352',
    thumb: '/covers/course-iscream-research.gif',
  },
  {
    title: '학생이 먼저 움직이는 수업 비법! AI 패들렛 수업',
    platform: '아이스크림',
    hours: '4주 15차시',
    description: '패들렛을 중심으로 디지털 도구를 익혀 학생의 능동적 참여를 이끌어 냅니다.',
    link: 'https://teacher.i-scream.co.kr/course/crs/creditView.do?crsCode=7296&searchOrdinalTyCode=TY01',
    thumb: '/covers/course-iscream-padlet.gif',
  },
  {
    title: '디지털 수업? 설계부터 평가까지 여기 다 있다!',
    platform: 'T셀파',
    hours: '15시간 · 연수+도서 세트',
    description: '2022 개정 교육과정 기반 디지털 수업 설계와 AI 도구를 활용한 맞춤형 평가·교수학습 웹앱 제작.',
    link: 'https://edu.tsherpa.co.kr/Product/Detail/1968',
    thumb: '/covers/course-tsherpa.png',
  },
  {
    title: '수업 및 업무 효율 UP! AI와 ChatGPT 200% 활용법',
    platform: '비바샘',
    hours: '직무 15차시',
    description: 'ChatGPT·Gemini·캔바·노트북LM·브리스크 티칭으로 평가와 피드백, 생기부 업무를 효율화합니다.',
    link: 'https://t.vivasam.com/courses/regular/t25-001',
    thumb: '/covers/course-vivasam-ai.jpg',
  },
  {
    title: 'HTHT 교육 실현을 위한 AI 코스웨어 & 디지털교과서 에듀테크 바로 알기',
    platform: '교육사랑',
    hours: '15차시',
    description: 'AI 코스웨어와 디지털교과서로 하이터치 하이테크 교육을 실현합니다.',
    link: 'https://www.edulove.co.kr/main/subject_view.asp?gcode=s0907&inx=1',
    thumb: '/covers/course-edulove.jpg',
  },
]

export const careers = [
  { title: '미림마이스터고등학교', detail: '국어교사 · 2012년 ~ 현재' },
  { title: '숙명여자대학교 교육대학원', detail: 'AI융합교육' },
  { title: '한국외국어대학교 사범대학', detail: '한국어교육과' },
  { title: '교실혁명 선도교사', detail: '' },
  { title: 'AIEDAP 마스터교원', detail: '' },
  { title: '사회정서교육 선도교사', detail: '' },
  { title: '성취평가 선도교원', detail: '' },
  { title: '터치 교사단', detail: '' },
  { title: '글로벌 에듀테크 체험 연수', detail: '터치 교사단 우수교원 · 영국 런던' },
  { title: 'AIEDAP 수업실천 우수 해외 연수', detail: '미국 캘리포니아' },
]

export const awards: Award[] = [
  { title: '제19회 디지털교육연구대회 전국대회 1등급 교육부장관상', institution: '교육부' },
  { title: '제4·5회 AI융합교육 수업 사례 공모전 AI교과융합 부문 교육부장관상', institution: '교육부' },
  { title: '2023·2024 기후환경교육 실천 교사 학습공동체 우수콘텐츠 장관상', institution: '교육부 · 환경부' },
  { title: '2023 교실수업 혁신 유공 표창', institution: '교육부' },
  { title: '제19회 디지털교육연구대회 서울시 예선 2등급 교육감상', institution: '서울시교육청' },
  { title: '제1회 사회정서 교육 수업사례 공모전 최우수상', institution: '한남대학교' },
  { title: '제3회 HTHT 마스터클래스 에듀테크 활용교실 우수사례 한국디지털교육협회장상', institution: '아시아교육협회' },
  { title: '2023 직업교육 수업혁신 우수사례 공모전 우수', institution: '서울시교육청' },
  { title: '2023 디지털 선도학교 터치교사단 우수 사례 발굴 공모전 KERIS원장상', institution: '한국교육학술정보원' },
  { title: '제15회 다문화교육 우수사례 공모전 국가평생교육진흥원장상', institution: '국가평생교육진흥원' },
  { title: '제1회 교육컨텐츠 영상 제작 아이디어 공모전 최우수상', institution: '사립학교교직원연금공단' },
  { title: '제1회 생성AI 활용 창작 그림동화 공모전 장려상', institution: '중앙대학교 지역인문학센터' },
  { title: '제1회 생성형 AI 디지털 아트 대전 입선', institution: '충남콘텐츠코리아랩' },
  { title: '제9회 미래교육상 장려상', institution: '목정미래재단' },
  { title: '제4회 신나는 SW·AI교육 수기공모전 한국과학창의재단 이사장상', institution: '한국과학창의재단' },
  { title: '제3·4회 나눔·성장 수업문화 공모전 우수상', institution: '서울시교육청' },
  { title: '제7회 고졸취업 성공수기 공모전 한국직업능력연구원 원장상', institution: '한국직업능력연구원' },
  { title: '제40회 스승의 날 모범교원 표창', institution: '서울시교육청' },
]
