import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    es:{
        translation:{
            naturalArmonia:'NATURAL ARMONIA',
            clasesDeYoga:'ural',
            clasesDeCompose:'armo',
            ingresaTuEmail:'INGRESA TU EMAIL',
            vamosAValidarTuEmail:'VAMOS A VALIDAR TU EMAIL',
            ingresar:'INGRESAR',
            queBuenoVerte:'QUE BUENO VERTE',
            vamosAPedirteUnosDatos:'VAMOS A PEDIRTE UNOS DATOS',
            registrarse:'REGISTRARSE',
            registrate:'REGISTRATE',
            crear:'CREAR',
            alCrearElUsuarioAceptasLosTerminosYCondicionesDeNaturalArmonia:'al crear el usuario aceptas los terminos y condiciones de Natural Armonia',
            completaLosDatosParaCrearTuUsuario:'COMPLETA LOS DATOS PARA CREAR TU USUARIO',
            nombre:'nombre',
            apellido:'apellido',
            constraseña:'contraseña',
            telefono:'teléfono',
            calle:'calle',
            numero:'numero',
            localidad:'localidad',
            provincia:'provincia',
            pais:'país'
        }
    },
    it:{
        translation:{
            naturalArmonia:'ARMONIA NATURALE',
            clasesDeYoga:'it',
            clasesDeCompose:'armo_it',
            ingresaTuEmail:'INSERISCI LA TUA EMAIL',
            vamosAValidarTuEmail:'LASCIACI UNA VALIDA EMAIL',
            ingresar:'INGRESSO',
            queBuenoVerte:'CHE BENE VERDE',
            vamosAPedirteUnosDatos:'ANDIAMO A PRENDERE UNO DEI NOSTRI DATI',
            registrarse:'REGISTRARSI',
            registrate:'REGISTRATI',
            crear:'CREARE',
            alCrearElUsuarioAceptasLosTerminosYCondicionesDeNaturalArmonia:'creando l´utente accetti i termini e le condizioni di Natural Armonia',
            completaLosDatosParaCrearTuUsuario:'COMPLETA I DATI PER CREARE IL TUO UTENTE',
            nombre:'nome',
            apellido:'cognome',
            constraseña:'password',
            telefono:'telefono',
            calle:'strada',
            numero:'numero',
            localidad:'località',
            provincia:'provincia',
            pais:'paese'
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:'es',
        fallbackLng:'en',
        interpolation:{
            escapeValue:false
        }
    })

export default i18n