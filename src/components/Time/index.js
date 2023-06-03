import Colaborador from '../Colaborador'
import './Time.scss'

const Time = (props) => {

    return (
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 className='time__titulo' style={{ borderColor: props.corPrimaria }}>{props.time}</h3>
            <div className='time__colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>

        </section>
    )
}

export default Time