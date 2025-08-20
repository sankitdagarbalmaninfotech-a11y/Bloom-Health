import { Mail, Phone, Calendar, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUserDetailsQuery } from '../services/userAPI';
import { useSelector } from 'react-redux';

export default function ProfilePage() {
  const navigate = useNavigate();
  const profileData = useSelector((state) => state?.userSlice?.user);
  console.log(profileData, "profile data"); 

  //Hook calling for user details
  const { data: userDetails } = useUserDetailsQuery();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/home');
    toast.success('Logged out successfully!');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Top Banner / Profile Header */}
      <div className='bg-[#157fc1] text-white py-2 px-6 shadow-md'>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-6'>
          <div className='w-16 h-16 rounded-full bg-white text-[#157fc1] flex items-center justify-center text-2xl font-bold shadow-md'>
            JD
          </div>
          <div className='mb-4'>
            <span className='text-white text-2xl'>John Doe</span>
          </div>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className='max-w-5xl mx-auto px-6 py-10'>
        <h2 className='text-xl font-semibold text-gray-800 mb-6'>Profile Details</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm'>
            <Mail className='h-5 w-5 text-[#157fc1]' />
            <span className='text-gray-700'>john@gmail.com</span>
          </div>

          <div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm'>
            <Phone className='h-5 w-5 text-[#157fc1]' />
            <span className='text-gray-700'>+91 98765 43210</span>
          </div>

          <div className='flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm'>
            <Calendar className='h-5 w-5 text-[#157fc1]' />
            <span className='text-gray-700'>Joined: Jan 15, 2024</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='mt-10 flex gap-4'>
          <button className='bg-[#157fc1] text-white px-6 py-2 rounded-full hover:bg-[#11679c] transition flex items-center gap-2'>
            Edit Profile
          </button>
          <button
            onClick={() => {
              handleLogout();
            }}
            className='border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-50 transition flex items-center gap-2'
          >
            <LogOut className='h-4 w-4' />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
