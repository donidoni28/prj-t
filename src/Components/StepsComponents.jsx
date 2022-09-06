import React from 'react'
import { useEffect } from 'react'

export default function StepsComponents({ data, next, time }) {
    const arrival = new Date(+data.scheduledArrivalTime * 1000)
    const derparture = new Date(+data.scheduledDepartureTime * 1000)
    const arrival1 = +data.scheduledArrivalTime * 1000
    const derparture1 = next
    // const dataObject2 = new Date(time)
    const gethour = arrival.getHours()
    const getminute = arrival.getMinutes()
    const timee = ` ${gethour}:${String(getminute).length < 2 ? `0${getminute}` : getminute}`
    useEffect(() => {
    }, [])
    let clasnameStyle = ''
    let dot = ''
    let underline = ''
    let anchor = ''
    // console.log(time);
    if (time < (arrival1)) {
        clasnameStyle = ''
        dot = '●'
    } else {
        clasnameStyle = 'step-primary'
        dot = '✓'
    }
    if((time >= arrival1 && time <= derparture1) || (time >= arrival1 && derparture1===undefined)){
        
        underline = "border-2 rounded bg-white" 
    }
    return (
        <li data-content={`${dot}`} className={`step ${clasnameStyle}`}>

            <div className={`w-full ${underline}`}>
                <p >
                    {data.station} <br />

                </p>
                <p>
                    {timee}
                </p>
            </div>
            {/* {String(dataObject2.getHours())}:
            {String(dataObject2.getMinutes())} */}
            {/* {String(hour).length < 2 ? `0${hour}` : `${hour}`}:
            {String(minute).length < 2 ? `0${minute}` : `${minute}`} */}
        </li>
    )
}