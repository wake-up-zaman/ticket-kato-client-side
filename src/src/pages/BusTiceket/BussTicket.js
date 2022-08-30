

import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useQueries, useQuery } from 'react-query';

import Search from '../pages/Searching/Search';
import './BussTiceket.css'

const BussTicket = () => {
  const [bus,setBus]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:88000/buses')
    .then(response => response.json())
    .then(datas =>setBus(datas))
  },[])
    const [hyundai, setHyundai] =useState(true);
    const [hino, setHino] =useState(true);
    const [ak1j, setAk1j] =useState(true);
    const [scania, setScania] =useState(true);
    const [Hanif, setHanif] =useState(true);

   
    const [ac,setAc] =useState(true);
 


   
    const {isLoading, error,data,refetch} = useQuery('todos', async () => {
      const res = await fetch('http://localhost:8800/buses');
      return res.json()})


      // Ac filtering function
         const handleAc=(key)=>{
          if(ac==true){
            const result =data.filter(word => 
              { return  word.bus_type===key 
            } 
              );
              setBus(result)
          }
         }

        //////////////////////////////  filtering with oparetor and class
        
        const handleChange=(datas,newData) =>{
          if(Hanif==true){
        
            const result =data.filter(word => 
              { return  word.operator_name===datas 
            } 
              );
              setBus(result)
          }


          //////////////// filrer by Bus type ////////////////////////
          if(datas==" Hyundai Universe")
          {
            if(hyundai==true){
              const result =data.filter(word => 
                { return  word.bus_class === datas
               
              } 
                );
                setBus(result)
            }
          }
          if(datas==" Hino 1J Pluss")
          {
            if(hino==true){
             console.log(data,"our value")
             const result = data.filter(word => 
               { return  word.bus_class===datas   
             }
               );
               setBus(result)
            }
       
          }
          if(datas=="AK1J Super Plus")
          {
            if(ak1j==true){
              console.log(data,"our value")
              const result = data.filter(word => 
                { return  word.bus_class===datas
                   
              }
                );
                setBus(result)
            }          
          }
          if(datas==" Scania")
          {
            if(scania==true){
              console.log(data,"our value")
              const result = data.filter(word => 
                { return  word.bus_class===datas
                   
              }
                );
                setBus(result) 
            }    
          }
        }
   
  
    return (
        <div className='busTiceket'>
         
            <div className='mt-5 pt-5'>
                <Search></Search>
              <div className='BusTicket'>
                <div className='filter'>
                <div>
                        <p>Buss Class</p>
                          <ul>
                            
                             <li><input type="checkbox" value={'Hyundai Universe'} onChange={()=>handleChange(" Hyundai Universe")} /> Hyundai Universe</li>
                             <li><input type="checkbox" value={'Hino 1J Pluss'} onChange={()=>handleChange(" Hino 1J Pluss")}/>  Hino 1J Pluss</li>
                             <li><input type="checkbox" value={'AK1J Super Plus'} onChange={()=>handleChange("AK1J Super Plus")}/>  AK1J Super Plus</li>
                             {/* <li><input type="checkbox" value={'Hyundai Universe'} onChange={()=>handleChange("Hyundai Universe")}/>  Hyundai Universe</li> */}
                             <li><input type="checkbox" value={'Scania'} onChange={()=>handleChange(" Scania")}/>  Scania</li>
                          </ul>
                      </div>
                      <div>
                        <p>Travel Oparators</p>
                          <ul>
                             <li><input type="checkbox"  value={'Hanif Enterprise'} onChange={()=>handleChange("Hanif Enterprise")}/>Hanif Enterprise</li>
                             <li><input type="checkbox" value={'Ena Transport (Pvt) Ltd'} onChange={()=>handleChange("Ena Transport (Pvt) Ltd")}/>  Ena</li>
                             <li> <input type="checkbox" value={'Shyamoli Paribahan'} onChange={()=>handleChange("Shyamoli Paribahan")} />  Shamoli</li>
                             <li><input type="checkbox" value={'Green Line Paribahan'} onChange={()=>handleChange("Green Line Paribahan")} />  GreenLine</li>
                             <li> <input type="checkbox" value={'Agomony Express'} onChange={()=>handleChange("Agomony Express")} />  Agomony Express</li>
                             <li> <input type="checkbox" value={'Soudia Coach Service'} onChange={()=>handleChange("Soudia Coach Service")} />Soudia Coach Service</li>
                             <li> <input type="checkbox" value={'Nabil Paribahan'} onChange={()=>handleChange("Nabil Paribahan")} />Nabil Paribahan</li>
                          </ul>
                      </div>
                      <div>
                      <h3>Bus type</h3>
                         <ul>
                         <li> <input type="checkbox" value={'AC Business'} onChange={()=>handleAc("AC Business")} />AC Business</li>
                         <li> <input type="checkbox" value={'AC'} onChange={()=>handleAc("AC")} />AC</li>
                             <li> <input type="checkbox" value={'Non AC'} onChange={()=>handleAc("Non AC")} />Non AC</li>
                         </ul>
                      </div>
                </div>
                <div className='Results'>
                 {/* data&&data     */}
                    {
                      bus.map(item=><div className='Each-bus'>
                      <div>
                        <p>Boarding Point: {item.boarding_point}</p>
                        <p>Bus Class: {item.bus_class}</p>
                        <p>Bus Type: {item.bus_type}</p>
                      </div>
                      <div>
                          <p>Coach Number: {item.coach_number}</p>
                          <p>Departure Time: {item.departure_time}</p>
                          <p>Dropping Point: {item.dropping_point}</p>
                      </div>
                      <div>
                      <p>Operator Name: {item.operator_name}</p>
                      <p>Price: {item.price}</p>
                      <p>Route: {item.route}</p>
                      <p></p>
                      </div>
                      <div>
                      <p>Arrival Time: {item.arrival_time}</p>
                      <p>Available Seats: {item.available_seats}</p>
                      <button className="btn bg-success m-2">Booking</button>
                      </div>
                </div>)
                    }
                </div>




        </div>
      </div>
    </div>
  );
};

export default BussTicket;
