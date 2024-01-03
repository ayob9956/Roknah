import React from "react";
import Signup from "./Signup";

function Test() {
  return(<>
  <div class="bg-gray-900 min-h-screen flex flex-col">
  <header class="bg-gradient-to-r from-purple-800 to-indigo-800 py-4">
    <div class="container mx-auto px-4">
      <h1 class="text-white text-4xl font-bold"> الدعم</h1>
    </div>
  </header>
  <main className="container mx-auto px-4 py-8 ">
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="name">الاسم</label>
          <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="text"  placeholder="ادخل اسمك" />
        </div>
        <div class="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="email">البريد الإلكتروني</label>
          <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="email"  placeholder="ادخل بريدك الإلكتروني" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="message">الرسالة</label>
          <textarea className="border border-gray-300 rounded-md px-4 py-2 w-full h-32" id="message" placeholder="اكتب رسالتك هنا"></textarea>
        </div>
        <button className="bg-[#efe827] text-black font-bold px-4 py-2 rounded-md " type="submit">إرسال</button>
      </form>
    </div>
  </main>
  <footer class="bg-gray-800 py-4">
    <div class="container mx-auto px-4 text-center text-white">
      <p class="text-lg">جميع الحقوق محفوظة &copy; 2023</p>
    </div>
  </footer>
</div>
  
  
  </>)
}

export default Test;


// Signup

// import React from "react";
// import google from "../google.png"

// function Signup() {
//   return (<>
//   {/* the Page container */}
//   <div className="w-full h-[100vh] flex justify-center items-center bg-[#e5e5e645]  ">
//     {/* the Contents container */}
//     <div className="w-[75%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1]">
//       {/* the Image contents */}
//         <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
//             <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
//         </div>
//         {/* Registration card container */}
//          <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col gap-3  ">
//           {/* Logo Image */}
//            <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
//           {/* Registration description */}
//             <div className="w-full flex flex-col items-center gap-2">
//             <p className="font-bold text-[20px]">تسجيل جديد</p>
//             <p className="text-[#969696] text-[12px]">قم بالتسجيل والاستفادة من ركنة</p> 
//             </div>
//             {/* Data User Entry */}
//             <div className="flex flex-col gap-6">
//             <input className="text-[12px] p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/>    
//             <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm  " type="email" placeholder="ادخل البريد الإلكتروني"/>  
//             <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm text-right placeholder:text-right" type="tel" placeholder="ادخل رقم الجوال"/>  
//             <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="password" placeholder="ادخل كلمة المرور"/>      
//             <button className="w-[35vh] h-[5vh] rounded-md  bg-[#fbf429] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">انشاء الحساب</button>
//             </div>
//             {/* Description of registration options */}
//             <div className="w-full flex flex-col justify-center items-center gap-3">
//             <div className=" w-full flex items-center justify-center gap-2">
//             <hr className="border-[1px] w-[20%]"></hr>
//             <p className="text-[12px] text-[#5d5b5b]">او</p>
//             <hr className="border-[1px] w-[20%]"></hr>
//             </div>
       
//             <button className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#efefef]">
//               <img className="w-[5%]" src={google}alt="" />
//               التسجيل عن بأستخدام قوقل
//             </button>
//             <p className="text-[#969696] text-[12px] ">لدي حساب لتسجيل ??  <a className="text-blue-400 font-bold" href="/">تسجيل دخول</a></p>
           
//             </div>
//         </div>
//     </div>

// </div>

  
  
//   </>)
// }

// export default Signup;
// // bg-gradient-to-t from-[#d9d9d942] to-[#1038ff11]





// Signin 
// import google from "../google.png"

// function Singnin() {
//   return(<>
//    {/* the Page container */}
//    <div className="w-full h-[100vh] flex justify-center items-center bg-[#e5e5e645]">
//     {/* the Contents container */}
//     <div className="w-[70%] h-[80vh] flex bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-md border-[#d1d1d1] ">
//       {/* the Image contents */}
//         <div className=" w-[50%] h-[79.8vh] bg-[url('Screenshot.png')] bg-cover bg-center rounded-2xl   ">
//         <div className=" w-full h-[79.8vh] bg-gradient-to-b from-[#d9d9d900] via-[#2d61e310] to-[#d9d9d90f] rounded-2xl border-[1px]  shadow-sm border-[#efefef]"></div>
//         </div>
//         {/* Registration card container */}
//          <div className="w-[50%] h-[80vh] border-r-0 flex items-center flex-col j gap-8  ">
//           {/* Logo Image */}
//            <div className="w-full  flex justify-end"><p>[ركنة]</p></div>
//           {/* Registration description */}
//             <div className="w-full flex flex-col items-center gap-4">
//             <p className="font-bold text-[20px]">تسجيل دخول</p>
//             <p className="text-[#969696] text-[12px]">يرجى تسجيل الدخول للمتابعة إلى حسابك. </p> 
//             </div>
//             {/* Data User Entry */}
//             <div className="flex flex-col gap-6">
//             <input className="text-[12px] p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm" type="text" placeholder="ادخل اسم المستخدم"/> 
//             <div className="flex flex-col gap-2">  
//             <input className="text-[12px]  p-2 w-[35vh] h-[5vh] rounded-md border-[1px] shadow-sm " type="password" placeholder="ادخل كلمة المرور "/> 
//             <p className="text-[#969696] text-[12px]"><a href="">نسيت كلمة المرور؟ </a> </p> 
//             </div>      
//             <button className="w-[35vh] h-[5vh] rounded-md  bg-[#efe827] font-bold shadow-md text-[12px] transition duration-500 hover:bg-[#faf4509e]">تسجيل دخول</button>
//             </div>
//             {/* Description of registration options */}
//             <div className="w-full flex flex-col justify-center items-center gap-4">
//             <div className=" w-full flex items-center justify-center gap-2">
//             <hr className="border-[1px] w-[20%]"></hr>
//             <p className="text-[12px] text-[#5d5b5b]">او</p>
//             <hr className="border-[1px] w-[20%]"></hr>
//             </div>
       
//             <button className=" w-[35vh] h-[5vh] rounded-md border-[1px] font-bold text-[12px] shadow-md flex items-center justify-center gap-2 transition duration-500 hover:bg-[#dedede5d]">
//               <img className="w-[5%]" src={google}alt="" />
//               التسجيل دخول بأستخدام قوقل
//             </button>
//             <p className="text-[#969696] text-[12px] ">ليس لدي حساب لتسجيل ؟؟  <a className="text-blue-400 font-bold" href="/">انشاء حساب</a></p>
           
//             </div>
//         </div>
//     </div>

// </div>


//   </>)
// }

// export default Singnin;
