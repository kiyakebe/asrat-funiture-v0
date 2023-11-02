import style from '../style.module.css'

const FooterLinks = () =>{
    return(
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`container py-4  ${style.container_label}`}>
                <h4 className={` ${style.label_text} text-white`}>Links</h4>
            </div>
            <ul className="list-unstyled">
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-shop nav-icons`}></i> Shopping</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-circle-question`}></i> About Us</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-question`}></i> FAQ</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-blog`}></i> News</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-couch`}></i> Furniture</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-bullhorn`}></i> Promo</a></li>
            </ul>
        </div>
    )
}

export default FooterLinks;