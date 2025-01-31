import React from 'react';

const SignUp = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullName" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label>Role</label>
          <div>
            <input type="radio" name="role" value="patient" /> Patient
            <input type="radio" name="role" value="doctor" /> Doctor
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUp;
