import './Form.scss'
import TextInput from '../TextInput'
import OptionsList from '../OptionList'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

   

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const handleSend = (event) => {
        event.preventDefault();
        const colaborador = {
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        }

        props.aoColaboradorCadastrado(colaborador)

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className='form'>
            <div className='form__container'>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <form onSubmit={handleSend}>
                    <TextInput
                        type='text'
                        label='Nome'
                        placeholder='Digite seu nome'
                        required={true}
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <TextInput
                        type='text'
                        label='Cargo'
                        placeholder='Digite seu cargo'
                        required={true}
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <TextInput
                        type='text'
                        label='Imagem'
                        placeholder='Informe o endereço da imagem'
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <OptionsList
                        label='Time'
                        itens={props.times}
                        required={true}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Button>
                        Criar Card
                    </Button>

                </form>
            </div>
        </section>
    )
}

export default Form