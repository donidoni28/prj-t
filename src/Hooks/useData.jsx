import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useData() {
    let [data,setData] = useState([])
    let [dist,setDist] = useState([])
    let [error,setError] = useState(null)
    let [loading,setLoading] = useState(null)
    
    useEffect(()=>{
        (
            async function (){
                const config = {
                    headers:{
                        'Accept':'application/json',
                    },
                }
                try {
                    let train1 = await axios.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC1718&date=070922&format=json&lang=en&alerts=false',config)
                    setLoading(true)
                    let train2 = await axios.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC1518&date=070922&format=json&lang=en&alerts=false',config)
                    let train3 = await axios.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC3617&date=070922&format=json&lang=en&alerts=false',config)
                    let train4 = await axios.get('https://api.irail.be/vehicle/?id=BE.NMBS.IC1719&date=070922&format=json&lang=en&alerts=false',config)
                    let disturbance = await axios.get('https://api.irail.be//disturbances/?format=json&lineBreakCharacter="&lang=en',config)

                    // console.log(stations)
                    setData([train1.data,train2.data,train3.data,train4.data])
                    setDist([disturbance.data])
                } catch (error) {
                    setError(error)
                } finally{
                    setLoading(false)
                }
            }
        )()
    },[])

    return [
        data,dist,error,loading
    ]
}
// /liveboard/?station=Gent-Sint-Pieters&date=300917&id=BE.NMBS.008892007&time=1230&arrdep=departure&lang=en&format=json&alerts=false