import React, { useState,  useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import "../styles/SlidingLogin.scss";
// COMPONENT: Modal

const Modal = ({ show, setShow, content }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false);
    }
  };
  
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  
  return (
    <section className={`overlay ${show && 'show'}`} onClick={() => setShow(false)}>
      <section className={`modal ${show && 'show'}`} onClick={(e) => e.stopPropagation()}>
        <p style={{ fontWeight: '600' }}>{content}</p>
        <p>Check out <a href="https://joeyimlay.dev">joeyimlay.dev</a>.</p>
        <button onClick={() => setShow(false)}>
          Close
        </button>
      </section>
    </section>
  );
}

// COMPONENT: SocialIcons

const SocialIcons = ({ handleClick }) => (
  <section className="social-icons">
    
    <button
      className="icon"
      type="button"
      onClick={() => handleClick("You're authorised with Google.")}
    >
      <i className="fa-brands fa-google"></i>
    </button>
    
    <button
      className="icon"
      type="button"
      onClick={() => handleClick("You're authorised with Facebook.")}
    >
      <i className="fa-brands fa-facebook-f"></i>
    </button>
    
    <button
      className="icon"
      type="button"
      onClick={() => handleClick("You're authorised with Microsoft.")}
    >
      <i className="fa-brands fa-microsoft"></i>
    </button>
    
    <button
      className="icon"
      type="button"
      onClick={() => handleClick("You're authorised with Amazon.")}
    >
      <i className="fa-brands fa-amazon"></i>
    </button>
    
  </section>
);

// COMPONENT: SlidingLogin

const SlidingLogin = () => {
    const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  
  const passwordRegex = new RegExp(/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
  
  const signupSchema = z.object({
    signupName: string().min(1, { message: 'Name must be at least 1 character.' }),
    signupEmail: string().email({ message: 'Email address is invalid.' }),
    signupPassword: string().regex(passwordRegex, { message: 'Passwords require 8+ characters, one number and one special character.' }),
    signupConfirm: string().min(8)
  }).superRefine(({ signupConfirm, signupPassword }, ctx) => {
  if (signupConfirm !== signupPassword) {
    ctx.addIssue({
      code: "custom",
      message: "Passwords do not match."
    });
  }
});
  
  const loginSchema = z.object({
    loginEmail: string().email({ message: 'Email address is invalid.' }),
    loginPassword: string().regex(passwordRegex, { message: 'Passwords require 8+ characters, one number and one special character.' })
  });
  
  const useRegisterForm = (schema) => {
    const { register, formState, handleSubmit } = useForm({ resolver: zodResolver(schema)});
    return { register, formState, handleSubmit };
  }
  
  const forms = {
    signup: useRegisterForm(signupSchema),
    login: useRegisterForm(loginSchema)
  }
  

  const handleClick = (msg) => {
    setModalContent(msg);
    setShowModal(true);
  }
  
  const handleSignup = () => {
    handleClick("Thanks for signing up!");
    setTimeout(() => {
      navigate("/dashboard"); // Navigate to the Dashboard page
    }, 1000); // Add a delay for the modal to display
  };
  
  const handleLogin = () => {
    handleClick("Successfully logged in!");
    setTimeout(() => {
      navigate("/dashboard"); // Navigate to the Dashboard page
    }, 1000); // Add a delay for the modal to display
  };

  return (
    <>
      <main
        className={showLogin && 'active'}
        id="container"
       >
         <section className="form-container create">
           <h2>Create your account</h2>
           <SocialIcons handleClick={handleClick} />
           <span>Alternatively, sign up via email:</span>
           
            <form onSubmit={forms.signup.handleSubmit(handleSignup)}>
              <input
                type="text"
                placeholder="Name"
                {...forms.signup.register('signupName')}
              />
              <input
                type="email"
                placeholder="Email"
                {...forms.signup.register('signupEmail')}
              />
              <input
                type="password"
                placeholder="Password"
                {...forms.signup.register('signupPassword')}
              />
              <input
                type="password"
                placeholder="Confirm password"
                {...forms.signup.register('signupConfirm')}
              />
              <button type="submit">
                Sign Up
              </button>
              
              <span className="error">
              {Object.values(forms.signup.formState.errors)[0] && (
                  `Error: ${Object.values(forms.signup.formState.errors)[0].message}`
              )}
              </span>
           </form>
           
         </section>

        <section className="form-container login">
          <h2>Log into your account</h2>
          <SocialIcons handleClick={handleClick} />
          <span>Alternatively, log in via email:</span>
          
          <form onSubmit={forms.login.handleSubmit(handleLogin)}>
            <input
              type="email"
              placeholder="Email"
              {...forms.login.register('loginEmail')}
            />
            <input
              type="password"
              placeholder="Password"
              {...forms.login.register('loginPassword')}
            />
            <button type="submit">
              Log In
            </button>
            <a
              onClick={() => handleClick("It's okay, we all forget things sometimes.")}
              className="forgot-password"
            >
              Forgot your password?
            </a>
            <span className="error">
              {Object.values(forms.login.formState.errors)[0] && (
                  `Error: ${Object.values(forms.login.formState.errors)[0].message}`
              )}
            </span>
          </form>
        </section>

        <section className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-create">
              <h1>Welcome back!</h1>
              <p>It's good to see you again.</p>
              <button
                className="toggle-button"
                onClick={() => setShowLogin(false)}
               >
                Sign up instead
              </button>
            </div>

            <div className="toggle-panel toggle-login">
              <h1>Hello there!</h1>
              <p>It's nice to meet you.</p>
              <button
                className="toggle-button"
                onClick={() => setShowLogin(true)}
               >
                Log in instead
              </button>
            </div>
          </div>
        </section>
      </main>
      <Modal
        show={showModal}
        setShow={setShowModal}
        content={modalContent}
       />
    </>
  )
} 
                
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<SlidingLogin />);