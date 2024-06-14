import React, { useState } from 'react';
import './Register.css';

const generateCaptcha = () => {
  return Math.random().toString(36).substring(2, 8);
};

const Register = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());

  const handleSubmit = () => {
    // Simple validation to ensure all fields are filled and passwords match
    if (firstName && lastName && email && phone && password && confirmPassword && password === confirmPassword && otp && captcha === generatedCaptcha) {
      // Registration logic here
      alert('Registered successfully');
      // Clear the inputs after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      setOtp('');
      setCaptcha('');
      setGeneratedCaptcha(generateCaptcha());
    } else {
      alert('Please fill all fields correctly');
    }
  };

  const handleRefreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
  };

  return (
    <div className="containere">
      <h1>Register</h1>
      <div className="input-containere">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="captcha-container">
          <input
            type="text"
            placeholder="Enter Captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
          />
          <div className="captcha-code">{generatedCaptcha}</div>
          <button type="button" onClick={handleRefreshCaptcha}>Refresh Captcha</button>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>Already have an account? <button onClick={handleRegister} className="login-link">Login here!</button></p>
    </div>
  );
};

export default Register;
