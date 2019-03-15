import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <ImageThumbnail />
            <div className='header-title-text'>
                <h3>Lambda School</h3>
                <span>@LambdaSchool</span>
                <span>•</span>
                <span>26 jan</span>
            </div>
            
        </div>
    )
}

export default HeaderTitle;