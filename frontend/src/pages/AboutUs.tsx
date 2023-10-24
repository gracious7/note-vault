// import t1 from '../assets/images/Shayan.jpeg';
// import t2 from '../assets/images/pranjal.jpeg'
// import t3 from '../assets/images/prince.jpg'
import gi1 from '../assets/images/gi1.png';
import gi2 from '../assets/images/gi2.png';
import gi3 from '../assets/images/gi3.png';
import gi4 from '../assets/images/gi4.png';
import gi5 from '../assets/images/gi5.png';
import gi6 from '../assets/images/gi6.png';
// import Big from "../assets/images/big3.jpg";

const AboutUS = () => {
  return (
    <main className="dashboard">
      <section className="mx-auto h-fit bg-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold pt-4">About Us</h1>
        </div>
        <div className="text-base sm:flex sm:flex-col lg:grid lg:grid-cols-3 text-[white] leading-7 mx-6 mb-6  rounded-2xl overflow-hidden">
          <div className="lg:hidden bg-cover xs:w-[100%] xs:h-[175px] sm:h-[250px] bg-top bg-[url('../assets/images/big3.jpg')]"></div>
          <div className='xs:p-4 sm:p-6 bg-[#4f92ff] col-span-2 xs:text-xs sm:text-base text-justify'>
            <p className="mb-4">
              We are Team #Big3, and our aspiration for creating this project
              was to address the unequal distribution of study materials and
              resources needed for semester exams among students. We hope that
              this website benefits all NIT Raipur students, especially those
              who are stressed about exam preparations.
            </p>
            <p className="mb-4">
              <span className="hover:border-b-2">Contact us</span> at the
              provided email address if you encounter any glitches or errors.
            </p>
            <p>
              Our plan is to enhance this website with additional features,
              improved functionality, and greater utility.
            </p>
          </div>
          <div className="sm:hidden lg:block bg-cover hover:scale-105 transition-all  lg:h-[auto] lg:w-[110%] bg-top bg-[url('../assets/images/big3.jpg')]">


            {/* <img
              className='lg:hidden block'
              height={100}
              src={Big}
              alt='Big3'
            /> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 justify-center items-center mx-6 gap-y-2">
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all rounded-tl-2xl" src={gi1} alt="gi1" />
          </div>
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all rounded-tr-2xl" src={gi2} alt="gi2" />
          </div>
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all" src={gi3} alt="gi3" />
          </div>
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all" src={gi4} alt="gi4" />
          </div>
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all rounded-bl-2xl" src={gi5} alt="gi5" />
          </div>
          <div className=' overflow-hidden'>
            <img className="w-[95%] hover:scale-105 transition-all rounded-br-2xl" src={gi6} alt="gi6" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUS;
