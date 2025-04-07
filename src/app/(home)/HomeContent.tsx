import './styles/index.css'

import Carousel from './components/Carousel'
import Description from './components/Description'
import Impact from './components/Impact'
import OurPlatform from './components/OurPlatform'
import OurServices from './components/OurServices'
import TechnologyPartners from './components/TechnologyPartners'
import WorkPartners from './components/WorkPartners'

export default function HomeContent() {
  return (
    <div className='relative z-10 min-h-screen w-full bg-black text-white'>
      <h1 className='font-raleway relative z-30 mx-auto mb-10 mt-24 w-[80%] text-center text-2xl font-semibold leading-[30px] md:mb-36 md:mt-80 lg:text-6xl lg:leading-[82px]'>
        Wastewater and Clean Water Treatment
        <br />
        Technology Partners
      </h1>
      <Impact />
      <Description />
      <Carousel />
      <OurServices />
      <OurPlatform />
      <WorkPartners />
      <TechnologyPartners />

      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
    </div>
  )
}
