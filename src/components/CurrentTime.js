import React, { useState, useEffect } from 'react'

const CurrentTime = () => {

    const d = new Date();
    const nowTime = d.toLocaleTimeString();
    const [time, setTime] = useState(nowTime);

    const UpdateTime = () => {
        const d = new Date();
        const nowCTime = d.toLocaleTimeString();
        setTime(nowCTime);
        console.log('get time btn pressed');
    };
    //  useEffect(()=>{
    //      UpdateTime();
    //  },[]);

    //    } catch(err) {
    //     console.log(err);



    return (
        <div>
            <h1>{time}</h1>
            <button onClick={UpdateTime} >Get Current Time</button>
        </div>
    );
};


export default CurrentTime