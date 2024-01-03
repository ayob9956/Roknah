

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LnadingPage from './LnadingPage'
import BookInfo from './BookInfo'
import Support from './Support'
import UserData from './UserData'
import Nav from './Nav'
import Signup from './Signup'
import Data from './Data'
import Signin from './Signin'
import CheckoutForm from './CheckoutForm'
 import Ticket from './Ticket'
 import Checkout from './Checkout'
 import About from './About'
 import Emailjs from './Emailjs'
 import MyReservation from './MyReservation'



export default function Rout() {

  return (
    <>
    <Nav/>
    <Routes>

        <Route path='/' element={<LnadingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/support' element={<Emailjs/>}/>
        <Route path='/ticket' element={<Ticket/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/CheckoutForm' element={<CheckoutForm/>}/>
        <Route path='/sendemail' element={<Emailjs/>}/>
        <Route path='/bookinfo' element={<BookInfo/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Data' element={<Data/>}/>
        <Route path='/UserData' element={<UserData/>}/>
        <Route path='/MyReservations' element={<MyReservation/>}/>


    </Routes>

    </>
  )
}