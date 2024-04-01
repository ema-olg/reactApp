import { useForm } from 'react-hook-form'
import nombreCompleto from './nombreCompleto'
import './formularios.scss'

const Formularios = () => {
    const {register, formState:{errors}, handleSubmit, watch}= useForm()

    const onSubmit= datos=> console.log(datos)
    return ( 
        <>
        <h1>Formularios useForm</h1>
        <h3>{watch('nombre')}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.nombre?.type==='required'&&<p className='errors'>Es requerido</p>}
            {errors.nombre?.type==='maxLength'&&<p className='errors'>El nombre no debe superar los 12 caracteres</p>}
            {errors.nombre?.type==='validate'&&<p className='errors'>Debes ingresar el nombre completo</p>}
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id='nombre' {...register('nombre',{
                required: true,
                maxLength: 12,
                validate: nombreCompleto
            })}/>

            <br />
            <button type='submit'>Enviar</button>
        </form>

        </>
     );
}
 
export default Formularios;