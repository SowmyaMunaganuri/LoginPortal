import React, {Fragment, useState} from 'react';
import Home from './Home';
import {Link} from 'react-router-dom'

const Login = () => { 
    const [formData, setFormData]= useState({
      email:'',
      password:'',
    });
    const {email,password}=formData;
    
    const onChange= e =>setFormData({...formData,[e.target.name]:e.target.value});
    return ( 
    <Fragment>
        <section className="landing-inner">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form">
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} 
          onChange={e=>onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} 
          onChange={e=>onChange(e)}
          required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" onClick={<Link to={Home}/>}/>
      </form>
      </section>
    </Fragment>
    );
};


export default (Login);
