import logo from '../../../src/assets/notes-icon-design-vector.png'


const Navbar = () => {

    return (
        <header className='flex border-b-4 border-purple-500 p-3 gap-3' >
            <div className='w-12 h-12'>
                <img className='w-full h-full'  src={logo} alt='Note Taker' />
            </div>
            <h1 className='font-bold text-2xl'>Note Taker</h1>
        </header>
    )
}

export default Navbar;