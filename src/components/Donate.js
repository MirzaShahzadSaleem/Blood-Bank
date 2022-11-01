import React from "react";
import "firebase/compat/firestore"
import './Donate.css'
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../../context/UserAuthContext";
// import { Link} from "react-router-dom";
import Topbar from "./Topbar";
import InputField from "./input";
import RadioBtn from "./radio_btn";
import SelectField from "./selectField";
import db from '../firebase';

class GetValue extends React.Component {
    constructor(props) {
          super(props);
          this.submitHandler = this.submitHandler.bind(this);

           
          this.state = {
               donorInfo: {},
               a : [],
              donorsInfo: []
             
          }
        
    }
    submitHandler(e) {
        e.preventDefault();
        let donorInfo = {
            donorName: this.refs.donor_name.state.value,
            donorAge: this.refs.donor_age.state.value,
            donorWeight: this.refs.donor_weight.state.value,
            // donorCountry: this.refs.donor_country.state.value,
            donorCity: this.refs.donor_city.state.value,
            donorContact: this.refs.donor_contact.state.value,
            donorGender: this.refs.gender.state.selectedValue,
            donorBloodGroup: this.refs.blood_group.state.value,
            
        }
        
        const database = db.firestore();
        const userRef = database.collection("donorInfo").add({
            donorName: this.refs.donor_name.state.value,
            donorAge: this.refs.donor_age.state.value,
            donorWeight: this.refs.donor_weight.state.value,
            // donorCountry: this.refs.donor_country.state.value,
            donorCity: this.refs.donor_city.state.value,
            donorContact: this.refs.donor_contact.state.value,
            donorGender: this.refs.gender.state.selectedValue,
            donorBloodGroup: this.refs.blood_group.state.value,
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        //console.log(donorInfo);
        e.preventDefault();
      }
    
     
    render() {
  return (
    <div className="main">
    <Topbar />
    <div>
    <header>
    <h1>BECOME A DONOR</h1>
</header>
    </div>
    <div className="form">
    <form onSubmit={this.submitHandler}>
                <SelectField ref="blood_group" />                 
             <InputField htmlFor="name" ref="donor_name" defaultValue="n/a" type="text">Name</InputField>
             <InputField htmlFor="age" ref="donor_age" type="number" defaultValue="n/a">Age</InputField>
             <InputField htmlFor="Weight" ref="donor_weight" type="number" defaultValue="n/a">Weight</InputField>
             <InputField htmlFor="City" ref="donor_city" type="text" defaultValue="n/a">City</InputField>
             {/*<Input htmlFor="Country" ref="donor_country" type="text" >Country</Input>*/}
             <InputField htmlFor="contact" ref="donor_contact" type="number" defaultValue="n/a">Contact</InputField>
             <div>Gender</div>
             <RadioBtn name="gender" value1='Male' value2="Female" label1="male" label2="Female" title="Gender" ref="gender" />
             
             
              <button type="submit" onClick={this.submitHandler}> Submit Form</button>
         </form>
    </div>
      

      

    </div>
    
    // <div className="main" >
    // <h1>Blood Bank Application</h1>
    //   <div className="button">
    //     <button type="btn btn-primary">
    //       Donor
    //     </button>
    //   </div>
    // </div>
   



  //  <div className="logout">
  //  <button onClick={handleLogout}>
  //    Log out
  // <Link to="/donor">DONOR!</Link>
  //  </button>
  //  </div>
  
        
      
      
     
    
  );
};
}
export default GetValue;
