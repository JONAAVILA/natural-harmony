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
            vamosAPedirteUnosDatos:'VAMOS A PEDIRTE UNOS DATOS'
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
            vamosAPedirteUnosDatos:'ANDIAMO A PRENDERE UNO DEI NOSTRI DATI'
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