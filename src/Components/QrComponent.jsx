import React from 'react'
import { useQRCode, QRCode } from 'react-qrcode'

export default function QrComponent({ url }) {
    const dataUrl = useQRCode(url)
    return (
        <div className='h-80 w-80'>
            <img width={300} src={dataUrl} alt="" />
        </div>
    )
}
