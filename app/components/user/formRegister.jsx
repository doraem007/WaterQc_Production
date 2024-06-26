'use client'

import { alertGoodMessage } from "@/lib/alertMessage";
import { alertBadMessage } from "@/lib/alertMessage";
import { RxCross1 } from "react-icons/rx";
import Model from "../layout/model";
import { useState } from "react";
import axios from "axios";

export default function FormRegister({ setOpenform }) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("USER")
    const [org, setOrg] = useState("")

    const userData = {
        name: username,
        email: email,
        password: password,
        role: role,
        orgId: org
    }

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('/api/register', userData)
            alertGoodMessage(res.data.message)
        } catch (error) {
            alertBadMessage("Error")
        }
    }

    return (
        <div>
            <div>
                <button className='btn btn-lg btn-info text-white mb-4'>เพิ่มผู้ใช้</button>    
            </div>            
        </div>
    );
}

{/* <Model>
            <div className="relative bg-white w-[400px] py-6 px-6 rounded-lg shadow-md">
                
                <button
                    className="absolute top-2 right-2 btn btn-error text-xl text-white btn-sm"
                    onClick={() => setOpenform(false)}
                >
                    <RxCross1 />
                </button>
                
                <form onSubmit={handleAddUser}>

                    <div className="mb-10">
                        <header className="text-xl font-semibold">เพิ่มผู้ใช้</header>
                    </div>

                    <div>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="ชื่อผู้ใช้"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="text"
                                className="grow"
                                placeholder="อีเมล"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                className="grow"
                                placeholder="รหัสผ่าน"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>

                        <div className="flex">
                            <div className="mr-4">
                                <div className="text-md font-bold mb-2">บทบาท</div>
                                <select
                                    value={role}
                                    className="select select-bordered w-full max-w-[100px] font-bold"
                                    onChange={(event) => setRole(event.target.value)}
                                >
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                            <div>
                                <div className="text-md font-bold mb-2">ตำบล</div>
                                <select
                                    value={role}
                                    className="select select-bordered w-full max-w-[100px] font-bold"
                                    onChange={(event) => setOrg(event.target.value)}
                                >
                                    <option>test</option>
                                    <option>test</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center items-center mt-8 mb-6">
                        <button type="submit" className="btn btn-success text-white w-full">
                            เพิ่ม
                        </button>
                    </div>

                </form>
            </div>
        </Model> */}

// 'use client'

// import { useState } from 'react'

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Edit({ user, closeModal, updateUser }) {
//     const [userData, setUserData] = useState(user)

//     const handleInputChange = (event) => {

//         const { name, value } = event.target

//         setUserData(prevUserData => ({
//             ...prevUserData,
//             [name]: value
//         }))
//     }

//     const notify = (data) => toast.success(data, {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored"
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const formattedTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
//         const updatedUserData = { ...userData, time: formattedTime }
//         fetch(`https://next.nareubad.work//api/user/${user.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedUserData)
//         }).then(res => res.json()).then((result) => {
//             notify(result.message)
//             updateUser(updatedUserData);
//         })
//     }

//     return (
//         <div className="fixed z-[10] inset-0 overflow-y-auto">
//             <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

//                 <div className="fixed inset-0 transition-opacity">
//                     <div className="absolute bg-[#ffffff] inset-0 opacity-5"></div>
//                 </div>

//                 <div className='max-w-[475px] shadow-xl transform transition-all h-[550px] bg-base-300 mx-auto mt-[50px] rounded-2xl p-[40px]'>
//                     <form onSubmit={handleSubmit}>

//                         <div className="mb-[40px] text-center">
//                             <button className="btn uppercase text-2xl">Edit id {user.id}</button>
//                         </div>

//                         <div className="text-center">
//                             <div className="mb-[20px]">
//                                 <input type="text" className="input w-full"
//                                     name='Name'
//                                     id='name'
//                                     value={userData.Name}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div>
//                                 <input type="text" className="input w-full"
//                                     name='idname'
//                                     id='idname'
//                                     value={userData.idname}
//                                     onChange={handleInputChange}
//                                     maxLength={10} />
//                             </div>
//                         </div>

//                         <div className='mt-[20px]'>
//                             <button className="btn btn-success w-full text-white uppercase" type='submit'>update</button>
//                         </div>

//                     </form>
//                     <div className='mt-[20px]'>
//                         <button className="btn btn-error w-full text-white uppercase" onClick={closeModal}>Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default Edit