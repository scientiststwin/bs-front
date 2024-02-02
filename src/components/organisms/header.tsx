import bookOpenSrc from '../../assets/icons/bookOpen.svg';

const Header: React.FC = () => {
  return (
    <div className='h-24 flex flex-row justify-start items-center mb-10'>
      <div className="flex flex-row space-x-3">
        <div className='ml-24'> 
            <img src={bookOpenSrc} alt="bookOpen"/> 
        </div>
        <div className='text-xl font-unica font-normal'>BookStore</div>
      </div>
    </div>
  );
};

export default Header;
