import React from 'react'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = (event) => {
        event.preventDefault();
        
        if (email.trim() === "" || password.trim() === "") {
            toast.error("Both fields are required.");
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        
        toast.success("Login successful!");
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
                
                <form className="mt-4" onSubmit={validateForm}>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-[#71B743] focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-[#71B743] focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    
                    <div className="flex items-center justify-center mt-4">
            
                        <a href="#" className="text-sm text-[#71B743] hover:underline">Forgot password?</a>
                    </div>
                    
                    <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-[#71B743] rounded-md hover:bg-opacity-90">
                        Login
                    </button>
                </form>
                
                
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        </div>
  )
}

export default AdminLogin
