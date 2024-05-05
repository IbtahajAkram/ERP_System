import React from 'react'
import Slider from './Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faSearch } from '@fortawesome/free-solid-svg-icons';
import './overview.css';


const Overview = () => {
  return (
    <>
      <div  className="overview-wrapper">
        <div style={{ height: "1vh" }} className="slider-container">
          <Slider />
        </div>
        <div className="title">
          <div style={{marginLeft:"-29px", marginTop: "-8px", backgroundColor: "white",width:"106%", padding: " 13px 44px" }} >
            <p>Rental<FontAwesomeIcon id='icon' icon={faAngleRight} /><span className='menus'>Overview</span> </p>
          </div>
          <br />
          <h1 style={{marginLeft:"-2px"}}>Overview</h1>
          <div ><p style={{display:"flex"}}><input style={{marginLeft: "-2px", border: "1px solid #1d53f6", width: "104.1%",padding:"15px", borderRadius: "9px", paddingLeft: "38px",fontSize:"15px"}} type="text" placeholder='Search for Property' /><FontAwesomeIcon  style={{marginLeft:"-109%",marginTop:"15px"}} id='icon' icon={faSearch} /></p></div>
          <br />

    <div className='main-container' id="mainCot">
      <div className='frame-1'>
        <div className='frame-2'>
          <span className='property'>Property</span>
          <span className='room'>Room</span>
          <span className='customer'>Customer</span>
          <span className='phone'>Phone</span>
          <span className='status'>Status</span>
          <span className='check-in'>Check In</span>
          <span className='check-out'>Check Out</span>
          <span className='actions'>Actions</span>
        </div>
        <div className='frame-3'>
          <div className='frame-4'>
            <div className='frame-5'>
              <div className='frame-6'>
                <span className='hadwigstrasse'>Hadwigstrasse 6</span>
              </div>
              <div className='frame-7'>
                <span className='number'>9</span>
              </div>
              <div className='frame-8'>
                <span className='dash'>-</span>
              </div>
              <div className='frame-9'>
                <span className='dash-a'>-</span>
              </div>
              <div className='frame-b'>
                <button className='basic-gray'>
                  <span className='text'>Free</span>
                </button>
              </div>
              <div className='frame-c'>
                <span className='dash-d'>-</span>
              </div>
              <div className='frame-e'>
                <span className='dash-f'>-</span>
              </div>
              <button className='frame-10'>
                <div className='frame-11'>
                  <span className='rent'>Rent</span>
                </div>
              </button>
            </div>
            <div className='rectangle' />
          </div>
          <div className='frame-12'>
            <div className='frame-13'>
              <div className='frame-14'>
                <span className='hadwigstrasse-15'>Hadwigstrasse 6</span>
              </div>
              <div className='frame-16'>
                <span className='number-17'>8</span>
              </div>
              <div className='frame-18'>
                <span className='test-name'>Test Name</span>
              </div>
              <div className='frame-19'>
                <span className='plus-phone-number'>+41 733 23 12</span>
              </div>
              <div className='frame-1a'>
                <button className='basic-gray-1b'>
                  <span className='text-cleaning'>Cleaning</span>
                </button>
              </div>
              <div className='frame-1c'>
                <span className='date'>12.01.2024</span>
              </div>
              <div className='frame-1d'>
                <span className='date-1e'>20.03.2024</span>
              </div>
              <button className='frame-1f'>
                <div className='frame-20'>
                  <span className='change-status'>Change Status</span>
                </div>
              </button>
            </div>
            <div className='rectangle-21' />
          </div>
          <div className='frame-22'>
            <div className='frame-23'>
              <div className='frame-24'>
                <span className='lowengarten'>Löwengarten 13</span>
              </div>
              <div className='frame-25'>
                <span className='number-1'>1</span>
              </div>
              <div className='frame-26'>
                <span className='test-name-27'>Testt Name</span>
              </div>
              <div className='frame-28'>
                <span className='plus-phone-number-29'>+41 733 23 13</span>
              </div>
              <div className='frame-2a'>
                <button className='basic-gray-2b'>
                  <span className='text-booked'>Booked</span>
                </button>
              </div>
              <div className='frame-2c'>
                <span className='date-2d'>24.03.2024</span>
              </div>
              <div className='frame-2e'>
                <span className='date-2f'>12.04.2024</span>
              </div>
              <div className='frame-30'>
                <button className='frame-31'>
                  <span className='invoice'>Invoice</span>
                </button>
                <button className='frame-32'>
                  <span className='check-out-33'>Check Out</span>
                </button>
              </div>
            </div>
            <div className='rectangle-34' />
          </div>
          <div className='frame-35'>
            <div className='frame-36'>
              <div className='frame-37'>
                <span className='lowengarten-38'>Löwengarten 13</span>
              </div>
              <div className='frame-39'>
                <span className='number-5'>5</span>
              </div>
              <div className='frame-3a'>
                <span className='dash-3b'>-</span>
              </div>
              <div className='frame-3c'>
                <span className='dash-3d'>-</span>
              </div>
              <div className='frame-3e'>
                <button className='basic-gray-3f'>
                  <span className='text-free'>Free</span>
                </button>
              </div>
              <div className='frame-40'>
                <span className='dash-41'>-</span>
              </div>
              <div className='frame-42'>
                <span className='dash-43'>-</span>
              </div>
              <button className='frame-44'>
                <div className='frame-45'>
                  <span className='rent-46'>Rent</span>
                </div>
              </button>
            </div>
            <div className='rectangle-47' />
          </div>
          <div className='frame-48'>
            <div className='frame-49'>
              <div className='frame-4a'>
                <span className='lowengarten-4b'>Löwengarten 13</span>
              </div>
              <div className='frame-4c'>
                <span className='text-2b'>2</span>
              </div>
              <div className='frame-4d'>
                <span className='dash-4e'>-</span>
              </div>
              <div className='frame-4f'>
                <span className='dash-50'>-</span>
              </div>
              <div className='frame-51'>
                <button className='basic-gray-52'>
                  <span className='text-free-53'>Free</span>
                </button>
              </div>
              <div className='frame-54'>
                <span className='dash-55'>-</span>
              </div>
              <div className='frame-56'>
                <span className='dash-57'>-</span>
              </div>
              <button className='frame-58'>
                <div className='frame-59'>
                  <span className='rent-5a'>Rent</span>
                </div>
              </button>
            </div>
            <div className='rectangle-5b' />
          </div>
          <div className='frame-5c'>
            <div className='frame-5d'>
              <div className='frame-5e'>
                <span className='balsamerstrasse'>Balsamerstrasse 5</span>
              </div>
              <div className='frame-5f'>
                <span className='text-33'>8</span>
              </div>
              <div className='group-11'>
                <span className='test-name-60'>Test Name</span>
              </div>
              <div className='frame-61'>
                <span className='plus'>+41 733 23 12</span>
              </div>
              <div className='frame-62'>
                <button className='basic-gray-63'>
                  <span className='text-cleaning-64'>Cleaning</span>
                </button>
              </div>
              <div className='frame-65'>
                <span className='date-66'>12.01.2024</span>
              </div>
              <div className='frame-67'>
                <span className='date-68'>20.03.2024</span>
              </div>
              <button className='frame-69'>
                <div className='frame-6a'>
                  <span className='change-status-6b'>Change Status</span>
                </div>
              </button>
            </div>
            <div className='rectangle-6c' />
          </div>
          <div className='frame-6d'>
            <div className='frame-6e'>
              <div className='frame-6f'>
                <span className='balsamerstrasse-70'>Balsamerstrasse 5</span>
              </div>
              <div className='frame-71'>
                <span className='number-72'>2</span>
              </div>
              <div className='frame-73'>
                <span className='testt-name'>Testt Name</span>
              </div>
              <div className='frame-74'>
                <span className='plus-75'>+41 733 23 13</span>
              </div>
              <div className='frame-76'>
                <button className='basic-gray-77'>
                  <span className='text-reserved'>Reserved</span>
                </button>
              </div>
              <div className='frame-78'>
                <span className='date-79'>24.03.2024</span>
              </div>
              <div className='frame-7a'>
                <span className='dash-7b'>-</span>
              </div>
              <div className='frame-7c'>
                <button className='frame-7d'>
                  <span className='invoice-7e'>Invoice</span>
                </button>
                <button  className='frame-7f'>
                  <span style={{color:"white"}} className='invoice-7e'>Check In</span>
                </button>
              </div>
            </div>
            <div className='rectangle-81' />
          </div>
          <div className='frame-82'>
            <div className='frame-83'>
              <div className='frame-84'>
                <span className='balsamerstrasse-85'>Balsamerstrasse 5</span>
              </div>
              <div className='frame-86'>
                <span className='span'>1</span>
              </div>
              <div className='div'>
                <span className='span-87'>Testt Name</span>
              </div>
              <div className='div-88'>
                <span className='span-89'>+41 733 23 13</span>
              </div>
              <div style={{height:"5vh"}} className='div-8a'>
                <button style={{height:"5vh"}} className='button'>
                  <span style={{marginLeft:"-15px"}}  className='span-8b'>Booked</span>
                </button>
              </div>
              <div className='div-8c'>
                <span className='span-8d'>24.03.2024</span>
              </div>
              <div className='div-8e'>
                <span className='span-8f'>-</span>
              </div>
              <div className='div-90'>
                <button className='button-91'>
                  <span className='span-92'>Invoice</span>
                </button>
                <button className='button-93'>
                  <span className='span-94'>Check Out</span>
                </button>
              </div>
            </div>
            <div className='div-95' />
          </div>
          <div className='div-96'>
            <div className='div-97'>
              <div className='div-98'>
                <span className='span-99'>Balsamerstrasse 5</span>
              </div>
              <div className='div-9a'>
                <span className='span-9b'>3</span>
              </div>
              <div className='div-9c'>
                <span className='span-9d'>-</span>
              </div>
              <div className='div-9e'>
                <span className='span-9f'>-</span>
              </div>
              <div className='div-a0'>
                <button className='button-a1'>
                  <span className='span-a2'>Free</span>
                </button>
              </div>
              <div className='div-a3'>
                <span className='span-a4'>-</span>
              </div>
              <div className='div-a5'>
                <span className='span-a6'>-</span>
              </div>
              <button className='button-a7'>
                <div className='div-a8'>
                  <span className='span-a9'>Rent</span>
                </div>
              </button>
            </div>
            <div className='div-aa' />
          </div>
        </div>
      </div>
    </div>

        </div>
        
      </div>
      <br />

    </>
  )
}

export default Overview