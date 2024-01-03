


import React, { useState } from 'react'
import axios from 'axios';

export default function ParkingAPI() {

    const [parkingNum ,setParkingNum] = useState("");
    const [status, setStatus] = useState("available")

    const [coordsLat1,setCoordsLat1] = useState("")
    const [coordsLat2,setCoordsLat2] = useState("")
    const [coordsLat3,setCoordsLat3] = useState("")
    const [coordsLat4,setCoordsLat4] = useState("")

    const [coordsLng1,setCoordsLng1] = useState("")
    const [coordsLng2,setCoordsLng2] = useState("")
    const [coordsLng3,setCoordsLng3] = useState("")
    const [coordsLng4,setCoordsLng4] = useState("")

    


    const postParking = ()=>{

        const coordinates = [
            { lat: parseFloat(coordsLat1), lng: parseFloat(coordsLng1) },
            { lat: parseFloat(coordsLat2), lng: parseFloat(coordsLng2) },
            { lat: parseFloat(coordsLat3), lng: parseFloat(coordsLng3) },
            { lat: parseFloat(coordsLat4), lng: parseFloat(coordsLng4) }
          ];

          
        axios.post('https://658c45f8859b3491d3f5d2ff.mockapi.io/Parking', {
            parkingNum: parkingNum,
            coords: coordinates,
            status: status
          })
          .then(function (response) {
            console.log(response);
          })


    }

  return (
    <>
    <div className='flex justify-center'>
    <div className="md:w-1/2 p-4 flex flex-col justify-center">
          

          <div className="text-center mb-6">
            <p className="font-bold text-lg">Parking API</p>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <input value={parkingNum} onChange={(e)=>setParkingNum(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Parking Number"/>

            <input value={coordsLat1} onChange={(e)=>setCoordsLat1(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords1 lat"/>
            <input value={coordsLng1} onChange={(e)=>setCoordsLng1(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords1 lng"/>

            <input value={coordsLat2} onChange={(e)=>setCoordsLat2(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords2 lat"/>
            <input value={coordsLng2} onChange={(e)=>setCoordsLng2(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords2 lng"/>

            <input value={coordsLat3} onChange={(e)=>setCoordsLat3(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords3 lng"/>
            <input value={coordsLng3} onChange={(e)=>setCoordsLng3(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords3 lng"/>

            <input value={coordsLat4} onChange={(e)=>setCoordsLat4(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords4 lng"/>
            <input value={coordsLng4} onChange={(e)=>setCoordsLng4(e.target.value)} className="text-sm p-2 rounded-md border shadow-sm" type="text" placeholder="Coords4 lng"/>




            <button onClick={postParking} className="rounded-md bg-[#fbf429] font-bold shadow-md text-sm transition duration-500 hover:bg-[#faf4509e]">Post</button>
          </div>



        </div>
        </div>
    </>
  )
}
