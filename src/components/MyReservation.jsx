import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function MyReservation() {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('userData'))
      );
    // console.log(currentUser.uid);

    const navparUser = localStorage.getItem('userDetails');
    const user = JSON.parse(navparUser); 
    // console.log(user.Id);


    const [userReservations1, setUserReservations1] = useState([]);
    const [userReservations2, setUserReservations2] = useState([]);



    useEffect(()=>{

        if(currentUser === null){
            axios.get('https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation')
            .then(function (response) {
                const filteredReservations = response.data.filter((item)=> item.userId === user.Id)
                setUserReservations1(filteredReservations)
                console.log(userReservations1);

            })

        }else{

            axios.get('https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation')
            .then(function (response) {
             const filteredReservations = response.data.filter((item)=> item.uid === currentUser.uid)
            setUserReservations2(filteredReservations)
            console.log(userReservations2);
               
              }
            )}
    },[]);


    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
      
        if (month < 10) {
          month = `0${month}`;
        }
      
        if (day < 10) {
          day = `0${day}`;
        }
      
        return `${year}-${month}-${day}`;
      }


    const checkStatus=(date,endTime)=>{
    
    const currentDate = getCurrentDate();
    const reservationDate = date;
    const isDateInFuture = reservationDate >= currentDate;

    if (isDateInFuture){
        const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
        const [currHours, currMinutes] = currentTime.split(":").map(Number); 
        const [endHours, endMinutes] = endTime.split(":").map(Number);

        const current = currHours * 60 + currMinutes;
        const end = endHours * 60 + endMinutes;

        if ( end >= current ) {
        return true
        }else{
        return false
        }

    }else{
      return false
    }
    }




  return (
    <>
    <div className="bg-[#F2F2F2] w-full h-screen flex flex-col items-center justify-center ">
    <div className="mt-2 w-[75%] h-[35vh] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/a1c3bc58223521.59f3b659acbf7.jpg')] bg-cover bg-center rounded-2xl shadow-2xl flex flex-col justify-between p-4 pr-9">
            <div className="text-[#d7d7d7] font-semibold text-2xl ">
              
        </div>
    </div>

<div className=" bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] w-[75%] m-3 bg-white rounded-2xl shadow-2xl">
    <div className=" w-full rounded-2xl shadow-2xl flex flex-col gap-2 px-8 py-3">
        <div class="block text-gray-700 text-xl font-bold mb-2 "><p >حجوزاتي</p> 
        <hr className="w-[20%] mt-2 "></hr>
        </div>
        

<div class="flex flex-col">
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div  class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div  class="overflow-hidden">
        <table  class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              {/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th> */}
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                يوم الحجز
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                رقم الموقف
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                بداية الحجز
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                نهاية الحجز
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 ">
                حالة الحجز
              </th>
            </tr>
          </thead>
          <tbody>

            {currentUser === null?(
            userReservations1.reverse().map((item)=>(
            <tr class="bg-gray-100 border-b">
              {/* <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
              <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.date}
              </td>
              <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.parkingId}
              </td>
              <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.startTime}
              </td>
              <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.endTime}
              </td>
              <td class={` font-bold text-center text-sm text-gray-900  px-6 py-4 whitespace-nowrap ${checkStatus(item.date,item.endTime) ? 'text-green-500' : 'text-gray-600'}`}>
                {checkStatus(item.date,item.endTime) ?  'Active' : 'Inactive'}
              </td>
            </tr>
            ))
            ):(
                userReservations2.reverse().map((item)=>(
                    <tr class="bg-gray-100 border-b">
                      {/* <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> */}
                      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.date}
                      </td>
                      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.parkingId}
                      </td>
                      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.startTime}
                      </td>
                      <td class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.endTime}
                      </td>
                      <td class={` font-bold text-center text-sm text-gray-900  px-6 py-4 whitespace-nowrap ${checkStatus(item.date,item.endTime) ? 'text-green-500' : 'text-gray-600'}`}>
                        {checkStatus(item.date,item.endTime) ?  'Active' : 'Inactive'}
                      </td>
                    </tr>
                    ))
            )}

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  <div>

</div>
    </div>
</div>

</div>
    </>
  )
}
