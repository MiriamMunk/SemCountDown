import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./StyleSheet.css";
import DateTimeDisplay from './DateTimeDisplay';

const CountDown = () => {

    const [time, setTime] = useState({});

    const getTime = async () => {
        const data = await axios.get('/api/CountDown/getTimeLeft');
        setTime(data.data);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (<>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="show-counter">
            <DateTimeDisplay value={time.days} type={'Days'} />
            <p>:</p>
            <DateTimeDisplay value={time.hours} type={'Hours'} />
            <p>:</p>
            <DateTimeDisplay value={time.minutes} type={'Mins'} />
            <p>:</p>
            <DateTimeDisplay value={time.seconds} type={'Seconds'} />
        </div></>
    );


}
export default CountDown;