"use client"

import { useState } from "react"



export default function MoneyShare() {

    const[money,setMoney] =useState('')
    const[person,setPerson] =useState('')
    const[moneyshare,setMoneyShare] =useState('0.00')

    const handleInputPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPerson(e.target.value)
    }

    const handleClickResetUIValue = () => {
      setMoney('')
      setPerson('')
      setMoneyShare('0.00')
    }

    const handleClickCalculateMoneyShare = () => {
      //Validate Input data
      if(money === '' || money <= '0') {
          alert('ตรวจสอบจำนวนเงินต้องมากกกว่า 0')
          return
      }
      if(person === '' || person <= '0') {
          alert('ตรวจสอบจำนวนคนต้องมากกว่า 0')
          return
      }
      const result = (parseFloat(money) / parseInt(person))
      setMoneyShare(result.toFixed(2))
    }

  return (
    <div>
      <h3 className='font-bold text-xl text-gray-800 '>
        จำนวนเงิน
      </h3>
      <input type="number" id="amount" min={0} placeholder='ป้อนจำนวณเงิน' 
      className='border-2 border-gray-300 rounded-lg p-2 w-full mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4'
      value={money}
      onChange={(e) => setMoney(e.target.value)}/>
        <h3 className='font-bold text-xl text-gray-800 '>
        จำนวนคน
      </h3>
      <input type="text" id="person" min={0} placeholder='ป้อนจำนวณคน'
    className='border-2 border-gray-300 rounded-lg p-2 w-full mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4' 
    value={person}
    onChange={handleInputPerson}/>
    <button className="mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded w-full" 
    onClick={handleClickCalculateMoneyShare}>
        คำนวณ
    </button>
    <button className="mt-3 mb-4 bg-red-500 text-white font-bold py-2 px-4 rounded w-full" 
    onClick={handleClickResetUIValue}>
        ยกเลิก
    </button>
    <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-800 ">
            หารกันคนละ <span className="text-red-500 text-5xl">
              {moneyshare}
              </span> บาท
        </h3>
    </div>
    </div>
  )
}
