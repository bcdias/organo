import './TextInput.scss';

const TextInput = (props) => {


    return(
        <div className='text-input'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} type={props.type} placeholder={props.placeholder} ></input>
        </div>
    )
}

export default TextInput