import './footer.css'

const Footer = ()=>{
    const currentYear = new Date().getFullYear()

    return(
        <footer>
            {`Natural Armónia ${currentYear} ©️ todos los derechos reservados - powered by Jonatan Avila Diseño y Desarrollado Web`}
        </footer>     
    )
}

export default Footer