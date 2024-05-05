import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCog, faFileAlt, faFolderBlank, faCircleChevronDown, faSearch, faTimes, faCancel, faClose } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import './slider.css';
import { Link } from 'react-router-dom';

// Popup form component for Rent Room
function RentRoomPopup({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    
    <div style={{marginTop: "130px",width:"827px",paddingLeft:"-777px",marginLeft:"60px"}} className="popup">
      
      <div style={{width: "107%",border:"1.5px solid #e2e2e2",marginLeft:"-8px"}} id='mainnn' className='main-container'>
            <div className='custom-frame-1'>
                <span className='custom-rent-room'>Rent Room</span>
                <FontAwesomeIcon style={{marginTop:"-62px",marginLeft:"810px"}} onClick={onClose} className='icon' icon={faClose} />
                <div className='custom-frame-2'>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>First Name</span>
                            <input className='custom-frame-5' placeholder='Maxewell' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Last Name</span>
                            <input className='custom-frame-5' placeholder='Maxewell' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Nationaity</span>
                            <input className='custom-frame-5' placeholder='Swizerland' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Date Of Birth</span>
                            <input className='custom-frame-5' placeholder='14.6.1999' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Phone Number</span>
                            <input className='custom-frame-5' placeholder='+4176767868' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>E-Mail</span>
                            <input className='custom-frame-5' placeholder='abc@gmail.com' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>ID-Number</span>
                            <input className='custom-frame-5' placeholder='MGS-886876' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Company</span>
                            <input className='custom-frame-5' placeholder='Testing Company' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Check In</span>
                            <input type='date' className='custom-frame-5' placeholder='MGS-886876' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div className='custom-frame-4'>
                            <span className='custom-first-name'>Check Out</span>
                            <input className='custom-frame-5' placeholder='-' />
                        </div>
                    </div>
                    <div className='custom-frame-3'>
                        <div  className='custom-frame-4'>
                            <span className='custom-first-name'>Property</span>
                            <select className='custom-frame-5' id="">
                                <option value="">Hagwistrass 2</option>
                                <option value="">abc</option>
                                <option value="">abc</option>
                                <option value="">abc</option>
                            </select>
                        </div>
                    </div>
                    <div className='custom-frame-3d'>
                        <div className='custom-frame-3e'>
                            <span className='custom-room'>Room</span>
                            <select  className='custom-frame-3f' id="">
                                <option className='custom-number-2' value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                    </div>
                    <div className='custom-frame-3d'>
                        <div className='custom-frame-3e'>
                            <span className='custom-room'>Room</span>
                            <select  className='custom-frame-3f' id="">
                                <option className='custom-number-2' value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div className='custom-frame-48'>
                <div className='custom-rectangle' />
                <div className='custom-frame-49'>
                    <button className='custom-frame-4a'>
                        <span className='custom-rent'>Rent</span>
                    </button>
                    <button onClick={onClose} className='custom-frame-4b'>
                        <span className='custom-cancel'>Cancel</span>
                    </button>
                    <div className='custom-frame-4c'>
                        <div className='custom-frame-4d'>
                            <span className='custom-text-4e'> </span>
                        </div>
                    </div>
                    <button style={{marginLeft:"198px"}} className='custom-frame-4f'>
                        <div className='custom-frame-50'>
                            <div className='custom-frame-51'>
                                <span className='custom-price'>999 CHF</span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

      </div>
      </>
  );
}

function Sidebar() {
  const [submenus, setSubmenus] = useState({
    rental: false,
    accounting: false,
    properties: false,
    employees: false,
  });

  const [showRentRoomPopup, setShowRentRoomPopup] = useState(false);

  const toggleSubmenu = (menu) => {
    setSubmenus({ ...submenus, [menu]: !submenus[menu] });
    if (menu === 'rental') {
      setShowRentRoomPopup(false); // Close the popup when clicking on "Rent Room" again
    }
  };

  const [activeSubmenuItem, setActiveSubmenuItem] = useState('');

  const handleSubmenuItemClicked = (item) => {
    setActiveSubmenuItem(item);
  };

  return (
    <>
      <div style={{ height: "13vh", width: "19%", backgroundColor: "#d2e1ff", marginTop: "-9px" }}></div>
      <div className="sidebar">
        <br />
        <div className='rental' onClick={() => toggleSubmenu('rental')}>
          <p> <FontAwesomeIcon className='icon' icon={faCog} /> &nbsp;Rental</p>
          <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faAngleDown} />
        </div>
        {submenus.rental && (
          <div className="submenu">
            <a className={`submenu-item ${activeSubmenuItem === 'overview' ? 'active' : ''}`} href='/' onClick={() => handleSubmenuItemClicked('overview')}>Overview</a><br />
            <Link to='/' style={{cursor:"pointer"}} className={`submenu-item ${activeSubmenuItem === 'rentRoom' ? 'active' : ''}`} onClick={() => { handleSubmenuItemClicked('rentRoom'); setShowRentRoomPopup(true); }}>Rent Room</Link><br />
            <Link className={`submenu-item ${activeSubmenuItem === 'viewCustomer' ? 'active' : ''}`} to='/ViewCustomer' onClick={() => handleSubmenuItemClicked('viewCustomer')}>View Customer</Link><br />
            <Link className={`submenu-item ${activeSubmenuItem === 'policeReport' ? 'active' : ''}`} to='/PoliceReport' onClick={() => handleSubmenuItemClicked('policeReport')}>Police Report</Link>
          </div>
        )}
        <br />
        <div className='accounting' onClick={() => toggleSubmenu('accounting')}>
          <p> <FontAwesomeIcon className='icon' icon={faFileAlt} /> &nbsp;Accounting</p>
          <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faAngleDown} />
        </div>
        {submenus.accounting && (
          <div className="submenu">
            <a href='#' className={`submenu-item ${activeSubmenuItem === 'bookkeeping' ? 'active' : ''}`} onClick={() => handleSubmenuItemClicked('bookkeeping')}>BookKeeping</a><br />
          </div>
        )}
        <br />
        <div className='properties' onClick={() => toggleSubmenu('properties')}>
          <p>  <FontAwesomeIcon className='icon' icon={faFolderBlank} /> &nbsp;Properties</p>
          <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faAngleDown} />
        </div>
        {submenus.properties && (
          <div className="submenu">
            <a href='#' className={`submenu-item ${activeSubmenuItem === 'viewProperties' ? 'active' : ''}`} onClick={() => handleSubmenuItemClicked('viewProperties')}>View Properties</a><br />
          </div>
        )}
        <br />
        <div className='employees' onClick={() => toggleSubmenu('employees')}>
          <p> <FontAwesomeIcon className='icon' icon={faCircleChevronDown} />&nbsp;Employees</p>
          <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faAngleDown} />
        </div>
        {submenus.employees && (
          <div className="submenu">
            <a href='#' className={`submenu-item ${activeSubmenuItem === 'viewEmployees' ? 'active' : ''}`} onClick={() => handleSubmenuItemClicked('viewEmployees')}>View Employees</a><br />
          </div>
        )}
      </div>
    
   
      <Link to='/Login' style={{ marginTop: "-32px", marginLeft: "3%", color: "#295fff", fontSize: "17.5px", fontFamily: "sans-serif" }} className='submenu-item'>Log Out</Link>
      {showRentRoomPopup && <RentRoomPopup onClose={() => setShowRentRoomPopup(false)} />}
    </>
  );
}

export default Sidebar;
