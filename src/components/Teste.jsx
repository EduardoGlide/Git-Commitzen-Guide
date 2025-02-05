const Teste = ({ id, label, type, placebolder, onChange}) => {
    return (
        <>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    placeholder={placebolder}
                    onChange={onChange}
                />
        </>
    );
};

export default Teste;