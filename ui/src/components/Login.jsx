import {React, useRef} from 'react'
import '../js/login'

const Login = () => {
    // useref to make the login/signup buttons
    const formContainerRef = useRef()
    function toggleFormContainer() {
        formContainerRef.current.classList.toggle("active")
    }

  return (
    <main id='login-out'>
        <section   className="log-in-out">
            <div   className="section-wrapper">
            {/* <!-- main forms container --> */}
                <div  className="main-container">

                {/* <!-- the box that displays the signing options --> */}
                    <div  className="signing-info-wrapper">
                        <div  className="signing-info-box signin signin-info-box">
                            <h3>already have an account?</h3>
                            <button  className="signin-btn" onClick={toggleFormContainer} aria-label="already have an account, Log in instead">sign in</button>
                        </div>
                        <div  className="signing-info-box signup-info-box">
                            <h3>don't have an account?</h3>
                            <button  className="signup-btn" onClick={toggleFormContainer} aria-label="don't have an account, sign up instead">sign up</button>
                        </div>
                    </div>
                    {/* <!-- end of the box that displays the signing options --> */}
                    {/* <!-- the main signing form box --> */}
                    <div  className="signing-form-box" id='signing-form-box' ref={formContainerRef}>
                        <div  className="signing-form signin-form" id='signin-form'>
                            {/* <!-- the signin form --> */}
                            <form>
                                <h4 id="title">sign in form</h4>
                                <input type="text" placeholder="username" required/>
                                <input type="password" placeholder="password" required/>
                                <button type='submit'>sign in</button>
                            </form>
                            {/* <!-- end of the signin form --> */}
                        </div>
                        <div  className="signing-form signup-form">
                            {/* <!-- the signup form --> */}
                            <form>
                                <h4 id="title">sign up form</h4>
                                <input type="text" placeholder="username" required/>
                                <input type="email" placeholder="email" required/>
                                <input type="password" placeholder="password" required/>
                                <input type="password" placeholder="confirm password" required/>
                                <button type='submit'>Sign up</button>
                            </form>
                            {/* <!-- end of the signup form --> */}
                        </div>
                    </div>
                    {/* <!-- end of the main signing form box --> */}

                </div>
                {/* end of main forms container */}
            </div>
        </section>
    </main>
    
  )
}

export default Login