import React from 'react';
import Slider from './Slider';
import './ViewCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil,faAngleRight,faSearch} from '@fortawesome/free-solid-svg-icons';


const PoliceReport = () => {
  // Sample customer data (replace with your actual data)
  const customers = [
    { ID_Number: 1, Firstname: 'John Doe', Lastname: 'Maxell', Nationality:'Switerzerland',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 2, Firstname: 'William', Lastname: 'Brorwn', Nationality:'Germany',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 3, Firstname: 'James', Lastname: 'Smith', Nationality:'Switerzerland',E_Mail:'abc@gmail.com',phone: '+123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 4, Firstname: 'Alexander', Lastname: 'Thomas', Nationality:'Australia',E_Mail:'abc@gmail.com',phone: '+123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 5, Firstname: 'Sophia', Lastname: 'Taylor', Nationality:'Canada',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 6, Firstname: 'Samuel', Lastname: 'Wilson', Nationality:'New York',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 7, Firstname: 'Charlotte', Lastname: 'Evans', Nationality:'America',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },
    { ID_Number: 8, Firstname: 'Amelia', Lastname: 'Wilson', Nationality:'China',E_Mail:'abc@gmail.com',phone: '123456780',Company:'Testing',Vechicle:"Fortuner",License_Plate:'SD67666' },

    // Add more customer objects as needed
  ];




  return (
   <>
   <div>
   <div style={{ marginTop: "-7px", width :"99%",backgroundColor: "white", padding: " 12px 44px",marginLeft:"229px" }} >
            <p style={{fontSize:"17.9px"}}>Rental <FontAwesomeIcon style={{fontSize: "18px",height:"3vh"}} className='icon' icon={faAngleRight} /><span className='menus'> Police Report</span> </p>
          </div>
          <div style={{marginTop:"-83px",height:"136vh"}}>
      <Slider/>
      </div>
      <br /><br />
      <br />
      <div className='MainCustomPage'  >
      <h1>Police Report</h1>
     
      <div className='mainCustm'><br />
      <p style={{fontSize:"18px",fontFamily:"sans-serif",marginLeft:"29px"}}>All Customer</p>
      <div style={{marginTop:"-39px"}}>
            
            <button style={{backgroundColor:"#4060ff",padding:"12px 21px",marginLeft:"90.3%",color:"white",cursor:"pointer"}} className='Downloadb' > Add + </button>
          </div>
    <br />
      <div><p style={{display:"flex"}}><input style={{marginLeft: "28px", border: "1px solid #1d53f6", width: "90.4%",padding:"15px", borderRadius: "9px", paddingLeft: "36px",fontSize:"15px"}} type="text" placeholder='Search for Property' /> <FontAwesomeIcon style={{marginLeft:"-93.6%",marginTop:"15px"}}  icon={faSearch} /></p></div>

      <table style={{marginLeft:"-33px"}}>
        <thead >
          <tr>
            <th>ID_Number</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Nationality</th>
            <th>E_Mail</th>
            <th>phone</th>
            <th>Company</th>
            <th>Vechicle</th>
            <th>License_Plate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.ID_Number}</td>
              <td>{customer.Firstname}</td>
              <td>{customer.Lastname}</td>
              <td>{customer.Nationality}</td>
              <td>{customer.E_Mail}</td>
              <td>{customer.phone}</td>
              <td>{customer.Company}</td>
              <td>{customer.Vechicle}</td>
              <td>{customer.License_Plate}</td>
              <td style={{color:"#4271ff"}}>
              <FontAwesomeIcon icon={faPencil}  />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    <br />
    <div style={{ backgroundColor: "white", height: "13vh", width: "99.5%", marginLeft: "20%", borderRadius: "14px", display: "flex", justifyContent: "space-between", padding: "1px 22px", alignItems: "center", color: "#3758ff" }}>
            
            <span className='Downloadb' >Downlaod</span>
          </div>
    </div>
 
    </>
  );
};

export default PoliceReport;
