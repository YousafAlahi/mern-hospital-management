
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import { AiFillInstagram } from "react-icons/ai";

import {AiFillYoutube, AiFillGithub} from 'react-icons/ai';



const socialLinks = [
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className='group-hover text-black w-4 h-5'/>,
  },
   {
    path: 'https://www.youtube.com/',
    icon: < AiFillGithub className='group-hover text--black w-4 h-5'/>,
  },
   {
    path: 'https://www.youtube.com/',
    icon: <AiFillInstagram  className='group-hover text--black w-4 h-5'/>,
  },
   {
    path: 'https://www.youtube.com/',
    icon: <RiLinkedinFill className='group-hover text--black w-4 h-5'/>,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: "Home"
  },
   {
    path: '/',
    display: "About us"
  },
   {
    path: '/services',
    display: "Services"
  },
   {
    path: '/',
    display: "Blog"
  },
];

const quickLinks02 = [
  {
    path: '/fint-a-doctor',
    display: "Find a Doctor"
  },
   {
    path: '/',
    display: "Request an Appointment"
  },
   {
    path: '/',
    display: "Find a Location"
  },
   {
    path: '/',
    display: "Get a Opinion"
  },
];


const quickLinks03 = [
  {
    path: '/',
    display: "Donate"
  },
   {
    path: '/contact',
    display: "Contact us"
  },
  
];



const Footer = () => {
  const year = new Date().getFullYear();
  return (
   <footer className='pb-16 pt-10'>
    <div className='container'>
       <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[10px] mt-[30px] lg:mt-[55px]'> */}
              <div>
                <img src ={logo}/>
                <p className='text-[16px] leading-7 font-[400] text-heading'>Copyright {year} developed by M.Yousaf all right reserved.</p>
                <div className='flex items-center gap-3 mt-4'>
                {socialLinks.map((link)=> (
                    <Link to={link.path} key={link.id} className='w-9 h-9 border border-solid border-[181A1E] rounded-full flex items-center justify-center group hover:bg-iris-blue hover:border-none'>
                      {link.icon}
                    </Link>
                ))}
                </div>
              </div>

              <div>
                <h2 className='text-[20px] leading-[30px] mb-6 text-heading'>Quick Link</h2>
                <ul>
                  {quickLinks01.map((item, index) => (
                  <li key={index} className='mb-4'>
               <Link to={item.path} className='text-[16px] leading-7 font-[400] text-heading'>{item.display}</Link>
                     </li>   
                 ))}
                </ul>
              </div>

               <div>
                <h2 className='text-[20px] leading-[30px] mb-6 text-heading'>I  want to:</h2>
                <ul>
                  {quickLinks02.map((item, index) => (
                  <li key={index} className='mb-4'>
               <Link to={item.path} className='text-[16px] leading-7 font-[400] text-heading'>{item.display}</Link>
                  </li>   
                 ))}
                </ul>
              </div>

                <div>
                <h2 className='text-[20px] leading-[30px] mb-6 text-heading'>Support</h2>
                <ul>
                  {quickLinks03.map((item, index) => (
                  <li key={index} className='mb-4'>
               <Link to={item.path} className='text-[16px] leading-7 font-[400] text-heading'>{item.display}</Link>
                     </li>   
                 ))}
                </ul>
              </div>



        </div>
    </div>
   </footer>
  )
}

export default Footer