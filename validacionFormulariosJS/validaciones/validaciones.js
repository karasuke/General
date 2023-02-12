export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML ="";

    }else{


        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }
  }

  const tipoDeErrores = [

    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
  ]

  const mensajesDeError ={

        nombre: {
            valueMissing: "Este campo nombre no puede estar vacio"
        },
        email: {
            valueMissing: "Este campo email no puede estar vacio",
            typeMismatch: "el correo no es valido"
        },
        password: {
            valueMissing: "Este campo password no puede estar vacio",
            patternMismatch: "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        },
        nacimiento:{
            valueMissing: "Este campo nacimiento no puede estar vacio",
            customError:"Debes tener al menos 18 años de edad",

        },

        numero:{
            valueMissing: "Este campo numero no puede estar vacio",
            patternMismatch:"el formato requerido es de 10 numeros"

        },

        direccion:{
            valueMissing: "Este campo numero no puede estar vacio",
            patternMismatch:"la direccion debe contener entre 10 a 40 caracteres"

        },

        ciudad:{
            valueMissing: "Este campo numero no puede estar vacio",
            patternMismatch:"la ciudad debe tener entre 10 a 40 caracteres"
        },

        estado:{
            valueMissing: "Este campo numero no puede estar vacio",
            patternMismatch:"el estado debe tener entre 10 a 40 caracteres"

        },


  }
  
  const validadores = {
    nacimiento: (input) => validarNacimiento(input),
  };
  
  function mostrarMensajeDeError(tipoDeInput,input){

    let mensaje =""

    tipoDeErrores.forEach(error => {

        if (input.validity[error]) {
            
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje
  }
  function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
      mensaje = "Debes tener al menos 18 años de edad";
    }
  
    input.setCustomValidity(mensaje);
  }
  
  function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
      fecha.getUTCFullYear() + 18,
      fecha.getUTCMonth(),
      fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
  }
  