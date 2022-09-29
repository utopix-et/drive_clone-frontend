import React from "react";

export const Navbar = () => {
    return(

        <div className="container">
            
            <div className='row border-bottom border-secondary pb-3 bg-dark'>
                <div className='col-12 col-md-8 bg-white'>
                    <h1 className='text-secondary' style={{fontSize:'20px'}}>DRIVE 
                    <span style={{color:'#FF8800'}}> CLONE </span>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>

                <div className='col-12 col-md-4 bg-primary collapse navbar-collapse' id="navbarNav">
                    <button type='submit' className='border-0 bg-white text-secondary'>Login</button>
                    <span className='px-2'>|</span>  
                    <button type='submit' className='d-inline border-0 rounded py-1 text-white' style={{backgroundColor:'#FF8800'}}>Signup</button>
                </div>
            </div>

        </div>
    );
}
    /*
    <div className='container bg-white mt-4'>
           
    <div className='row border-bottom border-secondary pb-3'>
        <div className='col-12 col-md-8 bg-dark'>
            <h1 className='text-secondary' style={{fontSize:'20px'}}>DRIVE 
                <span style={{color:'#FF8800'}}> CLONE </span>
            </h1>
        </div>
        <div className='col-12 col-md-4 d-block'>
           <button type='submit' className='border-0 bg-white text-secondary'>Login</button>
           <span className='px-2'>|</span>  
           <button type='submit' className='d-inline border-0 rounded py-1 text-white' style={{backgroundColor:'#FF8800'}}>Signup</button>
        </div>
    </div>
    </div>
    );  
    }*/