import { useEffect } from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { withGlob } from "../ContextApi/GlobContext";
import StepsComponents from "./StepsComponents";



function Invoice({ data }) {
    let params = useParams();
    let [invoice, setInvoice] = useState()
    // const timee = Date.parse('07 Sept 2022 16:00:00 GMT');
    let [time,setTime] = useState()
    let [next,setNext] = useState(0)
    let [speed,setSpeed] = useState(1)
    let [mili,setMili] = useState(1000)
    const timeee = new Date(time).toLocaleTimeString();
    useEffect(() => {
        invoice !== undefined && setTime((invoice.stops.stop[0].scheduledArrivalTime*1000)-500000)
    }, [invoice])
    
    useEffect(() => {
        data !== [] && data.forEach(element => {
            if (element.vehicle.includes(params.invoiceId)) {
                setInvoice(element)
            }
        })
        let interval = null
        interval = setInterval(() => {
            setTime(time=>time+mili)
        }, 1000/speed);
        
        return () => clearInterval(interval);

    }, [data, mili, params.invoiceId, speed])

    if (invoice !== undefined) {
        const frome = invoice.stops.stop[0].station
        const too = invoice.stops.stop[+invoice.stops.number - 1].station
        let stepsComponents = []
        // const steps = invoice.stops.stop.map((el, i) => {

        //     return <StepsComponents key={i} id={i} data={el}  time={time} />
        // })

        for (let i = 0; i < invoice.stops.number; i++) {
            const el = invoice.stops.stop[i];
            const nel = invoice.stops.stop[i+1];
            stepsComponents = [
                ...stepsComponents,
                <StepsComponents key={i} id={i} data={el} next={nel===undefined? null : nel.scheduledArrivalTime*1000} time={time} />
            ]
            
        }
        
        const steps = stepsComponents.map((el,i)=>{
            return el
        })
        const last = +invoice.stops.stop[invoice.stops.number -1].scheduledArrivalTime*1000
        if(time>=last){
            setTime((invoice.stops.stop[0].scheduledArrivalTime*1000)-500000)
        }
        let handleclick = ()=>{
            if(speed===3){
                if(mili>=21000){
                    setMili(1000)
                    setSpeed(1)
                }
                setMili(mili=>mili+20000)
            } else {

                setSpeed(speed=>speed+1)
            }
        }
        console.log(mili);
        return (
            <div className="relative w-full" style={{ padding: "1rem" }}>
                <h1>{frome}-{too}</h1>
                <div onClick={handleclick} className="fixed right-20 top-20 bg-white rounded">
                    {timeee} <br />
                    speed X{speed}
                </div>
                <ul className="steps steps-vertical">
                    {steps}
                </ul>
            </div>
        )
    } else {
        <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }
}
export default withGlob(Invoice)