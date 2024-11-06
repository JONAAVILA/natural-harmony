import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    es:{
        translation:{
            naturalArmonia:'NATURAL ARMONIA',
            clasesDeYoga:'ural',
            clasesDeCompose:'armo',
            ingresaTuEmail:'INGRESA TU EMAIL',
            vamosAValidarTuEmail:'VAMOS A VALIDAR TU EMAIL'
        }
    },
    it:{
        translation:{
            naturalArmonia:'ARMONIA NATURALE',
            clasesDeYoga:'it',
            clasesDeCompose:'armo_it',
            ingresaTuEmail:'INSERISCI LA TUA EMAIL',
            vamosAValidarTuEmail:'LASCIACI UNA VALIDA EMAIL'
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