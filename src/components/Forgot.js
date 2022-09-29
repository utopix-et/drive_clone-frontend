import React, {useState} from 'react';
import illust from '../assets/images/illust.svg';
import './style/Login.css';

export default function Forgot() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleSubmit (e) {
       e.preventDefault();
       
       const defemail = "admin@gmail.com";
       const defpassword = "admin";

       if(email === defemail && password === defpassword) {
       alert(`Login Successfully!`);
       window.location.reload();
       }
       else {
       alert(`Invalid Credentials!`);
       }
}
    return (
    <div className='container text-center mt-3'>
         <div className='row bottomMargin'>
          
            <div className='col-sm-6 mt-5 illust-mobile'>
                <img src={illust} alt='illust' className='illustrator' width={500} height={500}/>
            </div>

            <div className='col-sm-6 mt-5 py-5'>
               <div className='header text-decoration-underline'>
                    <h4>Forgot</h4>
                </div>
                    <div>
                    <form className='w-100' onSubmit={handleSubmit}>
                        <input type='email' className='border border-secondary mt-5 p-2 mb-4 rounded' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} required/>
                        <button type='submit' className='btn text-white mt-4' style={{backgroundColor: '#FF9900'}}>Login</button> 
                    </form>
                    <div className='mt-4'>
                    <span className='mt-3'>Do you remember your password? <a href='#Login' className='text-decoration-none'>Login</a></span>
                   </div>
                    </div>
            </div>

            </div>

           
        </div>
    );
}