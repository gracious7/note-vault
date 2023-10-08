import t1 from '../assets/images/Shayan.jpeg'
import t4 from '../assets/images/landingpage.jpg'
import AdminSidebar from "../components/AdminSidebar";
 
 const AboutUS = () => {
   return (
     <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
      <section>
            <div className=' mx-auto'>
            <div className='font-bold text-6xl text-center mb-5'>About Us</div>
            <div>
              <div className='flex justify-center mb-12 items-center rounded-lg'><img className=' w-[75%] h-[100%]' alt="Landing-page" src={t4} /></div>
              <div className='text-lg mb-24 leading-16 mx-36 text-justify'>
                <p className='mb-6'>
                  We are Team Big3 and our aspiration for making this project 
                  was to mediate the uneven sharing of notes and resources 
                  required for preparation of semester exams for students.
                  We wish that this website reaches out to all student of NIT 
                  Raipur and specially those who are anxious and stressed for 
                  semester exam preparation.
                </p>
                <p className='mb-6 text-[#333333]'>
                  <a className='text-[#121d98]' href="#">Contact us</a> at the given email id if you find any glitches or errors.
                </p>
                <p>
                  We plan to take this website to another level in terms of features ,
                  functioning and utility.
                </p>
              </div>
            <div>
            </div>
              <div className='mb-5'>
                <div className='font-bold text-6xl text-center mb-5' >OUR TEAM</div>
                <div className='flex justify-center gap-5'>
                  <div className='w-[28%] flex flex-col items-center shadow-lg p-5 pt-5 rounded-xl'>
                    <div className='w-[80%] mb-4'><img className='hover:scale-110 transition-all rounded-2xl' alt="Member1" src={t1} /></div>
                    <div className='mt-2'> 
                      <div className='text-center text-lg font-medium'>Shayan Khan, ECE</div>
                      <div className='text-center text-lg font-medium'>Designer, Frontend-Developer</div>
                    </div>
                  </div>
                  <div className='w-[28%] flex flex-col items-center shadow-lg p-5 pt-5 rounded-xl'>
                    <div className='w-[80%] mb-4'><img className='hover:scale-110 transition-all rounded-2xl' alt="Member1" src={t1} /></div>
                    <div className='mt-2'>
                      <div className='text-center text-lg font-medium'>Shayan Khan, ECE</div>
                      <div className='text-center text-lg font-medium'>Designer, Frontend-Developer</div>
                    </div>
                  </div>
                  <div className='w-[28%] flex flex-col items-center shadow-lg p-5 pt-5 rounded-xl'>
                    <div className='w-[80%]  mb-4'><img className='hover:scale-110 transition-all rounded-2xl' alt="Member1" src={t1} /></div>
                    <div >
                      <div className='text-center text-lg font-medium'>Shayan Khan, ECE</div>
                      <div className='text-center text-lg font-medium'>Designer, Frontend-Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      </main>
    </div>
    
   );
 };
 export default AboutUS;