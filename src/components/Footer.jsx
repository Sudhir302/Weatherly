import "../styles/footer.css"
function Footer(){
    return(
        <div className="footer">
            <div className="copyright">
                Weatherly © 2025
            </div>
            <div className="policy">
                <p>Privacy Policy | Terms of Service</p>
            </div>
            <div className="social">
                <a href="" className="social-media"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="" className="social-media"><i className="fa-brands fa-instagram"></i></a>
                <a href="" className="social-media"><i className="fa-brands fa-github"></i></a>
                <a href="" className="social-media"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}

export default Footer;
