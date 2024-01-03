import React from 'react'
import { Link } from 'react-router-dom/dist'

function AddCard() {
  return (
    <div className='flex justify-center'>
  <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5  flex ">
 
        <h3 class="text-lg leading-6 font-medium text-gray-900">
        تسجيل بطاقة الدفع
 
        </h3>
             <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75V14.25ZM9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15C10.25 14.5858 9.91421 14.25 9.5 14.25V15.75ZM5 6.75H19V5.25H5V6.75ZM20.25 8V16H21.75V8H20.25ZM19 17.25H5V18.75H19V17.25ZM3.75 16V8H2.25V16H3.75ZM5 17.25C4.30964 17.25 3.75 16.6904 3.75 16H2.25C2.25 17.5188 3.48122 18.75 5 18.75V17.25ZM20.25 16C20.25 16.6904 19.6904 17.25 19 17.25V18.75C20.5188 18.75 21.75 17.5188 21.75 16H20.25ZM19 6.75C19.6904 6.75 20.25 7.30964 20.25 8H21.75C21.75 6.48122 20.5188 5.25 19 5.25V6.75ZM5 5.25C3.48122 5.25 2.25 6.48122 2.25 8H3.75C3.75 7.30964 4.30964 6.75 5 6.75V5.25ZM3 10.75H21V9.25H3V10.75ZM6 15.75H9.5V14.25H6V15.75Z"
                  fill="black"
                ></path></svg>
    </div>
    <br />
    <div className='flex flex-col border-t p-5'>
    
        <ul className='flex gap-20 max-sm:gap-7 max-sm:text-sm '>
            <li>التاريخ</li>
            <li>الاسم</li>
            <li>CVV</li>
            <li>البنك</li>
            <li className=''>
            <input type="checkbox" className="checkbox checkbox-success" />
                </li>  
        </ul>
    
        <ul className='flex gap-12 text-2xl max-sm:text-sm max-sm:gap-5 max-sm:font-bold'>
                <li>10/24</li>
                <li>Fahad</li>
                <li>123</li>
                <li>بنك الانماء</li>
            
           <li>
            
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75V14.25ZM9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15C10.25 14.5858 9.91421 14.25 9.5 14.25V15.75ZM5 6.75H19V5.25H5V6.75ZM20.25 8V16H21.75V8H20.25ZM19 17.25H5V18.75H19V17.25ZM3.75 16V8H2.25V16H3.75ZM5 17.25C4.30964 17.25 3.75 16.6904 3.75 16H2.25C2.25 17.5188 3.48122 18.75 5 18.75V17.25ZM20.25 16C20.25 16.6904 19.6904 17.25 19 17.25V18.75C20.5188 18.75 21.75 17.5188 21.75 16H20.25ZM19 6.75C19.6904 6.75 20.25 7.30964 20.25 8H21.75C21.75 6.48122 20.5188 5.25 19 5.25V6.75ZM5 5.25C3.48122 5.25 2.25 6.48122 2.25 8H3.75C3.75 7.30964 4.30964 6.75 5 6.75V5.25ZM3 10.75H21V9.25H3V10.75ZM6 15.75H9.5V14.25H6V15.75Z"
                  fill="black"
                ></path>
              </svg>
              </li>
            </ul>
    </div>
    <div className='flex flex-col border-t p-5'>
    
    <ul className='flex gap-20 max-sm:gap-7 max-sm:text-sm'>
            <li>التاريخ</li>
            <li>الاسم</li>
            <li>CVV</li>
            <li>البنك</li>
            <li className=''>
            <input type="checkbox" className="checkbox checkbox-success" /> 
                </li>  
        </ul>
    
        <ul className='flex gap-12 text-2xl max-sm:text-sm max-sm:gap-5 max-sm:font-bold'>
                <li>10/24</li>
                <li>Fahad</li>
                <li>123</li>
                <li>بنك الانماء</li>
            
           <li>
            
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 14.25C5.58579 14.25 5.25 14.5858 5.25 15C5.25 15.4142 5.58579 15.75 6 15.75V14.25ZM9.5 15.75C9.91421 15.75 10.25 15.4142 10.25 15C10.25 14.5858 9.91421 14.25 9.5 14.25V15.75ZM5 6.75H19V5.25H5V6.75ZM20.25 8V16H21.75V8H20.25ZM19 17.25H5V18.75H19V17.25ZM3.75 16V8H2.25V16H3.75ZM5 17.25C4.30964 17.25 3.75 16.6904 3.75 16H2.25C2.25 17.5188 3.48122 18.75 5 18.75V17.25ZM20.25 16C20.25 16.6904 19.6904 17.25 19 17.25V18.75C20.5188 18.75 21.75 17.5188 21.75 16H20.25ZM19 6.75C19.6904 6.75 20.25 7.30964 20.25 8H21.75C21.75 6.48122 20.5188 5.25 19 5.25V6.75ZM5 5.25C3.48122 5.25 2.25 6.48122 2.25 8H3.75C3.75 7.30964 4.30964 6.75 5 6.75V5.25ZM3 10.75H21V9.25H3V10.75ZM6 15.75H9.5V14.25H6V15.75Z"
                  fill="black"
                ></path>
              </svg>
              </li>
            </ul>
    </div>
 
 

 <div class=" bg-white flex items-center justify-center px-5 pb-10 pt-16">
    <div class="w-full mx-auto rounded-lg bg-[#1BB66E]/10 shadow-lg p-5 text-gray-700" >
        <div class="w-full pt-1 pb-5">
            
        </div>
        <div class="mb-10">
            <h1 class="text-center font-bold text-xl uppercase">إضافة بطاقة جديدة</h1>
        </div>
        <div class="mb-3 flex -mx-2">
            <div class="px-2">
                <label for="type1" class="flex items-center cursor-pointer">
                    <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3"/>
                </label>
            </div>
           
        </div>
        <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">ادخل الاسم الموجود على البطاقة</label>
            <div>
                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="fahad" type="text"/>
            </div>
        </div>
        <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">ادخل رقم البطاقة المكون من 16 رقم</label>
            <div>
                <input class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
            </div>
        </div>
        <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
                <label class="font-bold text-sm mb-2 ml-1">تاريخ الانتهاء</label>
                <div>
                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div class="px-2 w-1/2">
                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div class="mb-10">
            <label class="font-bold text-sm mb-2 ml-1">CVV</label>
            <div>
                <input class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
            </div>
        </div>
        <div>
            <Link to="/ticket">
            <button class="block w-full max-w-xs mx-auto btn btn-neutral  text-white rounded-lg px-3 py-3 font-semibold"> شراء الآن</button>

            </Link>
        </div>
    </div>
</div>


    </div>

    </div>
  )
}

export default AddCard