
import heroImg01 from '../assets/images/hero-img01.png';

const Home = () => {
  return (
    <>
      {/* ============== Hero_Section start ================== */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* Hero content Start */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-heading font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live healthy, longer life.
                  </h1>
                  <p className="text-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                  <button className="btn">Request an Appointment</button>
              </div>

              {/* Hero count start */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                lg:gap-[30px]">

                  <div>
                    <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400]
                    text-heading">30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellow rounded-full block mt-[30px]"></span>
                    <p className="text-para">Years of Experience</p>
                  </div>

                    <div>
                    <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400]
                    text-heading">15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple rounded-full block mt-[30px]"></span>
                    <p className="text-para">Clinic</p>
                   </div>

                   <div>
                    <h2 className="text-[30px] leading-[56px] lg:text-[144px] lg:leading-[54px] font-[400]
                    text-heading">100+
                    </h2>
                    <span className="w-[100px] h-2 bg-iris-blue rounded-full block mt-[30px]"></span>
                    <p className="text-para">Patien Satisfaction</p>
                    </div>
                </div>
              {/* Hero count EnnD */}
              {/* Hero count EnnD */}
              <div className="flex justify-end">
               <div className=''>
                <img src={heroImg01} alt="hero image" />
              </div> 

              </div>


            </div>
            {/* Hero content End */}

          </div>
        </div>
      </section>
      {/* ============== Hero_Section start ================== */}
    </>
  );
};

export default Home;
