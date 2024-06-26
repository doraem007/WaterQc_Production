import Navbar from "../common/navbar";
import Setting from "../common/setting"

export default function SettingPage({ orgId, stationId }) {
    return (
        <section className="w-full overflow-y-auto">
            <Navbar>ตั้งค่า</Navbar>
            <Setting orgId={orgId} stationId={stationId} />
        </section>
    );
}

// "use client"

// import Navbar from '../common/navbar'
// import Tokenline from '../common/tokenline'
// import { useState } from 'react'
// import axios from 'axios';

// const useMinMax = (id) => {
//   const [maxValue, setMaxValue] = useState("");
//   const [minValue, setMinValue] = useState("");

//   const handleMinMaxSubmit = async () => {
//     try {
//       await axios.post(`https://waterqc.nareubad.work/api/setalert/${id}`, {
//         max: maxValue,
//         min: minValue
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return {
//     maxValue,
//     setMaxValue,
//     minValue,
//     setMinValue,
//     handleMinMaxSubmit
//   };
// }

// export default function SetAlertPage() {

//   const temp = useMinMax(1);
//   const ph = useMinMax(2);
//   const tds = useMinMax(3);
//   const turbidity = useMinMax(4);
//   const chlorine = useMinMax(5);
//   const flow = useMinMax(6);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     ph.handleMinMaxSubmit();
//     temp.handleMinMaxSubmit();
//     tds.handleMinMaxSubmit();
//     turbidity.handleMinMaxSubmit();
//     chlorine.handleMinMaxSubmit();
//     flow.handleMinMaxSubmit();
//   }

//   return (
//     <>
//       <div className='w-full overflow-auto'>
//         <Navbar>ตั้งค่าการแจ้งเตือน</Navbar>
//         <Tokenline></Tokenline>
//         <div className="py-4 sm:flex justify-center items-center w-full">
//           <div className='wrapper w-full sm:w-[96%] h-screen sm:max-h-[750px]  bg-blue-400   sm:shadow-md sm:rounded-3xl sm:py-6 pt-10 px-2'>
//             <form onSubmit={handleSubmit}>

//               <p className='text-3xl flex justify-center pt-10  font-semibold text-center text-white items-center relative '>
//                 ตั้งค่าการแจ้งเตือน
//                 {/* Line */}
//                 <a className=' hidden sm:flex bg-green-500 text-lg text-white ml-4 sm:px-6 py-3 rounded-lg shadow-lg border-0 '>Line</a>
//               </p>

//               <div className=' text-center'>
//                 <h1 className='sm:mx-6 mt-8 text-xs sm:text-sm text-balance text-white'>*** หากเลยค่าต่ำสุด-สูงสุดที่ตั้งค่าไว้จะแสดงแจ้งเตือนให้ทราบผ่านไลน์ *** </h1>
//               </div>

//               {/* temp */}
//               <div className=' flex justify-center mt-6  '>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">
//                   <input
//                     onChange={(e) => temp.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าต่ำสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//               border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500
//                         uppercase">
//                     อุณหภูมิ
//                   </label>
//                 </div>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input placeholder="ค่าสูงสุด"
//                     onChange={(e) => temp.setMaxValue(e.target.value)}
//                     type="text"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500
//                         uppercase">
//                     อุณหภูมิ
//                   </label>
//                 </div>
//               </div>

//               {/* ph */}
//               <div className='flex justify-center'>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input
//                     onChange={(e) => ph.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าต่ำสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//                 border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//                   text-white outline outline-0 transition-all placeholder-shown:border
//                     placeholder-shown:border-t-white
//                     focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                     focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                       placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 "
//                   />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all 
//                         peer-placeholder-shown:text-base 
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     พลังแห่งไฮโดรเจน
//                   </label>
//                 </div>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input
//                     onChange={(e) => ph.setMaxValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all 
//                         peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     พลังแห่งไฮโดรเจน
//                   </label>
//                 </div>

//               </div>

//               {/* tds */}

//               <div className=' flex justify-center '>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => tds.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าต่ำสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     สารแขวนลอย
//                   </label>
//                 </div>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => tds.setMaxValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//              border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     สารแขวนลอย
//                   </label>
//                 </div>

//               </div>

//               {/* turbidity */}

//               <div className='flex justify-center max-w-sreen sm:w-auto'>

//                 <div className="relative h-12 w-auto sm:w-72 m-2 ">
//                   <input

//                     onChange={(e) => turbidity.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าต่ำสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//               border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     ความขุ่น
//                   </label>
//                 </div>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => turbidity.setMaxValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     ความขุ่น
//                   </label>
//                 </div>
//               </div>

//               {/* chlorine */}

//               <div className='flex justify-center'>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => chlorine.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าต่ำสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     คลอรีน
//                   </label>
//                 </div>

//                 <div className="relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => chlorine.setMaxValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all peer-placeholder-shown:text-base
//                         peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent peer-focus:text-[14px] 
//                         peer-focus:leading-tight peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent peer-disabled:before:border-transparent 
//                         peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-red-500">
//                     คลอรีน
//                   </label>
//                 </div>

//               </div>

//               {/* flow */}

//               <div className='flex justify-center'>

//                 <div className=" relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => flow.setMinValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all 
//                         sm:peer-placeholder-shown:text-base
//                         sm:peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-[14px]
//                         peer-placeholder-shown:leading-[4.3]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent 
//                         sm:peer-focus:text-[14px] 
//                         peer-focus:text-[14px] 
//                         sm:peer-focus:leading-tight 
//                         peer-focus:leading-tight 
//                         peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent 
//                         peer-disabled:before:border-transparent
//                         sm:peer-disabled:text-base peer-disabled:text-xs 
//                         peer-disabled:after:border-transparent 
//                         peer-disabled:peer-placeholder-shown:text-red-500">
//                     อัตตราการไหลของน้ำ
//                   </label>
//                 </div>
//                 <div className=" relative h-12 w-auto sm:w-72 m-2">

//                   <input

//                     onChange={(e) => flow.setMaxValue(e.target.value)}
//                     type="text"
//                     placeholder="ค่าสูงสุด"
//                     className="peer h-full w-full rounded-[7px] border border-white
//             border-t-transparent bg-transparent px-3 py-4 font-sans text-base font-normal
//               text-white outline outline-0 transition-all placeholder-shown:border
//                 placeholder-shown:border-t-white
//                 focus:border-2 focus:border-blue-700 focus:border-t-transparent
//                 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50
//                   placeholder:opacity-0 focus:placeholder:opacity-100 placeholder:text-gray-200 " />
//                   <label
//                     className="before:content[' '] after:content[' '] pointer-events-none absolute
//               left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
//                 text-[14px] font-normal leading-tight text-green-400 transition-all
//                 before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
//                   before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t
//                   before:border-l before:border-white before:transition-all
//                     after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border
//                     after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
//                       after:border-t after:border-r after:border-white
//                       after:transition-all 
//                         sm:peer-placeholder-shown:text-base
//                         sm:peer-placeholder-shown:leading-[3.75]
//                         peer-placeholder-shown:text-[14px]
//                         peer-placeholder-shown:leading-[4.3]
//                         peer-placeholder-shown:text-white
//                         peer-placeholder-shown:before:border-transparent 
//                         peer-placeholder-shown:after:border-transparent 
//                         sm:peer-focus:text-[14px] 
//                         peer-focus:text-[14px] 
//                         sm:peer-focus:leading-tight 
//                         peer-focus:leading-tight 
//                         peer-focus:text-white
//                         peer-focus:before:border-t-2 peer-focus:before:border-l-2 
//                         peer-focus:before:!border-blue-700 peer-focus:after:border-t-2 
//                         peer-focus:after:border-r-2 peer-focus:after:!border-blue-700 
//                         peer-disabled:text-transparent 
//                         peer-disabled:before:border-transparent
//                         sm:peer-disabled:text-base peer-disabled:text-xs 
//                         peer-disabled:after:border-transparent 
//                         peer-disabled:peer-placeholder-shown:text-red-500">
//                     อัตตราการไหลของน้ำ
//                   </label>
//                 </div>
//               </div>

//               <div className='flex justify-center mt-6 xs:justify-center'>
//                 <button
//                   type='submit'
//                   className='btn bg-green-500 hover:bg-green-600 w-40 h-11 border-none outline-none rounded-full shadow-lg cursor-pointer text-lg   text-white font-semibold my-5'>
//                   ยืนยัน
//                 </button>
//               </div>

//             </form>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }