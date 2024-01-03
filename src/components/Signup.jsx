import React, { useState, useEffect } from 'react';
import google from "../google.png"
import axios from "axios";
import {signInWithPopup } from '@firebase/auth';
import { auth,provider } from './firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Nav from "./Nav"
 
// sset Timeout to display a error Massage to the user 
const ErrorMessage = ({ message, onHide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onHide]);

  // Alert Component FOR error Massage
  return (
    <div className="absolute top-48 left-0 right-24 bg-[#fecaca6d] px-6 py-3 m-4 rounded-xl shadow-md text-xs flex items-center gap-2 mx-auto w-3/4 xl:w-[48vh] ">
      <svg viewBox="0 0 24 24" className="text-red-600 w-4 h-4 sm:w-4 sm:h-4 mr-2">
        <path
          fill="currentColor"
          d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        ></path>
      </svg>
      <span className="text-red-800">{message}</span>
    </div>
  );
};

// sset Timeout to display a Success Message to the user
const SuccessMessage = ({ message, onHide }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide();
    }, 90000);

    return () => clearTimeout(timeout);
  }, [onHide]);

  // Alert Component FOR Success Message
  return (
    <div className="absolute top-32 left-0 right-24  bg-[#bbf7d09f] px-6 py-3 m-4 rounded-xl text-xs flex items-center gap-2 mx-auto w-3/4 xl:w-[45vh]">
      <svg viewBox="0 0 24 24" className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <span className="text-green-800">{message}</span>
    </div>
  );
};


function Signup() {

const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
 const [value, setvalue] = useState('');
  const navget = useNavigate();
    const navgetTI = useNavigate();

  // validate Form
  const validateForm = () => {

    if (username.length < 6) {
      setError('اسم المستخدم يجب أن يكون أكبر من 6 أحرف');
      return false;
    }

    if (!/^[A-Za-z0-9-.]+@[A-Za-z0-9-]+.[A-Za-z]{2,4}$/.test(email)) {
      setError('البريد الإلكتروني غير صالح');
      return false;
    }

    if (!/^05\d{8}$/.test(phone)) {
      setError('رقم الجوال غير صالح');
      return false;
    }

    if (!/^[A-Za-z0-9-].{6,}$/.test(password)) {
      setError('الرقم السري يجب أن يكون على الأقل 8 أحرف ويحتوي على أحرف كبيرة وصغيرة وأرقام');
      return false;
    }
 
    return true;
  };

  // Executing the CRUD operation to be save the data user in the API
  const handleSubmit = (e) => {
  
    e.preventDefault();
    if (validateForm()) {

    setIsErrorVisible(false);

    showSuccessMessage();
     localStorage.clear();
      axios.post("https://6552c0675449cfda0f2dca61.mockapi.io/uesers", {
        UserName: username,
        Email: email,
        Phone: phone,
        Password: password,
      })
      .then(res =>navget("/Signin"))
    .catch(error => console.error(error));
    }
  };

  // Executing user registration through Google using Firebase
 const handelgoogel =()=>{
  
     signInWithPopup(auth, provider).then((data)=>{
        setvalue(data.user.email)
        localStorage.setItem("userData",JSON.stringify(data.user))

    })
  }

  useEffect(()=>{

    setvalue(localStorage.getItem("email"))

  })


  //to clearing and displays Error Message
   const showErrorMessage = () => {
    setError('');
    setIsErrorVisible(true);
  };

  //to hides Error Message
  const hideErrorMessage = () => {
    setIsErrorVisible(false);
  };

//to clearing and displays Success Message
  const showSuccessMessage = () => {
    setIsSuccessVisible(true);
  };

//to hides Success Message
  const hideSuccessMessage = () => {
    setIsSuccessVisible(false);
  };


  return (<>

    
        {/* Error Message */}
        {isErrorVisible && <ErrorMessage message={error} onHide={hideErrorMessage} />}

        {/* Success Message */}
        {isSuccessVisible && <SuccessMessage message="تم حفظ البيانات بنجاح" onHide={hideSuccessMessage} />}


  {/* the Page container */}
  <div className="w-full h-[100vh]  flex justify-center items-center bg-[#e5e5e645]  ">

    {/* the Contents container */}
    <div className="w-[75%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1]">

      {/* the Image contents */}
        <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center max-md:hidden rounded-2xl">
            <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
        </div>

        {/* Registration card container */}
         <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col justify-evenly ">

          {/* Registration description */}
            <div className="w-full flex flex-col items-center ">
            <p className="font-bold text-[20px]">تسجيل جديد</p>
            <p className="text-[#969696] text-[12px]">قم بالتسجيل والاستفادة من ركنة</p> 

            </div>

            {/* Data User Entry */}
             <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>

          {/* Username input */}
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm text-[12px]  text-gray-600">اسم المستخدم</label>
            <input type="text" id="username" name="username" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm placeholder:text-[11px]" onChange={(e) => setUsername(e.target.value)} placeholder="ادخل اسم المستخدم"/>
          </div>  

          {/* Email input */}
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm text-[12px]  text-gray-600">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm placeholder:text-[11px]"onChange={(e) => setEmail(e.target.value)}placeholder="ادخل البريد الإلكتروني" />
          </div>

          {/* Phone input */}
          <div className="mb-2">
            <label htmlFor="phone" className="block text-sm text-[12px] text-gray-600">رقم الجوال</label>
            <input type="" id="phone" name="phone" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm placeholder:text-[11px] placeholder:rtl " onChange={(e) => setPhone(e.target.value)}placeholder="ادخل رقم الجوال" />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm text-[12px] text-gray-600">الرقم السري</label>
            <input type="password" id="password" name="password" className=" p-2 w-[35vh] h-[5vh] text-[12px] mt-1  rounded-md border-[1px] shadow-sm placeholder:text-[11px] " onChange={(e) => setPassword(e.target.value)}placeholder="ادخل كلمة المرور" />
          </div>

          {/*  Submit button */}
          <div className="flex items-center justify-between mb-2 ">
           <button type="submit" onClick={showErrorMessage} className="w-[35vh] h-[5vh] rounded-md bg-[#fbf429] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">
              تسجيل الدخول
            </button>
          </div>
        </form>

        

            {/* Description of registration options */}
            <div className="w-full flex flex-col justify-center items-center gap-3 ">
            <div className=" w-full flex items-center justify-center gap-2">
            <hr className="border-[1px] w-[20%]"></hr>
            <p className="text-[10px] text-[#5d5b5b]">او</p>
            <hr className="border-[1px] w-[20%]"></hr>
            </div>

            {/*  Submit to registr by googel button */}
             {value? navgetTI("/") :
         <button onClick={handelgoogel} className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#dedede5d]">
             <img className="w-[5%]" src={google} alt="" />
                التسجيل دخول بأستخدام قوقل
          </button>
          }
            <p className="text-[#969696] text-[12px] mt-">لدي حساب لتسجيل ??  <a className="text-blue-400 font-bold" href="/Signin">تسجيل دخول</a></p> 
            </div>
        </div>
    </div>

</div>



  </>
  )

}

export default Signup;
// bg-gradient-to-t from-[#d9d9d942] to-[#1038ff11]