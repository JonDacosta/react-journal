import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );

    

    const [ formValues, handleInputChange ] =  useForm({
        name: 'Jon',
        email: 'dacostaafonso@gmail.com',
        password: '123456',
        password2: '123456',
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid() ) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name) );
        }

        
    }

    const isFormValid = () => {
        //Validación del formulario
        if ( name.trim().length === 0 ) {
            dispatch( setError('Nombre es obligatorio') )
            return false;

            //Nueva librería añadida (validator js)
        } else if (!validator.isEmail( email )) {
            dispatch( setError('Email es incorrecto') )
            return false;

        } else if ( password !==password2 || password.length < 5) {
            dispatch(setError('El password debe tener más de 5 caracteres') )
            return false
        }

        dispatch ( removeError() );
        return true;
    }

    return (
        <>
        <h3 className="auth__title">Registrar</h3>

            <form 
                onSubmit={ handleRegister }
                className="animate__animated animate__fadeIn animate__faster"
            >

            {   
                msgError &&
                (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                )
            }

                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  className="auth__input"
                  autoComplete="off"
                  value={ name }
                  onChange={ handleInputChange }
                />

              <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="auth__input"
                  autoComplete="off"
                  value={ email }
                  onChange={ handleInputChange }
              />
              <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  className="auth__input"
                  value={ password }
                  onChange={ handleInputChange }
              /> 
              <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  name="password2"
                  className="auth__input"
                  value={ password2 }
                  onChange={ handleInputChange }
              />       

              <button
                  type="submit"
                  className="btn btn-primary btn-block mb-5"
                  
              >
                  Registrar
              </button>

              
              
              <Link 
                  to="/auth/login"
                  className="link"
              >
                  Ya está registrado?
              </Link>        
          </form>  
      </>
    )
}
