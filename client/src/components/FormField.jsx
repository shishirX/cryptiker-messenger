const FormField = ({ name, type, onChange, label, value }) => {
    return (
        <div className='mb-4'>
            <label className='block' htmlFor={name}>
                {label}
            </label>
            <input
                className='px-1 py-2 border-b-2 border-[#d1d1d1] w-full focus:border-[#141414]'
                type={type}
                onChange={onChange}
                name={name}
                value={value}
                id={name}
            />
        </div>
    );
};
export default FormField;
