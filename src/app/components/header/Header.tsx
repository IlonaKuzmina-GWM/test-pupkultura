import Image from 'next/image'
import { LocalSwitcher } from '../LocalSwitcher';

export const Header = () => {

    
    return (
        <div className='container z-10 relative'>
            <div className="flex items-center py-5 md:py-[20px] h-[70px] sm:h-[150px] justify-between">
                <div className='w-[150px] md:w-[259px] h-[40px] md:h-[59px] relative'>
                    <Image src={'/logo.svg'} alt={'Logo'} fill />
                </div>
                <div>
                    <LocalSwitcher />
                </div>
            </div>
        </div>
    )
}
