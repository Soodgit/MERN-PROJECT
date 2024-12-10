import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  
  return (
    <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        Welcome to Jobify, where managing your job applications has never been easier. Whether you're actively job hunting or just exploring new opportunities, our platform helps you stay organized and in control. Keep track of every application, set reminders for follow-ups, and monitor your progress all in one place. Let us simplify the job search process for you, so you can focus on landing your dream job.
        </p>
        <Link to='/register' className='btn register-link'>Register</Link>
        <Link to='/login' className='btn'>Login/Demo-User</Link>
      </div>
      <img src={main} alt="job hunt" className='img main-img' />
    </div>
  </Wrapper>
  );
};


export default Landing