"use client"

export default function MoneyShare() {
  return (
    <div>
      <h3 className='font-bold text-xl text-gray-800 '>
        จำนวนเงิน
      </h3>
      <input type="number" id="amount" min={0} placeholder='ป้อนจำนวณเงิน'
      className='border-2 border-gray-300 rounded-lg p-2 w-full mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4'/>
        <h3 className='font-bold text-xl text-gray-800 '>
        จำนวนคน
      </h3>
      <input type="text" id="person" min={0} placeholder='ป้อนจำนวณคน'
    className='border-2 border-gray-300 rounded-lg p-2 w-full mt-4 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4'/>
    <button className="mt-8 mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">
        คำนวณ
    </button>
    <button className="mt-3 mb-4 bg-red-500 text-white font-bold py-2 px-4 rounded w-full">
        ยกเลิก
    </button>
    <div className="mt-8 text-center">
        <h3 className="font-bold text-xl text-gray-800 ">
            หารกันคนละ <span className="text-red-500 text-5xl">0.00</span> บาท
        </h3>
    </div>
    </div>
  )
}
