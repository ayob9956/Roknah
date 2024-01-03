import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Ticket() {
        const navget = useNavigate();

        const [reservations,setReservations] = useState([])
        const [Message, setMessage] = useState('')
        const form = useRef();
        const [currentUser, setCurrentUser] = useState(
                JSON.parse(localStorage.getItem('userData'))
              );

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_mhcfiw6', 'template_1riql99', form.current, 'rY2L4SmEgvfjPNQ01')
            .then((result) => {
                console.log(result.text);
                navget("/");
            }, (error) => {
                console.log(error.text);
            });
        };
        const navparUser = localStorage.getItem('userDetails');
        const user = JSON.parse(navparUser);

        const ress = localStorage.getItem('ReservationId');
        const res = JSON.parse(ress);

        useEffect(() => {
                axios.get(`https://658c45f8859b3491d3f5d2ff.mockapi.io/Reservation/${res}`)
                .then(function (response) {
                        console.log(response);
                  setReservations(response.data)
                })
        }, [])
        
        useEffect(() => {
                setMessage(`رقم الموقف:${reservations.parkingId}
        
                التاريخ: ${reservations.date}
                
                وقت الحجز من:${reservations.startTime} الى ${reservations.endTime}`)
        }, [])
        console.log(Message);
        
  return (
    <div className='flex flex-col items-center  justify-center h-full mt-10 w-full px-8 '>
        <div className='flex flex-col border p-3 bg-slate-100'>
        <div className="card w-full p-9  bg-primary h-10 justify-center rounded-none text-primary-content items-center">
        <h2 className="card-title text-black">تذكرة الموقف</h2>
  
</div>
<div className='w-full flex justify-around items-center'>
    <p className='text-right px-3 text-nowrap font-bold text-xl font-mono '>مواقف أكاديمية طويق</p>
    <img className='w-28 p-5' src="data:image/png;base64,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" alt="" />
</div>
<div className='flex gap-10'>
    <div>
    <p className='font-bold text-xl font-mono p-2'>الاسم</p>
<div className="card w-full bg-neutral h-10 justify-center rounded-none text-primary-content items-center">
    
{user && <h2 className="card-title  font-mono text-white text-nowrap">{ user.UserName }</h2>
}  
{currentUser && <h2 className="card-title  font-mono text-white text-nowrap">{ currentUser.displayName }</h2>
}  
</div>
</div>
<div> 


<p className='font-bold text-xl font-mono p-2'>التاريخ</p>
<div className="card w-full bg-neutral h-10 justify-center rounded-none text-primary-content items-center">
    
        <h2 className="card-title font-mono text-white p-3 text-nowrap">{reservations.date}</h2>
  
</div>
</div>
<div> 


<p className='font-bold text-xl font-mono p-2'>رقم الموقف</p>
<div className="card w-full bg-neutral h-10 justify-center rounded-none text-primary-content items-center">
    
        <h2 className="card-title font-mono text-white p-3 text-nowrap">{reservations.parkingId}</h2>
  
</div>
</div>

</div>
<div> 


<p className='font-bold text-xl font-mono p-2'>العنوان</p>
<div className="card w-full bg-neutral  justify-center rounded-none text-primary-content items-center">
    
        <h2 className="card-title font-mono text-white p-3 text-wrap">VP36+HQ مطار الملك خالد الدولي، الرياض</h2>
  
</div>
</div>
<div> <p className='font-bold text-xl font-mono p-2'>وقت الحجز</p>
<div className="card w-full  bg-neutral mt-4 h-12 justify-center rounded-none text-primary-content items-center">


        <h2 className="card-title font-mono text-white p-3 text-wrap">{reservations.startTime} الى {reservations.endTime}</h2>
  
</div>
</div>
        </div>
        <form  ref={form} onSubmit={sendEmail}>
                <div className='hidden'>
      <label>Name</label>
      <input type="text" value={user? user.UserName : currentUser.displayName} name="user_name" />
      <label>Email</label>
      <input type="email" value={user ? user.Email: currentUser.email} name="user_email" />
      <label>Message</label>
      <textarea value={Message} name="message" />
      </div>
      <input className='btn btn-primary  font-semibold text-lg text-black mt-6 mb-8' type="submit" value="ارسال التذكرة إلى البريد الالكتروني" />
    </form>

    </div>
  )
}

export default Ticket