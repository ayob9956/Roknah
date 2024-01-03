import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


// const ErrorMessage = ({ message, onHide }) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       onHide();
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, [onHide]);

//   // Alert Component FOR error Massage
//   return (
//     <div className="absolute top-52 left-0 right-24 bg-[#fecaca6d] px-6 py-3 m-4 rounded-xl shadow-md text-xs flex items-center gap-2 mx-auto w-3/4 xl:w-[48vh] ">
//       <svg viewBox="0 0 24 24" className="text-red-600 w-4 h-4 sm:w-4 sm:h-4 mr-2">
//         <path
//           fill="currentColor"
//           d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
//         ></path>
//       </svg>
//       <span className="text-red-800">{message}</span>
//     </div>
//   );}

function Emailjs() {
    const form = useRef();
    const [Toast, setToast] = useState("text-red-700 hidden")
    const [Message, setMessage] = useState("")

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const isFormValid = () => {
        const formData = new FormData(form.current);
        const userName = formData.get('user_name').trim();
        const userEmail = formData.get('user_email').trim();
        const message = formData.get('message').trim();

        if (!userName || !userEmail || !message) {
            setMessage('رجاءً املاء جميع البيانات بشكل صحيح.');
            setToast("");
            return false;
        }

        if (!validateEmail(userEmail)) {
          setMessage('رجاءً ادخل ايميل صحيح');
          setToast("")
            return false;
        }

        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            return;
        }

        emailjs.sendForm('service_mhcfiw6', 'template_61anxy9', form.current, 'rY2L4SmEgvfjPNQ01')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                setMessage('تم ارسال الايميل بنجاح');
                setToast("text-green-700");

            }, (error) => {
                console.log('FAILED...', error);
                setMessage('حدث خطا اثناء الارسال');
                setToast("")
            });
    };

    return (
        <div className='w-full  '>
            <section className="bg-white">
                <div className="container h-[90dvh] w-[50dvw] max-sm:w-[100dvw] px-6 py-9 mx-auto">
                    <div>
                        <p className="font-medium text-yellow-500">تواصل معنا</p>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">راسل فريقنا الرهيب</h1>
                        <p className="mt-3 text-gray-500">نبي  نسمع منك. الرجاء تعبئة هذا النموذج.</p>
                    </div>

                    <div className="w-[50dvw] max-sm:w-[80dvw] gap-12 mt-7">
                        <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                        <label className="block mb-2 text-sm text-gray-600">الاسم</label>
                                        <input name="user_name" type="text" placeholder="الاسم" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-gray-600">الايميل</label>
                                    <input name="user_email" type="email" placeholder="example@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="w-full  mt-4">
                                    <label className="block mb-2 text-sm text-gray-600">الرسالة</label>
                                    <textarea name="message"  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="مرحبا فريق ركنة...."></textarea>
                                </div>
                                <p className={` text-wrap flex ${Toast}`}>{Message}</p>

                                  <div className='w-full flex justify-center'>
                                <button type="submit" value="Send" className="w-[20dvw] max-sm:w-[50dvw] px-6 py-3 mt-4 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                                    ارسال
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Emailjs;
