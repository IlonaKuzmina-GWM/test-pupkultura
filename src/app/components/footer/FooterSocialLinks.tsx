'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_FOOTER_DATA } from '@/app/graphql/queris';



export const FooterSocialLinks = () => {
    const { data } = useQuery(GET_FOOTER_DATA);

    // console.log(data.pages.edges)

    return (
        <div className='flex flex-row gap-5 mt-[14px] items-center justify-center md:justify-start mb-[50px] sm:ms-[20px] md:ms-[20px] lg:ms-[80px]'>
            {/* {data.pages.edges.map({item, key} => {CloudItem. item})} */}
            <Link href={'https://www.instagram.com/pupkultura/'} className='w-[27px] h-[27px] relative hover:animate-pulse' target='_blank'>
                <Image src={'/instagram.svg'} alt={'Instagram'} fill />
            </Link>

            <Link href={'https://www.facebook.com/Pinktrainfoundation/'} className='w-[27px] h-[27px] relative hover:animate-pulse' target='_blank'>
                <Image src={'/facebook-sq.svg'} alt={'Instagram'} fill />
            </Link>
        </div>
    )
}
