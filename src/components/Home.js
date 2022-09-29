import React from 'react';
import homeillust from '../assets/images/undraw_my_files_swob.svg';
import tibeb from '../assets/images/tibeb2.png';
import './style/Home.css';

export const Home = () => {
    return (
        <div className='container bg-white py-3'>

            <div className='row py-5'>
                <img src={tibeb} alt="tibeb" height={150} className="hometibeb"/>
            
                <div className='col-12 col-md-6 mt-5'>
                    <img src={homeillust} alt='drive' className='img-fluid mt-3 pe-5 homeillust'/>
                </div>

                <div className='col-12 col-md-6 py mt-5 pb-5'>
                    <h1 className='text-black' style={{fontSize:'40px'}}>Welcome to Google Drive Clone</h1>
                    <p className='text-secondary mt-4' style={{fontSize:'18px'}}>Store, share and access your files from anywhere</p>
                    <p className='text-secondary' style={{fontSize:'18px'}}>Create an Account to get a free Cloud storage</p>
                    <button type='submit' className='border-0 rounded px-3 py-2 text-white mt-4 w-50' style={{backgroundColor:'#FF8800'}}>Get Started</button>
                </div>
            </div>

        </div>
    );
}