import Hero from './components/Hero'
import Characters from './components/Characters'
import Actions from './components/Actions'
import Timeline from './components/Timeline'
import Analysis from './components/Analysis'
import Laws from './components/Laws'
import Compare from './components/Compare'
import RelatedCases from './components/RelatedCases'
import GlobalLegal from './components/GlobalLegal'
import Team from './components/Team'
import MusicPlayer from './components/MusicPlayer'
import VideoSection from './components/VideoSection'
import CompareGobal from './components/CompareGobal'
import FloatingTOC from './components/FloatingTOC'
import FloatingIcons from './components/FloatingIcons'
import RandomCrimeTroll from './components/RandomCrimeTroll'

export default function App() {
  return (
    <div className="bg-[#F0FFDF] text-[#1a1a1a] font-sans min-h-screen overflow-hidden">
{/* Khối Header chứa Logo HUB */}
<header className="w-full px-8 py-4 flex items-center bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
  
  {/* Đường dẫn gọi trực tiếp ảnh từ thư mục public */}
  <img 
    src="/logo.jpg" 
    alt="Logo Đại học Ngân hàng TP.HCM" 
    className="w-14 h-auto object-contain mr-4 drop-shadow-md hover:scale-105 transition-transform duration-300" 
  />
  
  <div className="flex flex-col">
    <span className="text-xl font-black text-[#1b3664] uppercase tracking-wide leading-tight">
      Khoa học dữ liệu trong kinh doanh
    </span>
    <span className="text-xs font-bold text-[#b91c22] uppercase tracking-widest">
      Trường Đại học Ngân hàng TP.HCM
    </span>
  </div>

</header>
      <FloatingIcons />
      <FloatingTOC />
      <Hero />
      <VideoSection/>
      <Characters /> 
      <Timeline /> 
      <Actions /> 
      <Analysis />
      <Compare />
      <Laws />
      <GlobalLegal/>
      <CompareGobal/>
      <RelatedCases/>
      <RandomCrimeTroll/>
      <Team/>
      <MusicPlayer/>
    </div>
  )
}