import Navbar from './Navbar';
import Banner from './Banner';

import '@/assets/styles/header.css'

const Header = () => {
  return (
    <div className='banner-bg h-[800px]'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Header;