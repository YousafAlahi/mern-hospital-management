


const SidePanel = () => {
  return (
    <div className="shadow-card p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text_para mt-0 font-semibold">Ticket Price</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-heading font-bold">500 BDT</span>
        </div>
        <div className="mt-3">
          <p className="text_para mt-0 font-semibold text-heading">Available Time Slote</p>
        </div>

       <ul className="mt-3">
         <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-text font-semibold">Sunday</p>
            <p className="text-[15px] leading-6 text-text font-semibold">4:00 PM - 9:30 PM</p>

        </li>

         <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-text font-semibold">Thuesday</p>
            <p className="text-[15px] leading-6 text-text font-semibold">4:00 PM - 9:30 PM</p>

        </li>

         <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-text font-semibold">Wednesday</p>
            <p className="text-[15px] leading-6 text-text font-semibold">4:00 PM - 9:30 PM</p>

        </li>
       </ul>
       <button className="btn px-2 w-full rounded-md" >Book Appointment</button>
    </div>
  )
}

export default SidePanel