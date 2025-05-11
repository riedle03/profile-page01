import React from 'react';
import './App.css'; // Import App-specific styles

// Define the structure for an award
interface Award {
  title: string;
  institution: string;
}

// Teacher's profile data
const teacherProfile = {
  name: '이대형',
  school: '미림마이스터고 국어교사',
  tagline: '누구나 쉽게 AI 디지털 기반 교육혁신!',
  contact: {
    phone: '010-9120-0829',
    email: 'riedel@e-mirim.hs.kr',
  },
  hashtags: [
    'AI융합', '생태전환', '사회정서', '다문화', '글쓰기','토론', '국제공동수업', '교과융합', 'Agency', '기초학력', '직업기초능력', '에듀테크', '문해력', '독해력', '작문력', '어휘력'
  ],
  awards: [
    { title: '제4,5회 AI융합교육 수업 사례 공모전 AI교과융합 부문 교육부장관상', institution: '교육부' },
    { title: '2023, 2024 기후환경교육 실천을 위한 교사 학습공동체 우수콘텐츠 장관상', institution: '교육부, 환경부' },
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Profile Header */}
        <header className="profile-header bg-blue-700 p-8 text-white text-center fade-in-section">
          <div className="mb-4">
             <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300 shadow-lg bg-blue-50 flex items-center justify-center">
                <span className="text-5xl font-semibold text-blue-700">AI</span>
             </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{teacherProfile.name}</h1>
          <p className="text-xl mt-1 text-blue-200">{teacherProfile.school}</p>
          <p className="text-2xl mt-4 font-light italic">"{teacherProfile.tagline}"</p>
        </header>

        {/* Main Content Area */}
        <main className="p-6 md:p-10 space-y-10">
          {/* Profile Picture Section */}
          <section className="flex justify-center items-center fade-in-section mb-8" style={{ animationDelay: '0.1s' }}>
            <img
              src="/profile-image.jpg" 
              alt={`${teacherProfile.name} 프로필 사진`}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-white object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = 'https://placehold.co/160x160/CBD5E1/475569?text=Error';
                target.alt = '프로필 이미지 로드 실패';
              }}
            />
          </section>

          {/* Contact Section */}
          <section className="fade-in-section text-center mb-10" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                스마트폰: <a href={`tel:${teacherProfile.contact.phone}`} className="ml-1 text-blue-600 hover:text-blue-800 hover:underline">{teacherProfile.contact.phone}</a>
              </p>
              <p className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                이메일: <a href={`mailto:${teacherProfile.contact.email}`} className="ml-1 text-blue-600 hover:text-blue-800 hover:underline">{teacherProfile.contact.email}</a>
              </p>
            </div>
          </section>
          
          {/* Hashtags Section */}
          <section className="fade-in-section" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">전문 분야 및 관심사</h2>
            <div className="flex flex-wrap gap-2">
              {teacherProfile.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="hashtag-badge"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="fade-in-section" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-blue-500 pl-3">주요 수상</h2>
            <div className="space-y-6">
              {teacherProfile.awards.map((award, index) => (
                <div key={index} className="award-card transform hover:scale-105 transition-transform duration-300 ease-out">
                  <h3 className="award-title text-lg">{award.title}</h3>
                  <p className="award-institution">{award.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center p-6">
          <p>&copy; {new Date().getFullYear()} {teacherProfile.name}. All rights reserved.</p>
          <p className="text-sm mt-1">Mirim Meister High School</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
