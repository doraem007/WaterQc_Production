// 'use client'

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { alertGoodMessage } from '@/lib/alertMessage'
// import { alertBadMessage } from '@/lib/alertMessage'

// import { MdOutlineGeneratingTokens } from "react-icons/md";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { ImBin } from "react-icons/im";
// import { MdOutlineTextsms } from "react-icons/md";

// export default function Tokenline({ orgId }) {
//     const [token, setToken] = useState(null);
//     const [text, setText] = useState("")
//     const [addToken, setAddToken] = useState("")

//     async function fetchData() {
//         try {
//             const res = await axios.get(`https://waterqc.nareubad.work/api/org/${orgId}`);
//             setToken(res.data.token);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     async function creAteToken(event) {
//         event.preventDefault();
//         try {
//             await axios.put(`api/sendLine/${orgId}`, { token: addToken })
//             alertGoodMessage("เพิ่มสำเร็จ")
//             fetchData();
//         } catch (error) {
//             console.log(error);
//             alertBadMessage("เพิ่มไม่สำเร็จ")
//         }
//     }

//     async function editLine(event) {
//         event.preventDefault();
//         try {
//             await axios.put(`api/sendLine/${orgId}`, { token })
//             alertGoodMessage("แก้ไขสำเร็จ")
//             fetchData();
//         } catch (error) {
//             console.log(error);
//             alertBadMessage("แก้ไขไม่สำเร็จ")
//         }
//     }

//     async function deleteToken(event) {
//         event.preventDefault();
//         try {
//             await axios.post(`api/sendLine/${orgId}`)
//             alertGoodMessage("ลบสำเร็จ")
//             fetchData();
//         } catch (error) {
//             console.log(error);
//             alertGoodMessage("ลบไม่สำเร็จ")
//         }
//     }

//     async function sendText(event) {
//         event.preventDefault();
//         try {
//             await axios.post('api/sendLine', {
//                 message: text,
//                 token: token
//             })
//             alertGoodMessage("ส่งสำเร็จ")
//             setText("")
//         } catch (error) {
//             console.log(error);
//             alertGoodMessage("ส่งไม่สำเร็จ")
//         }
//     }

//     return (
//         <div>
//             <div><button className='btn text-lg btn-success text-white mb-4 no-animation cursor-auto hover:bg-success hover:border-transparent  px-6	'>Line</button></div>
//             <div>
//                 <div>

//                     {token == null ? (
//                         <div className="flex flex-col sm:flex-row">
//                             <label className="input input-bordered flex items-center gap-2 w-full sm:w-[500px]">
//                                 <MdOutlineGeneratingTokens className='text-3xl' />
//                                 <input value={addToken} type="text" className="grow" onChange={(event) => setAddToken(event.target.value)} />
//                             </label>
//                             <button type='submit' className="btn btn-success w-full sm:w-20 text-white mt-2 sm:mt-0 sm:ml-4" onClick={creAteToken}>ส่ง <FaRegCheckCircle className="text-xl" /></button>
//                         </div>
//                     ) : (
//                         <>
//                             <div className='flex flex-col sm:flex-row mb-4 '>
//                                 <label className="input input-bordered flex items-center gap-2 w-full sm:w-[500px]">
//                                     <MdOutlineGeneratingTokens className='text-3xl' />
//                                     <input value={token} type="text" className="grow w-full " onChange={(event) => setToken(event.target.value)} />
//                                 </label>
//                                 <div className=' mt-2 sm:mt-0 flex items-center justify-between'>
//                                     <button type='submit' className="btn btn-warning w-[48%] sm:w-20 text-white sm:mx-1" onClick={editLine}>แก้ไข</button>
//                                     <button type='submit' className="btn btn-error w-[48%] sm:w-20 text-white sm:mx-1" onClick={deleteToken}><ImBin className="text-xl" /></button>
//                                 </div>
//                             </div>
//                             <div className='flex flex-col sm:flex-row' >
//                                 <label className="input input-bordered flex items-center gap-2 w-full sm:w-[500px]">
//                                     <MdOutlineTextsms className='text-2xl' />
//                                     <input value={text} type="text" className="grow w-full" onChange={(event) => setText(event.target.value)} />
//                                 </label>
//                                 <button type='submit' className="btn btn-success w-full sm:w-20 text-white mt-2 sm:mt-0 sm:mx-1" onClick={sendText}>ส่ง</button>
//                             </div>
//                         </>
//                     )}

//                 </div>
//             </div>
//         </div>
//     );
// }
// ZCTCjPcESWoQFyceranaPHHQDpkF6QAGqPHRHbdKJx0