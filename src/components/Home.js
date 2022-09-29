import React from 'react';
import homeillust from '../assets/images/undraw_my_files_swob.svg';

export const Home = () => {
    return (
        <div className='container bg-white mt-4'>

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