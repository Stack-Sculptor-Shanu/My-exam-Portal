import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { setAdminData } from '../components/Redux/Slices/AdminSlice'; 
import axios from 'axios'; 
import adminSVG from '../Assets/createaccount.svg'; 
import { toast, ToastContainer } from 'react-toastify'; 

const AdminReg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const { name, email, phone, branch } = useSelector((state) => state.admin.data);
  console.log(name, email, phone, branch);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generatePassword = (x, phonenumber) => {
    const firstName = x?.split(' ')[0]; 
    const lastThreeDigits = phonenumber?.slice(-3); 
    return `${firstName}@${lastThreeDigits}`;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = generatePassword(name, phone);
    setLoading(true);
    setError(null);
  
    try {
      const adminData = {
        name,
        email,
        mobilenumber: phone, 
        course: branch, 
        role: 'admin', 
        password
      };
      console.log(adminData);
  
      const response = await axios.post('http://localhost:5050/api/register', adminData);
      if (response.status === 200) {
        console.log('Admin created successfully:', response.data);
        toast.success('Admin account created successfully!', {
          position: 'top-right',
          autoClose: 5000,
        });
        navigate('/login'); 
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError('Failed to register. Please try again later.');
      toast.error('Failed to register. Please try again later.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAdminData({ name, value }));
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 md:flex-row h-screen bg-gray-100">
      {/* Left Side: SVG and Gradient Background */}
      <div className="flex-1 text-white flex flex-col items-center justify-center p-8 relative rounded-tl-[30px] rounded-br-[30px]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <img
            src={adminSVG}
            alt="SVG Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Side: Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Create Admin Account</h2>

          {/* Admin Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Branch Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Branch</label>
              <select
                name="branch"
                value={branch}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="all">All</option>
              </select>
            </div>

            {/* Role is hardcoded for admin */}
            <input type="hidden" name="role" value="admin" />

            {error && <div className="text-red-500 mb-4">{error}</div>} {/* Show error if any */}
            
            <div className="mt-6">
              <button
                type="submit"
                className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                disabled={loading}  // Disable button while loading
              >
                {loading ? 'Registering...' : 'Sign Up'}
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                  {' '}Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* ToastContainer to show toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default AdminReg;
