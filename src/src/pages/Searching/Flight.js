import React, { useEffect, useState } from 'react';
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { RiShipLine } from "react-icons/ri";
import './Search.css';
import { DatePicker } from 'antd';
import "antd/dist/antd.css";
import axios from 'axios';
import { Link,Outlet } from "react-router-dom";

const Flight = () => {
    const [districts, setDistricts] = useState([]);
    console.log(districts)
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([])

    const [districts2, setDistricts2] = useState([]);
    console.log(districts)
    const [text2, setText2] = useState('');
    const [suggestions2, setSuggestions2] = useState([])

    useEffect(() => {
        const loadDistricts = async () => {
            const response = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            console.log(response.data.data);
            setDistricts(response.data.data);
        }
        loadDistricts();
    }, [])
    useEffect(() => {
        const loadDistricts2 = async () => {
            const response = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            console.log(response.data.data);
            setDistricts2(response.data.data);
        }
        loadDistricts2();
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = districts.filter(district => {
                console.log(district)
                const regex = new RegExp(`${text}`, 'gi');
                return district.district.match(regex)
            })
        }
        console.log('Matches: ', matches)
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
                console.log(district2)
                const regex = new RegExp(`${text2}`, 'gi');
                return district2.district.match(regex)
            })
        }
        console.log('Matches: ', matches2)
        setSuggestions2(matches2)
        setText2(text2);
    }

    const onSuggestionHandler2 = (text2) => {
        setText2(text2)
        setSuggestions2([])
    }
    return (
        <div>
            <h6 className='text-center mt-3 flight-info'>Grab Upto 25% Off on Domestic Flights !</h6>
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
            <DatePicker className='departing' />
        </div>
        <div>
            <label for="date" class="form-label mt-2 fs-4">Return Date</label><br />
            <DatePicker className='returning' />
        </div>
    </div>
    <div className='d-flex justify-content-center mt-3'>
            <button className='search-button'>Search Flights</button>
        </div>
        <div className='from-text' >{suggestions && suggestions.slice(0,4).map((suggestion, i) =>
            <div
                onClick={() => onSuggestionHandler(suggestion.district)}
                className='suggestion' key={i}>{suggestion.district}</div>
        )}</div>
        <div className='from-text2' >{suggestions2 && suggestions2.slice(0,4).map((suggestion2, i) =>
            <div
                onClick={() => onSuggestionHandler2(suggestion2.district)}
                className='suggestion' key={i}>{suggestion2.district}</div>
        )}</div>


    </div>
    );
};

export default Flight;