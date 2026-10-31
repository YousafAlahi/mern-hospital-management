
import avatar from '../assets/images/doctor-img01.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import uploadImageToCloudinary from '../../utils/uploadCloudinary'; // add new line of code
import { BASE_URL, token } from '../../config'  // add new line of code
import {toast} from 'react-toastify'; // add new line of code
import HashLoader from 'react-spinners/HashLoader';






const Profile = ({user}) => {

const [selectedFile, setSelectedFile] = useState(null);

const [loading, setLoading] = useState(false) // add new line of code

const [formData, setFormData] = useState({
  name:'',
  email: '',
  password: '',
  photo:null,
 bloodType: '',
  gender: ''

});

const navigate = useNavigate() // add new line of code

useEffect(() => {
    setFormData({name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType})
}, [user])


const handleInputChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})

};

const handleFileInputChange = async (event) =>{
  const file = event.target.files[0]

  const data = await uploadImageToCloudinary(file) // add new line of code

  // console.log(data) // add new line of code
  setSelectedFile(data.url) // add new line of code
  setFormData({...formData, photo: data.url}) // add new line of code
// later we will use cloudinary to upload images

  console.log(file)
}

const submitHandler = async (event) => {
  // console.log(formData); // add new commit of code
  event.preventDefault();
  setLoading(true) // add new line of code

  try {
    const res = await fetch(`${BASE_URL}/users/${user._id}`,{
      method : "put",
      headers: {
        "Content-Type" : "application/json",
        Autherization : `Bearer ${token}`

      },
      body: JSON.stringify(FormData)
    })

    const {message} = await res.json()

    if(!res.ok){
      throw new Error(message)
    }

    setLoading(false)
    toast.Success(message)
    navigate("/users/profile/me")

  } catch (error) {
    toast.error(err.message)
    setLoading(false)
  } // add new line of code
};
    return(
        <div className='mt-10'>
         <form onSubmit={submitHandler}>
           <div className="mb-5">
            <input
             type="text" 
             name="name" 
             placeholder="Full Name" 
             value={formData.name} 
             onChange={handleInputChange}
             className="w-full pr-14 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary
            text-[22px] leading-7 text-heading placeholder:text-text cursor-pointer"
             />
          </div>
           <div className="mb-5">
            <input
             type="email" 
             name="email" 
             placeholder="Enter Your Email" 
             value={formData.email} 
             onChange={handleInputChange}
             className="w-full pr-14 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary
            text-[22px] leading-7 text-heading placeholder:text-text cursor-pointer"
            aria-readonly
            readOnly
             />
          </div>
           <div className="mb-5">
            <input
             type="password" 
             name="password" 
             placeholder="Password" 
             value={formData.password}
              onChange={handleInputChange}
             className="w-full pr-14 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
             focus:border-b-primary text-[22px] leading-7 text-heading placeholder:text-text cursor-pointer"
             />
          </div>

           <div className="mb-5">
            <input
             type="text" 
             name="BloodType" 
             placeholder="bloodType" 
             value={formData.bloodType}
              onChange={handleInputChange}
             className="w-full pr-14 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary
            text-[22px] leading-7 text-heading placeholder:text-text cursor-pointer"
             />
          </div>

          <div className='mb-5 flex items-center justify-between'>
            <label 
            value={formData.gender}
            onChange={handleInputChange}
            className='text-heading font-bold text-[16px] leading-7'
              >
              Gender
              <select name='role' className='text-text text-[15px] font-semibold leading-7 px-4 py-3 focus:outline-none'>
                <option value="patient">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className='mb-5 flex items-center gap-5'>
            { formData.photo &&<figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center'> 
              <img src={formData.photo} className='w-full rounded-full'/>
            </figure>}  
              {/* In this div we add  { }, selectedFile, && and previewURL   */}
            <div className='relative w-[130px] h-[50px]'>
              <input 
              type='file'
              name='photo'
              id = 'customFile'
              accept='.jpg, .png'
              onChange={handleFileInputChange}
              className='absolute top-0 left-0 cursor-pointer w-full h-full opacity-0'
              />
              <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
               bg-[#0066ff46] text-heading font-semibold rounded-lg truncate cursor-pointer'> 
              {selectedFile ? selectedFile.name : "Upload Photo"}
               </label>
            </div>
          </div>

           <div className="mt-7">
            <button
            disabled = {loading && true}
             type="submit" 
             className="w-full bg-primary text-white leading-[30px] rounded-lg px-4 py-3">
             {loading ? <HashLoader size={25} color='#ffffff'/> : 'Update'}
             </button>
          </div>

          
        </form>
        </div>
    )
};

export default Profile;