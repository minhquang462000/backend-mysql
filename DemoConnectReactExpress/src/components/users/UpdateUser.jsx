import React from 'react'

const UpdateUser = () => {
  return (
    <form className='bg-blue-300 py-4 w-[600px] rounded-lg  m-auto flex justify-center items-center shadow-lg shadow-black relative'>
         <button className={`absolute right-4 top-5 text-white bg-red-600 p-2 rounded-lg font-bold hover:bg-red-800`}>Đóng X</button>
        <div className=' w-[400px] m-auto flex flex-col gap-4 '> 
        <p>Sửa chữa ở đây</p>
        <div className='flex flex-col  items-start  gap-1 '>
            <label htmlFor="">Tên</label>
            <input className='px-2 py-1 rounded-lg outline-none w-[100%]' type="text" name="" id="" placeholder='Tên...'/>
        </div>
        <div className='flex flex-col  items-start gap-1'>
            <label htmlFor="">Tuổi</label>
            <input className='px-2 py-1 rounded-lg outline-none w-[100%]' type="text" name="" id="" placeholder='Tuổi...'/>
        </div>
        <div className='flex flex-col  items-start gap-1'>
            <label htmlFor="">Địa chỉ</label>
            <input className='px-2 py-1 rounded-lg outline-none w-[100%]' type="text" name="" id="" placeholder='Địa chỉ...'/>
        </div>
        <button className='text-white font-bold bg-red-600 w-[200px] py-2 rounded-lg m-auto hover:bg-red-800'>Update user</button>
        </div>
       
    </form>
  )
}

export default UpdateUser