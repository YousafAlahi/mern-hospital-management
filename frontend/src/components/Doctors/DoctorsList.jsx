
import { doctors } from './../../assets/data/doctors.js';
import DoctorsCard from './DoctorsCard.jsx';



const DoctorsList = () => {
  return (
    <>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

{doctors.map((doctor, index) => (
  <DoctorsCard doctor={doctor} index={index} key={doctor.id} />
))}   
 </div>
</>
  )
}

export default DoctorsList