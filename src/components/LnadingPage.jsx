import React from 'react'
import login from '../assets/login.png'
import parkingSign from '../assets/parking-sign.png'
import parkingLot from '../assets/parking-lot.png'
import register from '../assets/register.png'
import timetable from '../assets/timetable.png'
import compliant from '../assets/compliant.png'
import locationPin from '../assets/location-pin.png'
import locationPinSoon from '../assets/location-pin-soon.png'
import Nav from "./Nav"
 

// ;lkl
import locationGreen from '../assets/location-pin-green.png'

import { Link } from 'react-router-dom'



"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";


export default function LnadingPage() {

//   const position = { lat: 53.54, lng: 10 };
const position = { lat: 24.853610637162078, lng: 46.713016810239395 };

const mapPosition = {lat: 24.809065115350908, lng: 46.714359578260314};

const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);


const cityPosition = {lat: 24.764750751507123, lng: 46.64127318595741};
const digitalPosition = {lat: 24.740567130959125, lng: 46.63443627239909};





  return (

    <>

    <div className='h-screen w-full'>


    <div className=' flex justify-center items-center h-[18vh] sm:h-[20vh] md:h-[25vh] lg:h-[30vh] xl:h-[18vh] '>
        <div className='flex justify-center items-center gap-6 border shadow-2xl p-3 rounded-md max-sm:[10vw] max-sm:mt-20 max-sm:mr-5 max-sm: flex-wrap'>

        <div className='flex justify-center items-center gap-1'>
        <p>دخولك</p>
        <img className='h-[3vh]' src={login}></img>
        </div>
        <span class="material-symbols-outlined">arrow_back</span>
        <div className='flex justify-center items-center gap-1'>
        <p>مكانك</p>
        <img className='h-[3vh]' src={parkingSign}></img>
        </div>
        <span class="material-symbols-outlined">arrow_back</span>
        <div className='flex justify-center items-center gap-1'>
        <p>موقفك</p>
        <img className='h-[4vh]' src={parkingLot}></img>
        </div>
        <span class="material-symbols-outlined">arrow_back</span>
        <div className='flex justify-center items-center gap-1'>
        <p>بياناتك</p>
        <img className='h-[4vh]' src={register}></img>
        </div>
        <span class="material-symbols-outlined">arrow_back</span>
        <div className='flex justify-center items-center gap-1'>
        <p>وقتك</p>
        <img className='h-[4vh]' src={timetable}></img>
        </div>
        <span class="material-symbols-outlined">arrow_back</span>
        <div className='flex justify-center items-center gap-1'>
        <p>الدفع والانهاء</p>
        <img className='h-[3vh]' src={compliant}></img>
        </div>
        </div>
    </div>
  
    <APIProvider apiKey="AIzaSyAj6Z0Nc3kdfc0KTG2ttumKZssMh6ioQO8">
      <div className='flex justify-center  '>
      <div className='h-[80vh] bg-black w-[95vw]  relative border-[1px] border-[#ebe4eb rounded-xl] shadow-sm' style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
      <Map zoom={12} center={mapPosition} mapId="30946c4a5f450f07" mapTypeId="satellite">


    
          <AdvancedMarker position={position} onClick={() => setOpen1(true)}>
            <Link to={"/bookinfo"}>
            <img title='أكاديمية طويق' className="h-[10vh]" src={locationPin}></img>
            {/* <Pin
              background={"#06b8ff"}
              borderColor={"#515cff"}
              glyphColor={"white"}
            /> */}
            </Link>
          </AdvancedMarker>

          <AdvancedMarker position={cityPosition} onClick={() => setOpen1(true)}>          
            <img title="مركز الملك عبدالله المالي" className="h-[10vh]" src={locationPinSoon}></img>
          </AdvancedMarker>

          <AdvancedMarker position={digitalPosition} onClick={() => setOpen2(true)}>          
            <img title='المدينة الرقمية' className="h-[10vh]" src={locationPinSoon}></img>
          </AdvancedMarker>

            {/* {open1 && (
            <InfoWindow position={cityPosition} onCloseClick={() => setOpen1(false)}>
              <p className='font-bold text-center'>قريبًا</p>
            </InfoWindow>
          )}     */}

        {/* {open2 && (
            <InfoWindow position={digitalPosition} onCloseClick={() => setOpen2(false)}>
              <p>قريبًا</p>
            </InfoWindow>
          )}   */}

<div className=' h-[80vh] w-[80vw] flex justify-center items-end'>
<div id="carouselExampleFade" class="carousel slide carousel-fade h-[24vh] w-[30vw] ">
  <div class="carousel-inner">
    <div class="carousel-item active ">
        
      <div className='h-[20vh] w-[30vw] flex justify-center items-center gap-3 bg-[rgba(177,234,221,0.6)] rounded-md'>
        <div>
        <img className="h-[14vh] w-[9vw] rounded-md" src='data:image/jpeg;base64,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'></img>
        </div>
        <div>
        <p className='font-bold mb-2'>أكاديمية طويق</p>
        <hr className='w-[10vw]'></hr>
        <p className='text-xs mt-2 w-[12vw] font-semibold'>محطة قطار S1، مطار الملك خالد الدولي، الرياض 13414</p>
        </div>
      </div>
    </div>


    <div class="carousel-item">
    <div className='h-[20vh] w-[30vw] flex justify-center items-center gap-3 bg-[rgba(177,234,221,0.6)] rounded-md'>
        <div>
        <img className="h-[14vh] w-[9vw] rounded-md" src='https://lh5.googleusercontent.com/p/AF1QipN_EtqEnTc9a_DdYYrLNMyn4pzXdiwU4g7kUEZw=w408-h306-k-no'></img>
        </div>
        <div>
        <p className='font-bold mb-2'>  المدينة الرقمية <span className='text-xs text-red-700'>قريبًا</span></p>
        <hr className='w-[10vw]'></hr>
        <p className='text-xs mt-2 w-[12vw] font-semibold'>طريق الأمير تركي بن عبدالعزيز الأول، Prince Turki Bin Abdulaziz، الرياض</p>
        </div>
      </div>
    </div>


    <div class="carousel-item">
    <div className='h-[20vh] w-[30vw] flex justify-center items-center gap-3 bg-[rgba(177,234,221,0.5)]  rounded-md'>
        <div>
        <img className="h-[14vh] w-[9vw] rounded-md" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcSFRUYGBcaGx0dGxsYGxgbFxgaHBsbGx0YGhsbISwkGx0pIR0dJTYlKS4wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHTIpJCo0MjQyMjIyNDIyMjQwMjQ0MjIyMjIyMjIyMjQ0MjIyMjIyMjIyMjIwMjIyMjIyMjIyMv/AABEIALYBFQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABFEAACAQMCAwUEBgYJAwUBAAABAhEAAyESMQQFQQYTIlFhMnGBkSNCUqGxwTNDYpLR8AcUFVNygqLS4SSjslSTwuLxFv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQACAgEDAgUCBgMAAAAAAAAAAQIRAxIhMUFRBBMiMnFhoRRCUoGRsSPB0f/aAAwDAQACEQMRAD8Asnssp0spB8iINDFLheYspNtoIm2ulsoCUJOiesqcjyNdKPbuRANstMfWWB1I9pB8Wr21m/UjxtF8HLFPpqa5b0mJB9VMj/j40EVspJ7omqA00MVLFKKdgRRSipIpoosZHFMRUhFNFFgRxSK0cU2pmAL6Jj9WGVY+rhszEA+oNS5epR+fsUo3Fv4+4EUoo4pRViI4poqXTS00WBFFICuXiOZ20JGWIJHh2kbgmu62NQUj6wUif2lDAffULJFtq+CvLkldAgUjRlaWmmSRxTxRxSigAIogKcCnigBgKWmiAp4osoYCniiApwKVgDFPFFFPFIAQKcCiikBSsYgKcrTgUVTYUcxSnqbTSqrJopEJRUBX2ENwWyfrm5Cvq6YOPPw7zXRYkHQCWAItn+8LBpeM5UAjPoPOo3yWB9l3uEg/rFQBhoI2BP8AJip+EQs4MwfExkZQ3ACqIeuAfn6Vg9wR3QeoA922MYp4qTTT6a3WyoRHpoYqWKbTTsKI4poqQihiiwAimjzoyKQB6TPSBJn3UpSpNjiraRmm5vdNy5b0AabhUEDESYJY4yBOKBONuXOJW2DjvAuWOVDgdceyDvT8VbnjVJ2YrcxJUhRHhk4HgJ+J9KXZZGucShJ9nU84geE5kDABIMmYA2ivInlnKe74X9npxxxjHZdf6NhzGwZ7yIDEdIzAO3nuD7veBwaauebtIQbZaB5ABY92Dtt7iSKxHNOb3LXEMo8SKqeE+Zkkzv1Fd+LLpxKUjkyY9WRqJoFSTFRcY2hHb7KsfkCa4eD463xRW3L22BV8GJ0mYnyPUeXpUnaJ9HDXT10kfvEL+dXHLqbp7JEyxaUrW7ZmOVcPNlCzRMk+pLNmT762PAeJbDCChUAGZkoWX3fVFYfh7gFu34QTp3aepJrZ9nrmrh7UwCLjgAQMe1IHlmvO1NXR20md3FJ4z8PwFRaa6+LHin0FQaa9TG7ivhHnZF6n8kWmlpqYLSirsmiLTSipYptNFhQEU4FHFKKLGCBRAUgKIClYwYp4ogKKKmxgRTxRRTxSsAQKeKKKUUgBilRxSosCjKEEpgYt24b2E1qdekz7RyCR65qw5fbEFoK7aVOdKqCgM9SYP3+dcNolQs4hWuBWyCxaFcn5R7t81c8JaCoABt9+TJ90zUrkhB6aUUcUtNXZVARQkVIRTaaLCiMimK1IRS007FRDppmbTn1G2n8WIAPrU2muXj7KOAGOxLAd4beogRkLlxnYekztUZZell416kUPEvLm4GBCLcBcAgE6CRkDQ5EnKnfcA1B2X4pbd120h4XSclCNUkMJwWlAY1Lic9DY8WkW7pjxaRJdgxIDD6yY0gEwGAb3A4quVOQtxysB3GQAT9GqnzOPGcxvAxInykrkz0ntFG64uXUOIgAEgdC5Y+QxjyByJEzXnPOn/wCqun9oL8raf81tez/GqVawwPiPQnOlLZMdDgkjpOJBNYfmBBvXmPS6/wDpOn8q6HP0aX0ZlGPr1LqdXZ63L+oDD/S5/Kj7QXnuI9mcOEInoy5I9xj86l7OD6Ro+2n36hUPGiWz0H5mudSalsbNJrc6uUcMoRFK5CicDUIGauOX3NYU5/SviBt3IEVR8BcIttOcgA+QyY/CrXs6ZEYEMxxndVHw60LlsT7F7fGQfT8zQKg1AdCR+NdPFqIUjqDUFpfEvvH416WGV40zhyKptAXV8RHkSPlQRXTxSRcb/EfxqLTWsZWkZSVMi00tNS6aaKdioj00oqSKUUWAEU4FFFOBQMaKeKKKUVIxop4p4p4pDoGKUUUU8UABFPRxSoAqEXxEeKGuQcSrBVwq+S+vuq6C1XcBahlBUjSgwTIWZY4OzE/jVpFKJEUBFKKOKUUyqI4poqSKaKAojimipIpRTsVEcVx8eBpiTIg+yT13lVJU49oGR5dasIqv48lWDSY8tR0mBM6DhmyI0kHzrHO/Sa4V6jj4Ud4l3ZtfgJTSVBII/SAFnjzcDPU1RIoWxbwAx1MZAEgs4Uysk4UgQPrMNzB0XDAss+LUTIDse9gAYUAK9v8AdePcaqueHxKACBpETnTJkgMAMTBz7/qmPPjy/k75cL4OPkn0hIOfpLiiTlQIUMsbEaDnfJgjNVTNLXD9p7h+dxqsuyrytpvtOzdNmuOdonqon9r1qr4TKoT1Jn/NJrST9JnFeou+z49tvPQfky/7q5+OWHcerfjXZyQfR3DB2bb9lrZrm5kfpH/xH7zWK9xq+AuAtalI93n6+VXvI+HKswBmR6xMg9apeXGGifqecSQfP51ZXeJuWUF634ijsWXfXbVNbICNjGR6qOhNN8k9DQ3bgICEgMJxImD1insWyWX3j8aprr2r1xrly0Wg/Ri5aOrxYKSy+FQAT0AIpl4HhoADMphVDL3tvZSzXSBEAGAfj6V1xcoQ07HJJxlLU7NJxvCyxYeY/IVxvbgwd6rVt2pEcXctCS2bghUCiA3eA+03snqPOpOH5gXuvZbOjAc+1cjdiNhuIjeqx5GqjIJwi7aOvTTaakilFdNmBFppaakilFFhRHppRUkUoosYEUQFPFEBSsYIFPFFFPFAAxSijilFFjoGKajilSsKK2xzGxb1LcuLbbUCS2sLL6tPjgqCe7cgEj2W8qsrF1Li67dxLin61t1dZG4lSRPpVaeE7xb/AHtrVbt2wbdt7YA16Sqsr23LOIJwVBAuetdnJ2myh0LbGYVJChQxCwCBEiDHr13rmxZXOTXQ1niUIp9TqimipIporqsxI4poqSKUUWFEcUoo4pRRYARVFxa3Xa6e70qkhGVouOdgSGQ22EjchmGIrQRWddEdmaALgyrJ3Vy4ASTqSEOkHz0T76wzvZGuFbsfhWZbWhlJuaSRbtKTd1Fj49N3wiAMk24ydPlWb5pxJDQTc1ANqDqA66QCdWlVESJ1AAZEiWU1r7S+yoD4XIXWYB3LrbJVpPQp5xFYvtNc8NyCdIFwLIIhWVgMRAgyMR1ELGg8UHsdkuTo7Mtpt287WidyNres7iOu09D0LaeHh0i2PRUb7hXZy9GS3cAYQtlgRAkRYKAg4Mz0IO5ycQ9pIRBidABPuH/H31cuERHllvyS3CP77n32wfxFUHNb5VtY8xI85rT8lH0bGNyP9S3B+VY7n74EbEjHpnFYxfqNZL0knDcfnByACp6ghgYYHf8AOr7jeKm1wzoSofi0BgxgqgZcHaZG+furGcpabqr1bA+NazjXHdWANl41ANh9VM79cnfrWrS1KjF+1m0tvHXr5+rn7Y/L86IHHw/+AHr5/wA7DiucwVCylj4d9+iu3Rv2h08/ia8apkeI5j2HO5RPsnqp+Q6bdD5OZLY7ysnbqfq/tqP7v0/nc0/OuJIv2LcqA63Dp0w4KhSCDAhcxECutOMQw2YkHKMMS79bflH871naC4A/BNqEarg0xk/QtJmBABERG5HlSGi4tGQCd+tFFFwQDIPdv8SPyomWtseTVa7Cnj07kcU0VJFNprUzoCKUUcUoosdAAUUU8U4FKx0NFKKLTTxSsKBilFHFKKQUBFKjilQFFVxt1xwz3UssXvXSSrW2UhUBCazZckxoUB5yCMdKt7VvSqr9kAZLE4EbsST7ySarOKtWxc4XhfAGtop0hbqQfbOkWzoQE2x4Wx06wbeK4/CLZs6fEPdIGKC64VSx2AJO2w99SxVZzS8wOgGBGa62znStnBzvnj27ds2E1PduC2rMDpQmPGRuwEj0zvWZ5fz/AIoB7lx8BwgQWlS2xbUdSuBJYBDPlI3xU3bbjilvh7IfRIe43jKEyxRcqC/6vpG+aznC8a6WtSsXLO0xreVVVwyXM3FJYzojTEk5Arz82WTbSZ34scY02j0rl3N1fwnDQCQYkSAfPIyPn8KtxXnNxyrl3XQGMhlLaIRDvObcycEkCI1YzqeT8yP6O5v5+f8AA/wp4PFtNRyfsy8/hIyi54v3Rd3WCqzEgAAkkkACBMknA+NZrjlLyYNxZB8JDWnIG7ObZVQN8XBny3rQcRxNuGUXEmOjqCJMT7QjfzFZ90JYKbZPimfGigEwCLjKpYnzLn08q6M0jjxI7XC3AUgMEiAhRwGETKnvSp9dIPvrAdpr2pLjDOuIyMy6BhAG8gggEgdInSN9euGSVZmG2pF7xE32027g95YpHpvXn3PiSUU6pa6gySepJ3J1DGGlp21GMcsdkjon7i7VgLPEHH6Mgb7awnnn2gMbFSDsAr21EhfJmH3TQATw94g+0La7nM3EImfSRO8CCFiD0BfF/mU/PFXkeyJh1Lnkls9yv+JPPPjurWF59svvP3V6JyhIsgnYQT8Ls/nWB7Q8O5ZQqMctsrHy8hWWP3Gk/aVHLR9Ih6hv41p7jnurUET/AFtCMwNliSCsbedZ/hOW3iy/Q3faH6t/MelaZuXXwLS91dxxNp8JcMLLScAwBGTjpWsq1IxV0zW8QRLTHX/wb9oeY8th5CF3alvYB8XlP6wep8j8z6xJxFi4WaEciTsrx7KjopHnUTIQZZSMzlW+05mTa9Afl6Gt9Svkw0tLgAcKmmO7WNO2k/3bfsnoQPgP83L2lQLb4eNQi/EKPCSVdZcx4d8bSW2NdGkRBA2jYfYtr/dD7X87VD2iP/S22DMP+qTCgENNwiHgYABJnzAmZoYR5LPkbzbH89WrscZqs7OH6P4t90fxq1YUsfvZpk9qAimipIptNdNnPQEU0VJFKKLHQEU8UUUooAaKUUUUopWMGKUUUUopWFAxSoopUWBEvAMeIe+y28ghSrXdcHSPGpOjZBkDz8zPd3Rqj5JxFx1Oriu8bUwHdm1ssLkG3vqDVbaLg/W3Pla/EW68/HOSVRaOycYt20ybujVVxfBXGctoJHoR5e+u/VcH6z95Afwiq6xzW8zqv0XiIUeBupj7daTyZUt0iYxx3tZke1/KeJu8QTbs3dC27SKUVdJ8IZvEASQGLDoJql4rkd6LSNbcwRq7wXCQWYksrqAy40jSPD4ZJk16fy3nJuWu/YWlTW6qS7AMEcoGHgO8TGd9zXXxPNUtqHeYJiUIeDncSG6HpXG27OlUYpbIMgjBmQR6R41/Me7zrl7k2jCKShwFiTbOSIgwUOwGAvoNvQU5pYaPpAAdi4ZR7pYATXS/BW2ENbQ/5FO/TahpSVMcXKO6Z5lw3F3FYra0aoaNRusNIdRqhATvIJGPEN5rv7i5bu2lNu2CSGbQUt29RySlsDvCekscxtW1/sbhySe6SSIxIIB8oOD6igtdneHURbQqOoVmAbf2h9bfrNdEstxaMVjqSZkOa8WohBdti5GpkcX7mhyMaLjn6I5AgW8HcdKxHHOTctgZAvAggDQ2CSUMkRv+0DuSc17DxHZ4NbNsPjoGt2mQA7qykCVjGCD61l+K/o7uG4HW8hAdmhrZXJVh9WZOZzkxk7QKaBxZVctt6rbKyMdRtkbgnTJIYQNPigxgZPhHXXcl4HXavKg+kXSJAEghQ8LjODHr8jUHBdlHtW9I0jSulCrMdIiJ8QGRirvs7wL20uqw0k3CyiQQV0+hMAmfn81KVoSTTPO+0Hat+FuC21oMSNWLreydj7PXPyqoP9ITf+n/AO63+ytf/SH2VF5FuWkIdFxpElhBJtx54LD11D6wFePPYbVo0nV5QZ+W9QkqBydmwP8ASAf/AE//AHW/2UB7eEnHDj/3D/trG6Ks+zvBd/xFq0fY1amwPYXxNPngR8aewW2eu8i5uwK8KdVq5ethwwGpLVyJCMSCDI88eE9SKsbXOL696tx7Ie2I+k0AO+IJgiA2fu91ZI83Ld9a71yl0A22RRCMcaEfvBLFlYDbSytmrP8AtFOIsreZQbtnR3hdWXXbMeNlRo2OTkKegGa55N8mllze5ujKhbhS1wsysF1LpKlc6gDggAifsxuKXNX4duHtr9Mlq4yvrXS2hkYXAj6zK+JYPuIkVwXOZWtL3btq2XFxbilCILgaTOTpIAzmDmq1OdpcVuHtNcBuMDoXxaB7TaXkQDOnpkCOtJZpLZMHGL5SNbyXlOm2HtsWVvENS6HAYDBEmDieldL2WG4I/Cs5x/Ym895r1vju5cxEalYhQFXUUZC2FHtT1rY8q4C5bQJc4l7+ILMqAk+cqJ++uvHmad1ZnLGmq4K2KUVYXXaTEAagBKr9qD08oqH+sHwjEnfwL1BiMeldK8Qn0MHirqcsU0V2954ZISYB9lQAD12n+fdVfxHG20Ki6rW9RIVgCUPz9npuetH4mP5tg8p9A4pRXFzLnFixBe6kH2c7n7PvPTzzWf5h25sq4tW8uTBZzpRZIyYljgzAGcedV58O4ljl2NdFKKp7/aLh7IVblzxRmBJ+IGxP2d/jVvw90OocTBAIkQYOcg7VUckZcMlwa5CilFHFNFVYqAilRxSpWKjDcRxlxoYF/CRAeGH+Ig+HJAMgT8aKxzm9bC+IBdRM5Cn0AGhfhFR8JbYgJDaiNR0CQPl08lqDjOEuFTaZBcRjlTKERkFSBgjcExvXzy8U/b1O7Q7NFwnOWay5ue2S2naSOkQoGx/5rJcXzgOVdHZYUsQcxGo+IdNt/wCFRcJy8W9QV7gTCocF9TAmAizsBGwmT5VLxDra1Jcm4GhSGYKIeBBVBJgN0IFW/ESktPK7C0dTp5fc1BUZ2JPs6tJIJ6CIGN8kb9a6H49tRt+KUcxgaY2DCMn61VXFOfCERgFzBG2IESDJwf5xU/AFmMu2SYzkz1EgTuPdWWrYZqeV8fcRQYGfaUDGOuk5B91Xj8xRbRuv4VBAMxuYgDqSZiI61nbFggAEkyfrAEDaAGXI+NTds+JFvgQfO4B1HRjuMj2a68SurL1NRK7jeO4a4H02rVtTgQtqX2ckgg7Z6e/pHNw/FWlY6mQpkaEUlVGAJjSB78nO9ZPheaM7To33h5zEDG48o/OpSSDKDYEt7QBMkzBHn1nptTnlabiuDJc2azjIS34AFgFrZQOHgHcot5rjg7aijDzEUHK+YXLY13OIuwThTcuMBIwgkjEncgGCJzvQX+f6QEKllnVBBKK32sxkTuOlaDsMF4jmRJWbfdFtDgHGi2sMpxMtMeddPh15sZXtSsmU2mqJx2o4gZW5jUQC4txuANxOQG67nFCO1164O7lSCYNy2FkZA2nGT5dK3PMew/BXiWNtkJ623ZB+7OmfhXi8lbtxLYLaLjqrzBKoxWHUDJ9RExt5c+bVW3BSvubzhO1rW1PfKWzGr2ckwI8xUfH9qbd5Rb7qFcTNyJmcFdxH8fWqdbH0NwsAuBIKgiT105ET57+uazIuBEUI7xnHtYGxl4AXpOPvMcsdVVZWpnfzvlIdtSBFkgEFcT9rwgjrU3Zjk9213twLbFxlCWwxGmT421ekKJA6TU/BPKzg24OoEAEHqPaPn59alRkKW7eDLAozPJVxsVzkxkkEwQPUhwzyvSwXIz2jaJtPdS2hY6+7XS1pgASs20CmF6mCQwPTTU/M+PLsTYuXUdThHgyJ0s2GaVmB1885Nc3HcxXXduWtBBMMrKiudONXsAlgxmWOM+cUCcyuFrc+FQsBldyu+7ITjc9DhojYCpTXLK4Mxfa8XD+IE+Eg+zh2IUDyAB+Farsxyp7l5bcd1b1amcfpG0jxJPSD5DYmpuaNbtqrqpYF0DmJKHXEQM5EiZ6ic1a8x4q5wzFUi2xELcKzgvqDQVKxpBQ+WonpSbTpvgaiuTe8Ei21CITpHQkk9OrST8amDAnKqfeB6Vj+yvPLt5j3ty2QuPCkEmNmYNCMMHSygwaXbDtHc4dYtBCTE+2XUGYOBEY61069uBaUt7NQ48RJ8h+J29fWoLY8OrMAAxMzAzPmBPxgV59wHb6+Gi4oK7zpM+okekVoeD7YG4ABwrMTIhWnHllY+FJZVwyaT6l8VJmTmSN99UER7vyrG9sOzd7i2V7dwr4STJfoPYw0ZMdMZNWbdtOGBC3bVy2SuqCFmA0TuPrYqde03C3AVtXALsHSt1XAlsyeh88Hp0q5TiyYxaPFbnL7uoqbLHRjAYjaTBGCcH5Gu/jOERQl23ctozINQYqGUhQDoB8Uk6sj0r0vknFIms8VxCASChdkQGRJCas6RMRn7qx55GvF6kslQLd10JBWFUO4VgASSDG5iZBrLUnTRootpmj7PdlEhL733cwpUoSg9kAT9Y4xuPdWzVYx/wDtcvJOAFq0lsMuBA2B+45NdnFBraM8TAneMe813YpQjHsc84tsUU1edc+7dXEcJbAUCQY8WrbZvMHBEVWcL2z4hmEtORIBKg4jJ8vzpy8RGJKg2esRSrj4HjBctq58MjZpHvidxT1prRNHkfC9qzbtsi6iWnrlR5H+YArtXmN8p3i2oMgmPsmFXEzGD+9U3KuwlwS1wghRIWMExMGf5/PQcu5XctWzduEYYTkDUxIAj3SFA3hRXh5YxjvFX3O2OoruWszuwuAqQyyDiHdQ2ke4MBPrFQ83sKQA+omQQwIEEA4wPZyDj+NaB08L38d2XVZxqLDfSemPy8qr7bo3EW7TGVFt7jfsiSQT0OUOBG4qIYpusi2Q5u3TKK1zFdJRvbXYsQC4MAEjzBDT8NqsuTSDLRO5Y4x039/n51ruXdnLVtA91UDE6mJjTbDNItKTGBMT1InyAsOIPB8EneXCltTIBI1T1gb10PDbIopFuqIcEEDqMfcMGsd235n3i2iuoQciV0Z1bYmYO8xvXfx3a/g0YldV2Sc6AAP34PmOowfSsvzPm1zjA+oyin6NQgAX0jzjEmfhW6VhJo4+XcQ4yFUeL6pgnMADTgwc5O1WHMuMFtSrK7ZjUCp3SMz6GMg7z5VX8NxRVgdAC7aVnpjJG1WfEJ3i6igZABqMtIAg507nf/mspR9VtElJw9sXDEM/WBCkLgYGJ91eo/0W244ri7irOhAijrDOYHyt/dXmN/h171Utg+0oOcCTmMDzHyr1z+iNZt8Td6vcVf3V1R/3K78L/wAUn8IzauSR6CnFgmIYe8QPOvm7+uwWDEgku7DAILER4YGoz9WvovifCjt5Kx+QJrwPhOFH6QopHQMIaBG5bcydq5Msq5N9N8HfwfGTbZGuakKgECVldxKjOqfLzriXhdVvWhAOoQT1B6DVvvOdjMVYpytHuAlY2LoplSNwIJhJjyHXfeuu/wAstNxNu33hS2zgBVzrnI2/RgdWPngZrmq/aydLIeEBNpkZVUxqUDSDvMmPdmqm876Wh9Lzqk6fD7syoM59xxmtty/lFtrj2iSwtqrjLGVcsFyMj2TOk7e+j5l2PtX/ANGzIABKLJQ7dWBJnffMRiZE48bu2NqjypddtyLjKScGfEDjM9dto+6as7nFpbRBbYyfIztifFnI9INWvGdkeIQOVVtKkMJKljmN4icxHX8c81p3ulSo1IdRBywKmCuhcn3CdtxWzjqdsk6r/Mhcti2Trl0M4iBuTK758xkjfavR7vdtwTLcuWrfdsFU3GdRpa3rZSWmSfEQBIAxiCB50eEuJZa+ykQ6YCHT4iBIP1JxuATEYrYcxVbvBXVOAvdXFUP4gpF1ACh9ifeQfnRGMeOm5o3UG/qa/heGt2OHt200qGjBLambEkYOoneSa8w7QvcPGMovC7G4ZHQ2kPiKtrABA1dCceW1aXs9d1WbCm4W03GCZnUhyDgRC5HuE42qs7R8nsi80LdYsNbvGoqdIjS5MzEY2AHUmt5yS/gwxrUn8meSwO87v6NXkhmJJ0+okCScLAOIracv4LRa1reIdVJXTbbS2nJWN59xPT3VQ8l7NFomRoIBIknePLGMxkQ0eVbHmXCFeGuW7a6gUCvqRmOIOrcDpv0gZxXPJanfY042M63Mrl06rhcaQYSVnxCNRDgR1M+Y+NWHZvlyXAwNzU4XwRAaTkeL6uk59S591Zu3qb218LMdRKpq0aTLELInaARkkCdidJ2cuvrUgqoMgoywyxIGRviJOP4EF6twk9K2NGOFVra2iqld4YLGqRmDiYLVlez7dzzPiuHChULqfIAMk+ADEFvduOuK179MwdR+WRP4Vh+dAjmdq4qiL9ooSSYlHYMcETACe/Nbe1fBUKcq7/8AD0K5eQe06j3kVke1PaaxZlFuFu8tujW7eCNQxcn2Z6ZnfEVDwHaXgVLh1soqs6g6jdZtLaQwXSTDDxCPMVle1faBb/gEaNeCqungBB2LxqPqldOXeNMyVJ7Gd4dLZEAsI9Rj4VMiBCPEMj0HyNDw9m40aUZ/LQpMdYmMb1Lxa6CmtSr9AQZPTMxXHK7KOm3zhwNLhnjbVpgTvpgbGnqtuIJlhk5/L8QR8KVVq+SdKPSn4K+wkrdn1Q4n0rh4ngeLAClngsog61BGSZJwNtoNeiHi7fn9xqv5neFzQqyYJYx0IECf3jWMsLim7N8W81uZ4Wr4ti2BgEsAVYrk7iBEwaiW1eBVtIBiJ0kYnAnTW9XwiPKok41Z6014eTXuCc7lZieI4V7mrvAbk7hmaD12JjyxXNe4V2IQ20KjaYIAJyAJ/ma9Ht3w20n0H50PFcQltdbkgTHU5Puofh31kJM8s5lyGwc9yCfJSV+5TQryzhrYCC2yzBk6tPlEk+leo2OLtXBKmemxGfjR3GtgSwEf4f8AinGEo/mBxb6HmqcpsAewemQzdTU1nk1oL4dWZPtGPca3jcfYgBYJmB4Yz5ZFGHSI7seuF/hVaZfqFp+n2MBxPLrdu27y0qrNkjJUFhOPOrD+jrmNu3w4tG4LbtcZvFEMcIADtPhGDVz2ya2nAXyFUMUCiABGtlXHzrzPgT9Go9J+Zn867IX5Dt3bX2M60z/Y9j5grsCS2AjgnrBU7AYmsHe5AG0lrkhZOUMEkASRq9/zqTsxzq4ty3YZtVp20kPJ0qR9U7j3belb1rHDxkJHyrknFN2zXd8HnPCchuYW3fABiRoIkj2jM4n8IFC/BqXa3ccFwCZTUMLgE5361vP63wKGe8sg+jifuNcl65y5mMvakiDl8g79YNQ8cX1QOTrkyXBBrJL2L5QkCQVDIwWdIIKk+exq64Dn7srd49o3AILJrCkSFA0s2GLECFJyT8LNLfLnt6SbRTAAk6Y6RmuXRypdQUhSRpx3hBBYP4VMqSGAIMSDtRGKj1BpsY8z4gmVWyVggZZwSCFJY6owZEe/ODVNf4G6/e3PoF1qFkB9S6FNyQdUzobp0AHSrVea8Cytbe3cyGUqouBWkiQFDSJImYG5PU0L824FRpHD3WByQAInQEJbU4k6YE/nT9PcEn2M7zbhbgsPbZwxQEgEiQFZZjxSVwBJkYFWXHcLd7tkt6NDBZQqCDAU9COpB+Nc3PubcPct3lt2HBKQrMbcamgaiQS2IUaZjwjGAam7Q3NFu0FXS5AbWCekADTOeh+XlFRpS4Zpb0u0Z/Rx1tT3dy0tpT4tBBKl2zjJkkDbyHSKLibXEFTca5krofDZiDAEDJmIM9Rmpn45QG71EJcQIDKAVJIIi4RO2TO1MnaZFAVbT7QZuECFBMFlyM5xApupGWlrY6+R3eK4eFeSryrDS7ARpCkmAFgkdTgHap+J51eLga5DeAgWwQxn6vUAgZkn2em1VVztQ9xSBaRRInxXCTBIkBQSx2AkwMnqa4P7dv8AspbWAZBCOZAM41dMnHr13q241W4V12LHmfF/1jR9PoCkSuk+IgbTO2dvP3Yripdwy8RdVoIAVSQBsQIX161Dc5jxJA0LpgZ8CqceoG3p60gbrk6rjR+yfOdyDnfY+WKy43sLjZfcIvFW4jjC25C3LZ9N/rTmuXm3GXO84QuLY0XGgoriTcy0q20lZiapuIQk+JdXWQ0sRkjJnIJPT8aA2iXR1VgFcESemCTkCT8zVJt8vYcWk7XJpOaWuE8du3ZtWrpaDcZ3OkEwXVSwExkSYxOYrMX+BtuJL21ecFtmTfXA36H3E5q4581i5cW6sHUq6mDD2lGnxTgeEDNVV62o9pUYH1zP4fEGn5j6kzSUjq5OXW3xC96ql1BQ22ZYdDqEMMqCMegoedB7lqwLlxe8QOH1FyTLAqwaJmN59KiQADAAzO5if4em1J74A6fEagfdtS818UR1OWzwVph4+J0xsIukx6xIp66/6wF2x8Sv3fGlR5n0+4GqftFbiVDHzAt567ePO1aTkB7y135EapI/wiY/Ospw3K7dsAC6B7lE/OSf59asVIChP61d0gRCkqI2jwr5VctclTRcZJboD+2y7s0NlnPuLaVX3wuKs/7esKqiTJ3AGcdMkVVjhrH95cPpiPL7FMOF4bzPrj/6Uk83ZEl/w3aS2BCJ+8Qp/HNVfH8yuNJZhpmQCzFZkjH31ClrhgIBb3ZH/wAKZuG4Xoz+vUE+eUn76pPL1SGmczc94m0hVFG5zp1GfQMR+FU3FdpeNfAuMWP1RpXy6AA+fU7Voe7sDa5dHuLA/ctGjWB+sufGW/8AJDQoy6o01rj/AGZYc34/AAJEzMamn01H+fSob3POOB8V24TPsnUpjz8Jx5VsTc4eZIU++2J+YQUNxeCbBtqQdwQ8eflVaH2E6fVmL4nnF67ba25cyAf0jMuCDGk9cfdXVw2lUVSNgNvWtG/BcAdrYHrDH16ipU4bgxkJ8dOf/GrTlGOlLa7J0K7szd1zBCTrAkQYPwI2Ncapfb2p33ZtXWBsK2ItcMCW0/6T+Ypn/qh9q3PpFZSjOT3SHpXcyTWbgGXX46jmcevnUkgwBcCvPlG/QDrWjKcFJItsCdzn/dE1IvEcMsRbOP2V9epb1PzqfJkTpXczl246R4wZmBEHG8AGje4zoNOoyPPM74gEfOtJ/aNiI7mR5ELHy1UB5hZ3FhZjeFn86PIZfp7szAsOy4R/UnUTIkRq3iKktrcGNFyPSSPvMxWhTmdpTI4e3PUwsn3wtH/b0bWk/n/LT8ljWldWUFzhzciDdbppGkAkZkahMnbeu7mfFcTeVLZtaQkwQQSQRHuOy7edd5583S2g+f5EU39u3PsoP8v8TTWGRTyRM+/CXiFc287YU6gOmQMCh/sS6wju/UQDAI94nz6eW1X551d+0B7lFRNzO79v/Sv8KawPuQ5RfKZV2+zN8kRAiSMmekTjbf51N/8Ayt4gkkzM4Kyc5GWwOvw2rqbmN7+8b8PwqF+Mun9Y/wC838apYPqLXHsHb7Fsc960+sSPQZrsTslp9q4D5S0AfdVWblw7sT8SfzpmDdaf4ddWHmJcJF83I7QGk3LQHqxP4mua5yHhNu+tgYwJMDy9qqkKaFlNC8PEbzPsv4Lccs4EHN2fQao+QNN/U+XD7Z+DfzON6pADTFDVrBEl5ZfT+C8Q8Am1pjG2P4mnPMeDXAtPHliPlNZ9lNROpq/Ih2IeWXc0jc64b+4b4sP40qyppVXkw7E+bLuaRVB86MoPWnpVIBG0N6QRfWlSoKFA9aUD1p6VACKL60HdClSoAbu19aXdp5H50qVAx1VR0NTIV8j938KVKgB2uj1+6oXA9aVKkBEQvkfnQkL5GlSpgN4fI0iBSpUCGgU0CnpUwGxTilSpgI0qVKgATQk0qVADF6HVTUqAEWigNylSoJBaKjZvfSpVQDM1QvcHr/InzpUqESzmdqVKlTJP/9k='></img>
        </div>
        <div>
        <p className='font-bold mb-2'> مركز الملك عبدالله المالي <span className='text-xs text-red-700'>قريبًا</span></p>
        <hr className='w-[10vw]'></hr>
        <p className='text-xs mt-2 w-[12vw] font-semibold'>العقيق، الرياض 13519</p>
        </div>
      </div>
    </div>





  
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

        </Map>


      </div>
      </div>

    </APIProvider>

   

    


    </div>
    </>
  );

}
