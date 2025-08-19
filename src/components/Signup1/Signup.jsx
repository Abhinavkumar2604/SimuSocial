import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (!email.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address");
      return;
    }
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      alert("Name must contain only letters and spaces");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, contain one uppercase letter, and one special character."
      );
      return;
    }

    // Store user data in localStorage
    const userData = { name, email };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Form submitted successfully!");
    navigate("/home"); // Navigate to home page after successful submission
  };

  return (
    <>
      <div className='container mt-4'>
        <h3>Sign Up Form</h3>
        <p className='fill'>Please fill in this form to create an account.</p>

        <form onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor='exampleInputName'>Full Name</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputName'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='form-group mb-3'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group mb-3'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small id='pswdHelp' className='form-text text-danger'>
              *must be atleast 6 letters long and contain any special characters
              and 1 Upper case letter
            </small>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
