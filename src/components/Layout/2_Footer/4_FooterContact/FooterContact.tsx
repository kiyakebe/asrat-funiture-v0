import style from '../style.module.css'

const FooterContact = () =>{
    return(
        <div className="col-12 col-md-6 col-lg-3">
            <div className={`container py-4 ${style.container_label}`}>
                <h4 className={` ${style.label_text} text-white`}>Contact</h4>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5053.106394512714!2d38.
            921534901305876!3d8.774843317510935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x164b73c56c7fbb6b%3A0xdcb98fba7297eea7!2sBank%20Of%20Abyssinia!5e1!3m2!1sen!2set!4v1686686672341!5m2!1sen!2set"
            style={{ border: 0}} className='map_iframe' allowFullScreen= {true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <h6 className="text-white dy-5"><i className="fa-solid fa-map-marked"></i> Dukem, Ethiopia</h6>
            <section className="footer-contacet">
                <ul className="list-unstyled">
                    <li><a href="#" className="link-light text-decoration-none d-block w-100"><i className="fa-solid fa-envelope"></i> Email</a></li>
                    <li><a href="#" className="link-light text-decoration-none d-block w-100"><i className="fa-solid fa-square-phone"></i> +2519 345 123 234</a></li>
                </ul>
            </section>
        </div>
    )
}

export default FooterContact;