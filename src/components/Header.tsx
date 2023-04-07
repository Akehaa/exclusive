import Image from 'next/image'
import Exclusive from '../assets/Exclusive.svg'
import Link from 'next/link'
import { VscHeart } from 'react-icons/vsc'
import { ShoppingCart } from 'phosphor-react'
import { MagnifyingGlass } from 'phosphor-react'



export function Header() {
  return (
    <header className="flex flex-col">
      <section className=" bg-black text-exclusive-text-1 text-center py-3 px-3 text-sm">
        <span className='pr-2 '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <Link href="/" className='font-semibold underline underline-offset-2'>ShopNow</Link>
      </section>

      <section className='flex flex-col gap-4 mt-[2.938rem] mb-[1.438rem] md:flex-row md:justify-between lg:w-5/6 md:mx-auto' >
        <div className='flex gap-3 justify-center mb-4 md:mb-0 '>
          <Image 
          src={Exclusive} 
          width={0} 
          height={0} 
          quality={100} 
          alt='logo'
          className='lg:mr-10 xl:mr-48'
          />
          <div className='flex gap-3 items-center text-sm lg:text-lg'>
            <Link href="/" className='hover:underline underline-offset-4'>Home</Link>
            <Link href="/" className='hover:underline underline-offset-4'>Contact</Link>
            <Link href="/" className='hover:underline underline-offset-4'>About</Link>
            <Link href="/" className='hover:underline underline-offset-4'>Sign Up</Link>
          </div>
        </div>
        <div className='flex gap-3 items-center justify-between mx-4'>
          <div className='flex items-center md:mr-6'>
            <input
              type="text"
              placeholder='What are you looking for?'
              className='text-xs bg-[#eeeeee] rounded py-2 w-60 pl-5'
            />
            <button><MagnifyingGlass size={23} className='-ml-[2.16rem]' /></button>
          </div>
          <div className='flex gap-4'>
            <button><ShoppingCart size={23} /></button>
            <button><VscHeart size={23} /></button>
          </div>
        </div>
      </section>
    </header>
  )
}