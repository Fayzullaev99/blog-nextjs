import Link from 'next/link'
import {ImFacebook, ImTelegram, ImYoutube} from 'react-icons/im'

function Header() {
    return (
        <header className='bg-gray-50'>
            <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
                <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                    <input type="text" placeholder="Searching..." className='input-text' />
                </div>
                <div className='shrink w-80 sm:order-2'>
                    <Link href="/" className='font-bold uppercase text-3xl'>Design</Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <Link href="/"><ImFacebook color='#888' /></Link>
                        <Link href="/"><ImTelegram color='#888' /></Link>
                        <Link href="/"><ImYoutube color='#888' /></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header