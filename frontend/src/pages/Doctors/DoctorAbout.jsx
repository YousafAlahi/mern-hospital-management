
import { formateDate } from "../../utils/formateDate"


const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] font-semibold text-heading flex items-center gap-2">About of
            <span className="text-iris-blue font-bold leading-9 text-[22px]">Muhibur Rehman</span>
            </h3>
           <p className="text_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           </p>
        </div>

        <div className="mt-12">
           <h3 className="text-[20px] leading-[30px] font-semibold">Education</h3> 

           <ul className="pt-4 md:p-5">
            <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-iris-blue text-[15px] leading-6 font-semibold">
                         {/* {formateDate('07-04-2022')} -  {formateDate('04-07-2024')} */}
                          {formateDate('07-04-2022')}
                        </span>
                    <p className="text-[16px] leading-6 font-medium text-text">PHD in Surgeon</p>
                </div>

                <p className="text-[14px] leading-6 font-medium text-text">Apollo Hospital, New York</p>
            </li>

             <li className="flex flex-col md:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                <div>
                    <span className="text-iris-blue text-[14px] leading-6 font-semibold">
                        {/* {formateDate('04-07-2020')} - {formateDate('03-05-2022')} */}
                        {formateDate('04-07-2020')}
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-text">PHD in Surgeon</p>
                </div>

                <p className="text-[14px] leading-6 font-medium text-text">Apollo Hospital, New York</p>
            </li>
           </ul>
        </div>

        <div className="mt-12">
             <h3 className="text-[20px] leading-[30px] font-semibold">Experience</h3> 

             <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md;p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellow text-[15px] leading-6 font-semibold">
                             {formateDate('07-04-2022')}
                    </span>
                 <p className="text-[16px] leading-6 font-medium text-text">Sr. Surgeon</p>
                <p className="text-[10px] leading-6 font-bold text-text">Apolo Hospital,New York</p>
                </li>

                  <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellow text-[15px] leading-6 font-semibold">
                             {formateDate('07-04-2022')}
                    </span>
                 <p className="text-[16px] leading-6 font-medium text-text">Sr. Surgeon</p>
                <p className="text-[10px] leading-6 font-bold text-text">Apolo Hospital,New York</p>
                </li>
             </ul>

        </div>
    </div>
  )
}

export default DoctorAbout