import money from './images/icon1.png'
import Image from 'next/image'
import MoneyShare from '@/components/moneyshare'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-xl rounded-xl p-8 w-full max-w-xl">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Money Share Calculator
      </h1>
      <h3 className="text-xl font-bold text-center text-blue-600 mt-4">
        คำนวณเงินที่ต้องการจะหารกัน
      </h3>
      <Image className='mx-auto mt-4 mb-8'
        src={money} alt="Money" width={150} height={150}/>
      <MoneyShare/>
      </div>
      <h3 className='mt-8'>Developed by {''} <span className='text-red-500'>Thayakorn Koomphai</span> NA JAAA</h3>
    </div>
  )
}
