import { Fragment } from 'react'

export const PRODUCT: any = {
  'ahl-surface-aerator': {
    title: 'AHL Surface Aerator',
    description: 'AHL Surface Aerator is a device designed to add oxygen to wastewater, especially in ponds that have a lot of contaminants and solids. This aeration process helps increase dissolved oxygen levels, thereby supporting microorganisms in breaking down organic matter and harmful substances in wastewater.',
    advantages: (
      <Fragment>
        <li className='list-disc list-outside'>
          <b>Main Function:</b> This device serves to increase the dissolved oxygen level in wastewater through the aeration process. This process involves mixing air into the water, thereby increasing the dissolved oxygen required by microorganisms to break down organic matter and contaminants more efficiently.
        </li>
        <li className='list-disc list-outside'>
          <b>Energy Efficiency:</b> It is capable of producing more oxygen than other similar devices, with efficiency reaching 5-6 kgO₂ per kWh of energy used. In comparison, other devices typically only achieve 1.2-2.4 kgO₂ per kWh.
        </li>
        <li className='list-disc list-outside'>
          <b>Durable and Easy to Maintain:</b> Made from corrosion-resistant materials, AHL Surface Aerator  is designed for a long service life. In addition, it comes with adequate warranties and readily available spare parts, making maintenance easy.
        </li>
        <li className='list-disc list-outside'>
          <b>Wide Range of Power Options:</b> It is available in various sizes, ranging from 7.5 HP to 100 HP, so as to meet various industrial needs. Additionally, it is capable of working up to a water depth of 6 meters.
        </li>
      </Fragment>
    ),
  },
  'daf': {
    title: 'Dissolved Air Flotation',
    description: 'Dissolved Air Flotation (DAF) is an effective water treatment process for removing dissolved and suspended particles from water or wastewater. This process uses air bubbles generated in water saturated with air.',
    advantages: (
      <Fragment>
        <li className='list-disc list-outside'>
          <b>Basic Working Principle:</b> DAF works by attaching particles in water to air bubbles, which then rise to the water's surface, allowing for easy removal.
        </li>
        <li className='list-disc list-outside'>
          <b>Air Bubble Addition Process:</b> In this process, air bubbles are introduced into wastewater mixed with dispersed oil particles. Due to the lower density of air, these bubbles automatically rise to the surface, speeding up the removal of oil particles.
        </li>
        <li className='list-disc list-outside'>
          <b>Wide Applications:</b> DAF methods have been widely used in wastewater treatment across various industries, including oil refining, petrochemicals, chemical plants, and general water treatment.
        </li>
        <li className='list-disc list-outside'>
          <b>Installation Components:</b> A DAF installation consists of several key pieces of equipment, including pumps, tanks, air-water mixing tanks (saturation tanks), air-water distribution pipes, influent pipes, compressors, effluent pipes, and solid waste discharge channels. It also features an air control panel to ensure process efficiency.
        </li>
      </Fragment>
    ),
  },
}
