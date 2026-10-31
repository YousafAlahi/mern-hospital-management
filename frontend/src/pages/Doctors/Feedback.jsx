
import { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate';
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm';


const Feedback = () => {

const [showFeedbackForm, setShowFeedbackForm] = useState(false);


  return (
  <>
    <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-text mb-[30px]">All reviews (272)</h4>

        <div className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                    <img src={avatar}/>
                </figure>

                <div>
                    <h5 className='text-[14px] leading-4 font-bold text-iris-blue'>Ali Ahmed</h5>
                    <p className='text-[12px] leading-4 text-text'>{formateDate('02-14,2025')}</p>
                    <p className='text_para text-[12px] mt-3 font-medium '>Good service,</p>
                </div>
            </div>

            <div className='flex gap-1'>
                {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067FF'/>)}
            </div>
        </div>
    </div>
    {!showFeedbackForm && 
    (<div className='text-center'>
        <button className='btn' onClick={() => setShowFeedbackForm(true)}>Give feedback</button>
    </div>
)}
{showFeedbackForm && <FeedbackForm/>}
  </>
  )
}

export default Feedback