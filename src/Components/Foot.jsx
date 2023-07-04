import React, { useContext } from 'react';
import { UserDataContext } from '../App';

function Foot() {
    const value = useContext(UserDataContext);
  return (
    <>
        <div className='container-fluid mt-5'>
        <div className='container-fluid my-5 px-5 fade-in'>
            <hr/>
        </div>
        <div className='container my-5 d-flex justify-content-between fade-in'>
                <div className='container text-start' >
                    <div className='fw-bold fs-4 text-capitalize'>
                        phone
                    </div>
                    <div>
                        {value.number}
                    </div>
                </div>
                <div className='container text-center'>
                    <div className='fw-bold fs-4 text-capitalize'>
                        email
                    </div>
                    <div>
                        {value.email}
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='container text-end'>
                    <div className='fs-6 text-capitalize'>
                        {`© 2023 By ${value.name}`}
                    </div>
                    <div>
                        Powerd by Netlify
                    </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default Foot