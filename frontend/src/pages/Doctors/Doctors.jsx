

import DoctorCard from './../../components/Doctors/DoctorsCard';
import { doctors } from './../../assets/data/doctors.js'
import Testimonial from '../../components/Testimonial/Testimonial.jsx';

const Doctors = () => {
  return (
   <>
   <section className='bg-[#fff9ea]'>
    <div className='container text-center'>
      <h2 className='heading'>Find a Doctor</h2>
      <div className='max-w-[570x] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
        <input
        type='search'
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-text'
        placeholder='Search Doctor'/>
        <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
      </div>
    </div>
   </section>

   <section>
   <div className='container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
{doctors.map((doctor, index) => (
  <DoctorCard doctor={doctor} index={index} key={doctor.id} />
))}   
 </div>
   </div>
   </section>

   
      {/*=============== Testimonial Section Start ============== */}
      <section>
        <div className="container">
           <div className="lg:w-full mx-aut">
            <h2 className="heading text-center">
             What our patient say
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System Offers umatched.
              expert health care
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/*===============Testimonial Section End ================= */}

   </>
  )
}

export default Doctors