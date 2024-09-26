'use client'

import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';

export const LocalSwitcher = () => {
    const [currentLocale, setCurrentLocale] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const locale = window.location.pathname.split('/')[1];
            setCurrentLocale(locale);
        }
    }, []);

    return (
        <div className='flex flex-row gap-3 items-center'>
            <Link href='/lv' locale='lv' 
            className={`${currentLocale === '' ? 'rounded-[30px] px-3 sm:py-[8px] sm:px-[22px] bg-darkPink text-primaryLight' : 'text-darkPink'} font-openSans text-[16px] px-2'}`}>LV</Link>
            <Link href='/en' locale='en' 
            className={`${currentLocale === 'en' ? 'rounded-[30px] px-3 sm:py-[8px] sm:px-[22px] bg-darkPink text-primaryLight' : 'text-darkPink'} font-openSans text-[16px] px-2'}`}>EN</Link>
        </div>
    )
}
