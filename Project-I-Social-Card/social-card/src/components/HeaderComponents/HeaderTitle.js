import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-title">
            <ImageThumbnail />
            
            <h3>Lambda School</h3>
            <span>@LambdaSchool</span>
            <span>•</span>
            <span>26 jan</span>
            
            <HeaderContent />
        </div>
    )
}

export default HeaderTitle;