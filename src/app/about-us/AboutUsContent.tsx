import './styles/index.css'

import Description from './components/Description'
import Result from './components/Result'
import Title from './components/Title'
import CoreTechnology from './components/CoreTechnology'
import About from './components/About'

export default function AboutUsContent() {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Title />
      <Description />
      <Result />
      <CoreTechnology />
      <About />

      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
    </div>
  )
}
