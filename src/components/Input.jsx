const Input = ({ id, label, type, placeholder, onChange }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
};

export default Input;