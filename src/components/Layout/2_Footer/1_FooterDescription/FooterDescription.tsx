import style from '../style.module.css'

const FooterDescription = () =>{
    return(
        <div className="col-12 col-md-6 col-lg-3">
            {/* <img src={Logo} alt="ASRAT FURNITURE" className="w-75 text-white" /> */}
            <p className={`py-4 ${style.footer_text_color}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam natus doloremque
                accusantium alias commodi iure distinctio ipsum.</p>
            <section className="w-50 d-flex justify-content-around">
                <a href="#"><i className="text-white fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="text-white fa-brands fa-instagram"></i></a>
                <a href="#"><i className="text-white fa-brands fa-telegram"></i></a>
                <a href="#"><i className="text-white fa-brands fa-twitter"></i></a>
                <a href="#"><i className="text-white fa-brands fa-pinterest"></i></a>
            </section>
        </div>
    )
}

export default FooterDescription;