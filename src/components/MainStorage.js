import React from 'react';
import Mydrive from '../assets/images/network-drive.svg';
import Trash from '../assets/images/trash.svg';
import Storage from '../assets/images/storage.svg';

export const MainStorage = () => {
    return (   
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-3'>
                            <button className='btn text-white mt-3' style={{backgroundColor:'#FF9900'}}>
                            <span className='pe-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                            </span>
                            Upload a New file
                                </button>

                                <button className='btn bg-secondary text-white mt-3'>
                            <span className='pe-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                            <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                            <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            </span>
                            Create New folder
                                </button>

                            <div className='mt-1 ms-2'>
                            <button className='btn text-secondary mt-3'>
                            <img src={Mydrive} alt='mydrive' width='20' height='20'/>
                            <p className='d-inline ps-2'>My Drive</p>
                            </button>
                            </div>
                            
                            <div className='mt-2 me-4'>
                            <button className='btn text-secondary'>
                            <img src={Trash} alt='Trash' width='20' height='20' className='me-2'/>
                            Trash
                            </button>
                            </div>

                            <div className='mt-2 me-2 ms-1'>
                            <button className='btn text-secondary'>
                            <img src={Storage} alt='Storage' width='20' height='20' className='me-2'/>
                           Storage
                            </button>
                            </div>

                            <div className='mt-2 me-2 ms-1 w-75 text-center'>
                            <div class="progress">
                              <div class="progress-bar w-50" style={{backgroundColor:'#FF9900'}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className='text-secondary mt-2'>
                            75MB used of 150MB
                            </div>
                            </div>

                            <div className='mt-2 me-2'>
                            <button className='btn text-secondary'>
                            <img src={Trash} alt='Trash' width='20' height='20' className='me-2'/>
                            Delete
                            </button>
                            </div>

                            <div className='mt-2 me-1'>
                            <button className='btn text-secondary'>
                            <img src={Trash} alt='Trash' width='20' height='20' className='me-2'/>
                            Move
                            </button>
                            </div>

                </div> 
            </div>   
        </div>
    );
}
