import React, { useEffect, useState } from 'react';
import './Search.css';

import { DatePicker } from 'antd';
import "antd/dist/antd.css";

import axios from 'axios';
import moment from 'moment';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from "react-router-dom";

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const Bus = () => {
    const [districts, setDistricts] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])
    const [districts2, setDistricts2] = useState([]);
    const [text2, setText2] = useState('');
    const [suggestions2, setSuggestions2] = useState([])
    useEffect(() => {
        const loadDistricts = async () => {
            const response = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            // console.log(response.data.data);
            setDistricts(response.data.data)
        }
        loadDistricts();
    }, [])
    useEffect(() => {
        const loadDistricts2 = async () => {
            const response = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            // console.log(response);
            setDistricts2(response.data.data)
        }
        loadDistricts2();
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = districts.filter(district => {
                // console.log(district)
                const regex = new RegExp(`${text}`, 'gi');
                return district.district.match(regex)
            })
        }
        // console.log('Matches: ', matches)
        setSuggestions(matches)
        setText(text);
    }

    const onSuggestionHandler = (text) => {
        setText(text)
        setSuggestions([])
    }
    const onChangeHandler2 = (text2) => {
        let matches2 = []
        if (text2.length > 0) {
            matches2 = districts2.filter(district2 => {
                // console.log(district2)
                const regex = new RegExp(`${text2}`, 'gi');
                return district2.district.match(regex)
            })
        }
        // console.log('Matches: ', matches2)
        setSuggestions2(matches2)
        setText2(text2);
    }

    const onSuggestionHandler2 = (text2) => {
        setText2(text2)
        setSuggestions2([])
    }

    const disabledDate = (select) => {
        // Can not select days before today and today
        return select && select < moment().add(-1, 'days').endOf('day');
    };

    //date-picker
    const [selectedDate, setSelectedDate] = useState(new Date())
    const select=selectedDate?._d;
    // console.log(select);
    const [selectedDate2, setSelectedDate2] = useState(new Date())
    const select2=selectedDate2?._d;
    // console.log(select2);

    // const select=selectedDate;



    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/busList", { state: { text, text2,select,select2 } });
    };

    return (
        <div>
            <h6 className='text-center mt-3 flight-info'>Buy Bus Tickets with Best Offers and Discounts !</h6>
            {/* <h2>{select}</h2> */}
            <div className='d-flex justify-content-evenly text-center search-content mt-0'>
                <div>
                    <label for="From" class="form-label mt-2 fs-4">From</label>
                    <input type="text"
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        class="form-control"
                        name='From'
                        placeholder='        Departure Place'
                        required />
                </div>
                <div>
                    <label for="To" class="form-label mt-2 fs-4">To</label>
                    <input type="text"
                        onChange={e => onChangeHandler2(e.target.value)}
                        value={text2}
                        class="form-control"
                        name='To'
                        placeholder='          Arrival Place'
                        required />
                </div>
                <div>
                    <label for="date" class="form-label mt-2 fs-4">Travel Date</label><br />
                    {/* <DatePicker className='returning'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        isClearable
                    /> */}
                    <DatePicker className='returning'
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        disabledDate={disabledDate}/>
                </div>
                <div>
                    <label for="date" class="form-label mt-2 fs-4">Return Date</label><br />
                    <DatePicker className='returning'
                        selected={selectedDate2}
                        onChange={date => setSelectedDate2(date)}
                        disabledDate={disabledDate}/>
                    {/* <DatePicker className='returning'
                        selected={selectedDate2}
                        onChange={date => setSelectedDate2(date)}
                        dateFormat='dd/MM/yyyy'
                        minDate={selectedDate}
                        isClearable
                        
                    /> */}


                </div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <button className='search-button' onClick={handleSearch}>Search Buses</button>
            </div>
            <div className='from-text' >{suggestions && suggestions.map((suggestion, i) =>
                <div
                    onClick={() => onSuggestionHandler(suggestion.district)}
                    className='suggestion' key={i}>{suggestion.district}</div>
            )}</div>
            <div className='from-text2' >{suggestions2 && suggestions2.map((suggestion2, i) =>
                <div
                    onClick={() => onSuggestionHandler2(suggestion2.district)}
                    className='suggestion' key={i}>{suggestion2.district}</div>
            )}</div>
        </div>
    );
};

export default Bus;