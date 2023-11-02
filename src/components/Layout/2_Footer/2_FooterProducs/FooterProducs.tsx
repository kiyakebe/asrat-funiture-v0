import style from '../style.module.css'

const FooterProducs = ()=>{
    return(
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`container py-4 ${style.container_label}`}>
                <h4 className={` ${style.label_text} text-white`}>Products</h4>
            </div>
            <ul className="list-unstyled">
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-couch`}></i> Living Room</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-couch`}></i> Dining Room</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-bed`}></i> Bed Room</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-kitchen-set`}></i> Kitchen</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-chair`}></i> Office</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-chair`}></i> Outdoor</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-door-open`}></i> Windows and Doors</a></li>
                <li><a href="#" className={`text-white d-block py-2 py-lg-1 ${style.footer_link}`}><i className={` ${style.footer_icon} fa-solid fa-stairs`}></i> Wall Art</a></li>
            </ul>
        </div>
    )
}

export default FooterProducs;