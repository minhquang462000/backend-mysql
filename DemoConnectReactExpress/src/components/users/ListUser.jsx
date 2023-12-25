import React, { useState } from 'react'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
const ListUser = () => {
const cssTD = "border border-black py-2 m-auto"
const [hiddenCreateTable,setHiddenCreateTable] =useState(false)
const [hiddenUpdateTable,setHiddenUpdateTable] =useState(false)

  return (
    <div className='relative'>
      <table className=' m-auto w-[1200px] font-semibold'>
      <tr className='m-auto'>
        <td className={`${cssTD} w-[5%]`}>Id</td>
        <td className={`${cssTD} w-[30%]`}>Name</td>
        <td className={`${cssTD} w-[30%]`}>Address</td>
        <td className={`${cssTD} w-[10%]`}>Age</td>
        <td className={`${cssTD} w-[25%]`}>Action</td>
      </tr>
      <tr className='m-auto '>
       <td className={`${cssTD} w-[5%]`}>Id</td>
       <td className={`${cssTD} w-[30%]`}>Id</td>
       <td className={`${cssTD} w-[30%]`}>Id</td>
       <td className={`${cssTD} w-[10%]`}>Id</td>
       <td className={`${cssTD} w-[25%] `}>
        <div className='flex justify-evenly'>
        <button onClick={()=>{setHiddenUpdateTable(!hiddenUpdateTable)}}  className={` text-white bg-yellow-500 px-3 rounded-lg font-bold hover:bg-yellow-700 `}>EDIT</button>
        <button className='text-white bg-red-600 px-3 rounded-lg font-bold hover:bg-red-800'>DELETE</button>
        </div>
       
       </td>
      </tr>
    </table>
    <div className={`absolute top-10 left-[25%] ${hiddenCreateTable ? "block":"hidden"}`}><CreateUser/></div>
    <div className={`absolute top-10 left-[25%] ${hiddenUpdateTable ? "block":"hidden"}`}><UpdateUser/></div>

    <div  onClick={()=>{setHiddenCreateTable(!hiddenCreateTable)}} className='absolute right-3 my-2 text-3xl font-bold bg-red-600 w-10 h-10  text-white rounded-full hover:bg-red-800 '>
    <button className='text-center'>+</button>
    </div>
   
    </div>
    
  )
}

export default ListUser