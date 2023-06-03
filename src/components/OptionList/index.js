import './OptionsList.scss';

const OptionsList = (props) => {

    return (
        <div className='options-list'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} className='options-list__itens' required={props.required} value={props.valor}>
                <option value={""}></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default OptionsList