

import { services } from './../../assets/data/Services.js'
import ServicesCard from './ServicesCard'


const ServicesList = () => {
  // console.log(services)
  return (
   <>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
{services.map((item, index) => (
  <ServicesCard item={item} index={index} key={item.id}  />
))}   
 </div>
   </>
  )
}

export default ServicesList