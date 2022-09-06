import axios from 'axios'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { withGlob } from '../ContextApi/GlobContext'
import { getInvoices } from '../data'
import useData from '../Hooks/useData'
import QrComponent from './QrComponent'

function Invoices({data}) {
    let url = 'https://donidoni28-makes-great-sites.netlify.app/invoices/'
    console.log(data);

    let qr = data.length !== 0 && data.map((item)=>{
        const trainId = item.vehicleinfo.shortname
        const frome = item.stops.stop[0].station
        const too = item.stops.stop[+item.stops.number-1].station
        return <Link
            // style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${trainId}`}
            key={trainId}
        >
            {/* {console.log(item)}
            {console.log(item.stops.stop)}
            {console.log(item.stops.stop[0])}
            {console.log(item.stops.stop[+item.stops.number-1])}
            {console.log('------------------------------------')} */}
            {console.log()}
            {console.log(too)}
            <h1>{`${frome}-${too}`}</h1>
            {/* <h3>{`${frome}-${too}`}</h3> */}
            <QrComponent key={trainId} url={url+trainId} data={item} />
        </Link>
    })




    return (
        <div className='h-screen grid grid-cols-2 content-center justify-items-center gap-y-10'>

            {qr}
        </div>
    )
}


export default withGlob(Invoices)