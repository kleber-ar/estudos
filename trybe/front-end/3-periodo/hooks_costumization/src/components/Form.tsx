import useFormInput from "../hooks/useFormInput";



type FormProp = {
    toggle: () => void;
};

function Form({ toggle }: FormProp) {
    const fistName = useFormInput('')
    const lastName = useFormInput('')
    const email = useFormInput('')

    function resetForm() {
        fistName.onChange('');
        lastName.onChange('');
        email.onChange('');
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(fistName.value && lastName.value && email.value) {
            window.alert(
                'Formulario enviado\n' +
                    `Nome: ${fistName.value}\n`+
                    `Sobre Nome: ${lastName.value}\n` +
                    `Email: ${email.value}\n`,
            );
            resetForm();
            toggle();
        } else {
            window.alert('Preencha todos os dados!');
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>

                <label htmlFor={fistName.value}>
                    Fist Name:
                    <input 
                        value={fistName.value}
                        onChange={({ target }) => fistName.onChange(target.value)}
                    />
                </label>

                <label htmlFor={lastName.value}>
                    Last Name:
                    <input 
                        value={lastName.value}
                        onChange={({ target }) => lastName.onChange(target.value)}
                    />
                </label>

                <label htmlFor={email.value}>
                    E-mail:
                    <input 
                        value={email.value}
                        onChange={({ target }) => email.onChange(target.value)}
                    />
                </label>
                <button>Enviar formulario</button>
            </form>
        
        </>
    )
}

export default Form;