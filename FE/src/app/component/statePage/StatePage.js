import Image from 'next/image'
import React from 'react'
import { states } from '@/mock/mock'
import Link from 'next/link';

const StatePage = ({ state }) => {
    const currentState = states[state];
    return (
        <div className='w-full'>
            <section className='w-full my-16'>
                <div className='w-full flex items-center flex-col'>
                    <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                    <p className='text-2xl font-extrabold my-6'>{currentState.state}</p>
                </div>
            </section>
            <section className='my-16'>
                <div className='flex justify-around'>
                    <Link href={state+"/"+""}>
                        <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                        <p className='w-full text-center my-4 font-semibold text-xl'>Textail</p>
                    </Link>
                    <Link href={state+"/"+"Jewellary"}>
                        <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                        <p className='w-full text-center my-4 font-semibold text-xl'>Jewellary</p>
                    </Link>
                    <Link href={state+"/"+"furniture"}>
                        <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                        <p className='w-full text-center my-4 font-semibold text-xl'>Home furniture</p>
                    </Link>
                    <Link href={state+"/"+""}>
                        <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                        <p className='w-full text-center my-4 font-semibold text-xl'>Textail</p>
                    </Link>
                    <Link href={state+"/"+"Food"}>
                        <Image src={"/States/" + state + ".jpg"} width={150} height={150} alt={state} />
                        <p className='w-full text-center my-4 font-semibold text-xl'>Food</p>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default StatePage