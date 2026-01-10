import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from '../assets/images/faq-img.png';


import featureImg from "../assets/images/feature-img.png";

import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ============== Hero_Section SStart ================== */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero content Start */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-heading font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live healthy, longer life.
                </h1>
                <p className="text_para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* Hero count start */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400] text-heading">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow rounded-full block mt-[30px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400] text-heading">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple rounded-full block mt-[30px]"></span>
                  <p className="text_para">Clinic</p>
                </div>

                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400] text-heading">
                    100+
                  </h2>
                  <span className="w-[100px] h-2 bg-iris-blue rounded-full block mt-[30px]"></span>
                  <p className="text_para">Patien Satisfaction</p>
                </div>
              </div>
              {/* Hero count Ennd */}
            </div>
            {/* Hero content EEnnDD */}

            {/* Hero Image Section Start */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="hero_image" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="hero_image"
                />
                <img className="w-full" src={heroImg03} alt="hero_image" />
              </div>
            </div>

            {/* Hero Image Section EEnnd */}
          </div>
        </div>
      </section>
      {/* ============== Hero_Section EEnnDD ================== */}

      <section>
        <div className="container">
          <div className="lg:w-full mx-aut">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System Offers umatched.
              expert health care
            </p>
          </div>
        </div>
        {/* 
<div className='flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
</div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {/* ============= First Column ================ */}

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="Icon01" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">
                Find a Docter
              </h2>
              <p className="text-[16px] leading-7 text-heading font-[400px] mt-4 text-center">
                World-class care for everyone. Our health System Offers
                umatched. expert health care. From the to the Clinic
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-heading mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary"
              >
                <BsArrowRight className="group-hover:text-white w-5 h-5" />
              </Link>
            </div>
          </div>
          {/* ============= Second Column ================ */}

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="Icon01" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">
                Find a Location
              </h2>
              <p className="text-[16px] leading-7 text-heading font-[400px] mt-4 text-center">
                World-class care for everyone. Our health System Offers
                umatched. expert health care. From the to the Clinic
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-heading mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary"
              >
                <BsArrowRight className="group-hover:text-white w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* ============= 3rd Column ================ */}

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="Icon01" />
            </div>
            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-heading font-[700] text-center">
                Book Appointment
              </h2>
              <p className="text-[16px] leading-7 text-heading font-[400px] mt-4 text-center">
                World-class care for everyone. Our health System Offers
                umatched. expert health care. From the to the Clinic
              </p>

              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border border-solid border-heading mt-[30px] mx-auto flex items-center justify-center group hover:bg-primary"
              >
                <BsArrowRight className="group-hover:text-white w-5 h-5" />
              </Link>
            </div>
          </div>
          {/* ============= 3rd Column End================ */}
        </div>
      </section>
      {/*====About Section Start ===*/}
      <About />
      {/*===About Section End ====*/}
      {/*=============== Services Section Start ================= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System Offers umatched.
              expert health care
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/*=============== Services Section End ================= */}

      {/*=============== Feature Section End ================= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* === feature Content === */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physicain here, and contact their office.
                </li>
                <li className="text_para mb-8">
                  3. View our physicain who are accepting new patients, use the
                  online scheduling tool to selectan appiontment time.
                </li>
              </ul>
              <Link to="/" className="btn">
                Learn More
              </Link>
            </div>
            {/* === feature Image === */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" />
              <div className="w-[150px] lg:w-[280px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:mb-[26px] rounded-[10px]">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[600]">
                      Tue, 26
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-heading font-[400]">
                      10: 00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:py-[9px] ">
                    <img src={videoIcon} />
                  </span>
                </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lh:leading-4 text-iris-blue font-[500] mt-2 lg:mt-4 rounded-full">
                Consultation
              </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src ={avatarIcon}/>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-heading">Wayne Collins</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=============== Feature Section End ================= */}


      {/*=============== Our great Doctors Section Start ================= */}
<section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System Offers umatched.
              expert health care
            </p>
          </div>
          <DoctorsList/>
      </div>
</section>
      {/*=============== Our great Doctors Section End ================= */}

      {/*=============== Faq Section Start =============== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block"><img src={faqImg}/></div>
            <div className="w-full md:1/2">
            <h2 className="heading">Most questions by our beloved patients</h2>
            <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/*=============== Faq Section End ================= */}


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

          <Testimonial/>
        </div>
      </section>
      {/*===============Testimonial Section End ================= */}


    </>
  );
};

export default Home;
