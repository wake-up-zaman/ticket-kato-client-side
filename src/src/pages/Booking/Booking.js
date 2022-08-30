import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import './Booking.css'
import useFetch from '../../hooks/useFetch';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import axios from "axios";

const Booking = ({ setOpen, busId, item, travelDate }) => {
  const [selectSeats, setSelectSeats] = useState([])
  const [goingDate, setGoingDate] = useState(travelDate)
  const [busItem, setBusItem] = useState(item)

  const { data, loading, error, refetch } = useFetch(`https://hidden-stream-11117.herokuapp.com/buses/seats/${busId}`)
  // console.log("busSeats2", data)


  // const date1 = [format(travelDate, 'PP')];
  // console.log(date1);

  const newDate=travelDate.toISOString().split('T')[0]
  // console.log("newDate:",newDate)

  const newDateX=newDate + 'T00:00:00.000Z';
  // console.log("formattedDate:",newDateX)

  const isAvailable = (seatNumber) => {
    // console.log(seatNumber)
    // console.log(newDateX)
    console.log(seatNumber.length)
    seatNumber.unavailableDates.map(date=>{
        console.log(date);
    })
    const founded = seatNumber.unavailableDates.filter(a => newDateX.includes(a));
    console.log(founded.length);
    
    const isFound = seatNumber.unavailableDates.some((date =>
      newDateX.includes(date))

    )
    // console.log(isFound);
    return isFound;
  }


  const handleSelect = (e) => {
    const checked = e.target.checked
    console.log(checked);
    const value = e.target.value
    console.log(value)
    if(checked===true){
      setSelectSeats([...selectSeats, value])
    }
    else{
      setSelectSeats(selectSeats.filter(i => i !== value))
    }
    // setSelectSeats(checked
    //   ? [...selectSeats, newValue[0]]
    //   : selectSeats.filter((item) => item !== newValue)
    // );
  };
  console.log(selectSeats)

  const navigate = useNavigate();

  const handleClick = async () => {
    // console.log(selectSeats)
    try {
      await Promise.all(
        selectSeats.map((Id) => {
          const newValue = Id.split(",")
          console.log(newValue);
          console.log(newValue[2])
          // console.log("seatInfo:", seatId)
          // console.log("seatId:", seatId[2])
          const res = axios.put(`https://hidden-stream-11117.herokuapp.com/seats/availability/${newValue[2]}`, {
            dates: newDateX,
          });
          return res.data;
          // seatId.map((singleId) => {
          //   console.log("singleInfo:", singleId)
          //   // console.log("travel", newDateX)


          // })
        })
      );
      setOpen(false);
      navigate("/payment", { state: { selectSeats, goingDate, busItem } });
    } catch (err) { }
  };

  return (

    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose mt-2 mx-2 "
          onClick={() => setOpen(false)}
        />
        <span className='seatTitle'>Select Your Seats</span>

        <div className='rItem'>
          {data.map((item) => (
            <div className="" key={item._id}>
              <div className="rSelectRooms">
                {item.seatNumbers.map((seatNumber) => (
                  <div className="room">
                    <label className='seatName'>{seatNumber.seatName}</label>
                    <input
                      type="checkbox"
                      value={[seatNumber.seatName, " /", seatNumber._id]}
                      onChange={(e)=>handleSelect(e)}
                      disabled={isAvailable(seatNumber)}
                      className="chkBox"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Booking;