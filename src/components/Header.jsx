import React from 'react';
const Header = () => {
 
    return (
        <div>
        <div className="header">
            <img src='./images/waling.png' alt="Logo" className="logo" />
            <div>
                <h2 className="title">वालिङ नगरपालिका</h2>
                <h4 className="subtitle">नगर कार्यपालिकाको कार्यलय</h4>
                <p className="sub-title">गण्डकी प्रदेश, नेपाल</p>
            </div>
            <div className="text">
                <h4>अपंगता मैत्री नागरीक बडापत्र</h4>
            </div>
            <div className="btn1">
                <button>
                    <img src="./images/note-24.png" alt="Logo" className="btn-logo" />
                    कार्यक्रम
                </button>
                <button>स्लाइड शो</button>
                <button>गृह प्रीस्ट</button>
            </div>
        </div>
        </div>
    );
};

export default Header;
