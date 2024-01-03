import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Support() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'الاسم مطلوب.';
    }
    if (!isValidEmail(formData.user_email)) {
      newErrors.user_email = 'البريد الإلكتروني غير صالح.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة.';
    }

    // اذا كل شي تمام بيلغي الايرور المسج   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs.sendForm('service_btbu55k', 'template_61anxy9', form.current, 'rY2L4SmEgvfjPNQ01')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="bg-gray-100 min-h-[88vh] flex items-center">
      <main className="container mx-auto px-4 py-8 ">
        <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">الاسم</label>
              <input className="border border-gray-300 rounded-md px-4 py-2 w-full" 
                     type="text" name="user_name" 
                     placeholder="ادخل اسمك" 
                     value={formData.user_name} 
                     onChange={handleInputChange} />
              {errors.user_name && <p className="text-red-500 text-xs">{errors.user_name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">البريد الإلكتروني</label>
              <input className="border border-gray-300 rounded-md px-4 py-2 w-full" 
                     type="email" name="user_email" 
                     placeholder="ادخل بريدك الإلكتروني" 
                     value={formData.user_email} 
                     onChange={handleInputChange} />
              {errors.user_email && <p className="text-red-500 text-xs">{errors.user_email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">الرسالة</label>
              <textarea name="message" 
                        className="border border-gray-300 rounded-md px-4 py-2 w-full h-32" 
                        id="message" 
                        placeholder="اكتب رسالتك هنا" 
                        value={formData.message} 
                        onChange={handleInputChange}></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            <button className="bg-[#f5d329] text-[#00000088] px-4 py-2 rounded-md font-semibold" 
                    type="submit" value="Send">إرسال</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Support;