'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import '../style/auth.css'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [submitError, setSubmitError] = useState('');

  return (
    <>
      <Navbar />
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-tabs">
            <div 
              className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`} 
              onClick={() => setActiveTab('login')}
            >
              Login
            </div>
            <div 
              className={`auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </div>
          </div>
          
          {/* 登录表单 */}
          <div className={`auth-form-container ${activeTab === 'login' ? 'active' : ''}`} id="login-form">
            <LoginForm submitError={submitError} setSubmitError={setSubmitError} />
          </div>
          
          {/* 注册表单 */}
          <div className={`auth-form-container ${activeTab === 'signup' ? 'active' : ''}`} id="signup-form">
            <SignupForm submitError={submitError} setSubmitError={setSubmitError} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}