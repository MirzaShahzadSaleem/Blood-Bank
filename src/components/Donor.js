import React, {useState} from 'react';
import Heading from './heading';
import Topbar from './Topbar';
import "firebase/compat/firestore"
import db from '../firebase';
import './Donor.css';

function Donor(){
    const [allDocs,setAllDocs]=useState([]);
    const database = db.firestore();

    function fetchAll(e){
        e.preventDefault();
        database.collection("donorInfo")
        .get()
        .then((snapshot)=>{
            if(snapshot.docs.length>0){
                snapshot.docs.forEach((doc)=>{
                    setAllDocs((prev)=>{
                        return[...prev,doc.data()];
                    });
                });
            }
        });
        console.log(allDocs);
    }

    return(
        <div>
        <Topbar />
        <div>
        <h1> Fetching Data </h1>

        <button className='button' onClick={fetchAll}>Show donor</button>
        </div>
        <table className="table">
        
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Gender</th>
                        <th>Weight</th>
                        <th>Contact</th>
                        <th>City</th>
                        
                    </tr>
                </thead>
               {allDocs.map((v) => {
                    return (<tbody >
                        <tr>
                            <td>{v.donorName}</td>
                            <td>{v.donorAge}</td>
                            <td>{v.donorBloodGroup}</td>
                            <td>{v.donorGender}</td>
                            <td>{v.donorWeight}</td>
                            <td>{v.donorContact}</td>
                            <td>{v.donorCity}</td>
                        </tr>
               
                    </tbody>
                    )
               })
                
                }

            </table>
            </div>
    )
}

export default Donor;