import React from 'react'
import m from '../assets/Logo.png'
import p from '../assets/aboutFig.jpg'

export default function About() {
  return (
    <>
    <div className='w-full flex  justify-center items-center'>
        <div className='w-[70dvw] h-[60dvh] max-sm:text-sm mt-16 flex gap-3'>
        <div className='h-[60dvh] w-[65dvw] bg-gradient-to-b from-[#d9d9d90f] via-[#2d61e310] to-[#d9d9d90f] rounded-md flex justify-center items-center max-sm:w-[80vw]'>

            <div className='w-[40vw] text-justify flex flex-col gap-6 max-sm:w-[50vw]'>
            <p>
            الكثير منّا يتعرض لمواقف تُعيقه عن إنجاز مهمّته التي سعى لها , وذلك عندما يكون لدى الشخص موعد مهم كموعد مستشفى أو اجتماع طارئ وعند حضوره يتفاجأ بأن جميع مواقف السيارات مشغولة ولا يجد موقف لسيارته , فيضطر إلى أن يتأخر عن موعده وأحيانًا إلغائه .

            </p>

            <div>

            <div className='flex flex-wrap'>
            <div className='flex gap-2 flex-wrap'>
                <p> - من هنا جاءت فكرة</p>
                <img className='h-[5vh] max-sm:h-[3vh]' src={m} alt="صورة"/>
                <p>وهو موقع يهدف إلى تسهيل عملية حجز مواقف السيارات بكل يسر ويساهم من خلال الحجز المسبق في توفير الوقت والجهد.</p>
            </div>
            </div>
         
            </div>

            </div>

        </div>

            <div className=" max-sm:hidden h-[60vh] w-[25vw] rounded-md bg-cover " style={{ backgroundImage: `url(${p})` }}>
            <div className='w-[25vw]'></div>
            </div>



        </div>
    </div>
    </>
  )
}
