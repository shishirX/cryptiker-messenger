const Button = ({ onClick, children }) => {
    return (
        <button
            className='border-[#141414] px-4 py-2 border-[2px] text-center inline-block mt-5 hover:bg-[#141414] hover:text-[#eee] w-full'
            onClick={onClick ? onClick : () => {}}>
            {children}
        </button>
    );
};
export default Button;
