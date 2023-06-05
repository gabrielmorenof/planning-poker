import Image from 'next/image'
import './../globals.css'
import './fibonnaci.css'
import { CgCardSpades } from 'react-icons/cg';

export default function Home() {
  return (
    <main className="flex w-fullwi flex-col items-center justify-between p-24">
      <div className='grid md:container md:mx-auto grid-cols-3 gap-3 cards'>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>0</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>1</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>2</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>3</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>5</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>8</p>
          <i><CgCardSpades /></i>
        </div>
        <div className='col'>
          <i><CgCardSpades /></i>
          <p>13</p>
          <i><CgCardSpades /></i>
        </div>
      </div>
    </main>
  )
}
