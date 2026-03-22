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

export default function App() {
  return (
    <div className="bg-[#F0FFDF] text-[#1a1a1a] font-sans min-h-screen overflow-hidden">
      <Hero />
      <Characters /> 
      <Timeline /> 
      <Actions /> 
      <Analysis />
      <RelatedCases/>
      <Compare />
      <Laws />
      <GlobalLegal/>
      <Team/>
    </div>
  )
}