import React from 'react';
import homeillust from '../assets/images/undraw_my_files_swob.svg';

export const Home = () => {
    return (
        <div className='container bg-white mt-4'>
           
            <div className='row border-bottom border-secondary pb-3'>
                <div className='col-12 col-md-10'>
                    <h1 className='text-secondary' style={{fontSize:'20px'}}>DRIVE 
                        <span style={{color:'#FF8800'}}> CLONE </span>
                    </h1>
                </div>
                <div className='col-12 col-md-2'>
                   <button type='submit' className='border-0 bg-white text-secondary'>Login</button>
                   <span className='px-2'>|</span>  
                   <button type='submit' className='border-0 rounded px-3 ms-2 py-1 text-white' style={{backgroundColor:'#FF8800'}}>Signup</button>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-12 col-md-8 mt-5 py-5'>
                    <h1 className='text-black' style={{fontSize:'40px'}}>Welcome to Google Drive Clone</h1>
                    <p className='text-secondary' style={{fontSize:'20px'}}>Store, share and access your files from anywhere</p>
                    <p className='text-secondary' style={{fontSize:'20px'}}>Create an Account to get a free Cloud storage</p>
                    <button type='submit' className='border-0 rounded px-3 py-1 text-white mt-3' style={{backgroundColor:'#FF8800'}}>Get Started</button>
                </div>
                <div className='col-12 col-md-4 mt-5'>
                    <img src={homeillust} alt='drive' className='img-fluid mt-5' />
                </div>
            </div>

        </div>
    );
}