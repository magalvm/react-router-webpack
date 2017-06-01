import React from 'react';

import './Loader.css';

const Loader = (props) => {
    return (
        <div className="uil-ellipsis-container">
            <div className='uil-ellipsis-css'>
                <div className="ib">
                    <div className="circle">
                        <div></div>
                    </div>
                    <div className="circle">
                        <div></div>
                    </div>
                    <div className="circle">
                        <div></div>
                    </div>
                    <div className="circle">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Loader;