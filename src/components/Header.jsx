import { banner1, banner2, banner3, banner4, banner5 } from '../assets';

const images = [banner1, banner2, banner3, banner4, banner5];

const Header = () => {

    return (
        <header className='w-full h-full'>
            <div className='relative w-full h-full'>
                <img src={images[Math.floor(Math.random() * images.length)]} alt='Hero Images' className='w-full h-full object-cover' />
            </div>     
        </header>
    )
}

export default Header