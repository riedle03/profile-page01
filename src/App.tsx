import React from 'react';
import { Phone, Mail, BookOpen, Award, Briefcase, Hash } from 'lucide-react';
import './App.css'; // App.css 파일을 불러옵니다.

// --- Interfaces ---
interface Award {
  title: string;
  institution: string;
}

interface Career {
  position: string;
  organization?: string;
}

interface Book {
  title: string;
  subtitle?: string;
  publisher: string;
  link?: string;
  image?: string;
}

// --- Data ---
const teacherProfile = {
  name: '이대형',
  school: '미림마이스터고 국어교사',
  tagline: '누구나 쉽게 AI 디지털 기반 교육혁신!',
  contact: {
    phone: '010-9120-0829',
    email: 'riedel@e-mirim.hs.kr',
  },
  hashtags: [
    '학습자중심수업', '인공지능융합교육', '사회정서교육', '생태전환',
    '교과융합', '다문화', '에듀테크',
    '기초학력', '문해력3.0', '독해력', '작문력', '어휘력',  '직업기초능력', '디지털 글쓰기', 'PBL'
  ],
  careers: [
    { position: '미림마이스터고등학교 근무(2012 ~ 현재)', },
    { position: '숙명여대 교육대학원 AI융합교육' },
    { position: '한국외대 사범대학 한국어교육과' },
    { position: '터치 교사단',  },
    { position: '성취평가 선도교원',  },
    { position: '교실혁명 선도교사',  },
    { position: 'AIEDAP 마스터교원',  },
    { position: '사회정서교육 선도교사',  },
    { position: '터치 교사단 우수교원 글로벌 에듀테크 체험 연수 참가(영국 런던)',  },
    { position: 'AIEDAP 마스터교원 수업실천 우수 해외 연수 참가(미국 캘리포니아)' },
  ] as Career[],
  books: [
    { title: '요즘 교사를 위한 AI 디지털 수업 설계 가이드', subtitle: '공저', publisher: '한빛미디어', link: 'https://www.yes24.com/product/goods/151350143', image: '/aidigital.jpg' },
    { title: '대한민국 교육 르네상스', subtitle: '공저', publisher: '앤써북', link: 'https://www.yes24.com/product/goods/167476779', image: '/edu.jpg' },
  ] as Book[],
  awards: [
    { title: '제19회 디지털교육연구대회 전국대회 1등급 교육부장관상', institution: '교육부' },
    { title: '제19회 디지털교육연구대회 서울시 예선 2등급 교육감상', institution: '서울시교육청' },
    { title: '제4,5회 AI융합교육 수업 사례 공모전 AI교과융합 부문 교육부장관상', institution: '교육부' },
    { title: '2023, 2024 기후환경교육 실천을 위한 교사 학습공동체 우수콘텐츠 장관상', institution: '교육부, 환경부' },
    { title: '제1회 사회정서 교육 수업사례 공모전 최우수상', institution: '한남대학교' },
    { title: '2023 교실수업 혁신 유공 표창', institution: '교육부' },
    { title: '제3회 HTHT 마스터클래스 에듀테크 활용교실 우수사례 초중고 부문 한국디지털교육협회장상', institution: '(사)아시아교육협회' },
    { title: '2023 직업교육 수업혁신 우수사례 공모전 우수', institution: '서울시교육청' },
    { title: '2023 디지털 선도학교 터치교사단 우수 사례 발굴 공모전 KERIS원장상', institution: '한국교육학술정보원' },
    { title: '제15회 다문화교육 우수사례 공모전 국가평생교육진흥원장상', institution: '국가평생교육진흥원 중앙다문화교육센터' },
    { title: '제1회 교육컨텐츠 영상 제작 아이디어 공모전 최우수상', institution: '사립학교교직원연금공단' },
    { title: '제1회 생성AI 활용 창작 그림동화 공모전 장려상', institution: '중앙대학교 지역인문학센터' },
    { title: '제1회 생성형 AI 디지털 아트 대전 입선', institution: '충남콘텐츠코리아랩' },
    { title: '제9회 미래교육상 장려상', institution: '목정미래재단' },
    { title: '제4회 신나는 SW·AI교육 수기공모전 한국과학창의재단 이사장상', institution: '한국과학창의재단' },
    { title: '제3, 4회 나눔·성장 수업문화 공모전 우수상', institution: '서울시교육청' },
    { title: '제7회 고졸취업 성공수기 공모전 한국직업능력연구원 원장상', institution: '한국직업능력연구원' },
    { title: '제40회 스승의 날 모범교원 표창', institution: '서울시교육청' },
  ] as Award[],
};

// --- Components ---

const SectionTitle: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-8">
    <span className="p-2 bg-blue-500/10 text-blue-600 rounded-xl mr-3 backdrop-blur-md shadow-sm border border-blue-200/30">{icon}</span>
    {title}
  </h2>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    // --- Pretendard Font & Global Styles ---
    <div className="min-h-screen font-sans text-gray-800 relative overflow-hidden bg-[#F2F2F7]">
      {/* Font Import Link */}
      <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      
      {/* Background Blurs for Glassmorphism Effect */}
      <div className="fixed top-[-20%] left-[-20%] w-[70%] h-[70%] rounded-full bg-blue-400/30 filter blur-[120px] mix-blend-multiply animate-blob pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-20%] w-[70%] h-[70%] rounded-full bg-purple-400/30 filter blur-[120px] mix-blend-multiply animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed top-[30%] left-[30%] w-[60%] h-[60%] rounded-full bg-indigo-400/20 filter blur-[120px] mix-blend-multiply animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Container with Glass Effect */}
        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl overflow-hidden">
        
          {/* Header Section */}
          <header className="relative text-center p-12 pb-0 animate-fade-in">
            <div className="w-48 h-48 rounded-full mx-auto mb-8 p-1.5 bg-gradient-to-tr from-blue-300 to-purple-300 shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-out">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-white">
                {/* Original Image Code with onError logic */}
                <img
                  src="/profile-image.jpg" 
                  alt={`${teacherProfile.name} 프로필 사진`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://placehold.co/160x160/CBD5E1/475569?text=Error';
                    target.alt = '프로필 이미지 로드 실패';
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight mb-3 text-gray-900">{teacherProfile.name}</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">{teacherProfile.school}</p>
            <div className="inline-block bg-white/40 backdrop-blur-lg border border-white/50 rounded-full px-8 py-3 shadow-sm">
              <p className="text-xl font-medium italic text-gray-700">"{teacherProfile.tagline}"</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-8 md:p-12 space-y-16">
            
            {/* Contact Info - Floating Cards */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-6 animate-fade-in delay-100">
              <a 
                href={`tel:${teacherProfile.contact.phone}`} 
                className="group flex items-center bg-white/60 backdrop-blur-xl border border-white/60 px-8 py-4 rounded-3xl shadow-md hover:shadow-xl hover:bg-white/80 transition-all duration-300 text-gray-800 font-semibold w-full md:w-auto justify-center"
              >
                <div className="bg-blue-500/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform backdrop-blur-md">
                  <Phone size={22} className="text-blue-600" />
                </div>
                {teacherProfile.contact.phone}
              </a>
              <a 
                href={`mailto:${teacherProfile.contact.email}`} 
                className="group flex items-center bg-white/60 backdrop-blur-xl border border-white/60 px-8 py-4 rounded-3xl shadow-md hover:shadow-xl hover:bg-white/80 transition-all duration-300 text-gray-800 font-semibold w-full md:w-auto justify-center"
              >
                <div className="bg-purple-500/10 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform backdrop-blur-md">
                  <Mail size={22} className="text-purple-600" />
                </div>
                {teacherProfile.contact.email}
              </a>
            </section>

            {/* Hashtags */}
            <section className="animate-fade-in delay-200">
              <SectionTitle icon={<Hash size={28} />} title="관심 키워드" />
              <div className="flex flex-wrap gap-3">
                {teacherProfile.hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-white/50 backdrop-blur-md border border-white/60 text-gray-700 rounded-2xl text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default select-none shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Career - Timeline Style with Glass Cards */}
            <section className="animate-fade-in delay-300">
              <SectionTitle icon={<Briefcase size={28} />} title="주요 경력" />
              <div className="space-y-6 ml-4 border-l-2 border-blue-200/50 pl-8 relative">
                {teacherProfile.careers.map((career, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-white/80 bg-blue-500 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300 shadow-md"></div>
                    <Card className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <p className="text-lg font-bold text-gray-800 leading-snug mb-2 md:mb-0">{career.position}</p>
                      {career.organization && (
                        <span className="inline-block text-sm font-bold text-blue-700 bg-blue-100/50 backdrop-blur-md px-3 py-1.5 rounded-xl whitespace-nowrap">
                          {career.organization}
                        </span>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </section>

            {/* Books - Glass Cards Grid */}
            <section className="animate-fade-in delay-400">
              <SectionTitle icon={<BookOpen size={28} />} title="출간 도서" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teacherProfile.books.map((book, index) => (
                  <Card key={index} className="flex flex-col h-full group overflow-hidden">
                    {book.image && (
                      <div className="relative mb-6 w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                          crossOrigin="anonymous"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                         <span className="bg-purple-100/50 text-purple-700 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Book</span>
                         {book.link && <BookOpen size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />}
                      </div>
                      {book.link ? (
                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2">
                          {book.title}
                        </a>
                      ) : (
                        <h3 className="text-xl font-extrabold text-gray-900 line-clamp-2">{book.title}</h3>
                      )}
                      {book.subtitle && <p className="text-md text-gray-600 mt-2 font-medium">{book.subtitle}</p>}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200/30">
                      <p className="text-sm font-semibold text-gray-500 flex items-center">
                        <span className="w-2.5 h-2.5 bg-purple-400 rounded-full mr-2.5"></span>
                        {book.publisher}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Awards - Compact Glass Cards Grid */}
            <section className="animate-fade-in delay-500">
              <SectionTitle icon={<Award size={28} />} title="주요 수상 내역" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teacherProfile.awards.map((award, index) => (
                  <Card key={index} className="flex flex-col justify-between h-full hover:bg-white/60">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug break-keep">
                      {award.title}
                    </h3>
                    <div className="flex items-center justify-end mt-2">
                      <span className="text-xs font-bold text-blue-700 bg-blue-100/50 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                        {award.institution}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

          </main>

          {/* Footer */}
          <footer className="bg-white/40 backdrop-blur-xl text-gray-500 text-center py-10 border-t border-white/50">
            <p className="font-semibold text-lg">&copy; {new Date().getFullYear()} {teacherProfile.name}</p>
            <p className="text-sm mt-3 opacity-80 font-medium">Mirim Meister High School</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;