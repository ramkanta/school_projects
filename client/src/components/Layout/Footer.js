import React from 'react';

const Footer = () => {
    const footerStyle = {
        padding: '2rem 0',
        marginTop: '15rem',
    };

    const h3Style = {
        fontWeight: 700,
        fontFamily: 'cursive',
        letterSpacing: '2px',
        padding: '0.5rem 0',
    };

    const spanStyle = {
        color: '#f60838',
    };

    const pStyle = {
        padding: '0rem 5rem 0.8rem 0',
        fontWeight: 500,
    };

    const iconStyle = {
        padding: '0.4rem 0.5rem',
        background: '#e1e1e1',
        color: '#f60838',
        margin: '0 0.5rem',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '0.6s',
    };

    const iconHoverStyle = {
        background: '#f60838',
        color: '#fff',
    };

    const h5Style = {
        color: '#f60838',
    };

    const ulStyle = {
        listStyle: 'none',
        paddingLeft: 0,
    };

    const liStyle = {
        padding: '0.35rem 0',
        fontWeight: 500,
    };

    const aStyle = {
        textDecoration: 'none',
        color: '#000',
        fontSize: '1.06rem',
    };

    const ft3PStyle = {
        fontWeight: 500,
        padding: '0.1rem 0',
        fontSize: '1.06rem',
    };

    const iStyle = {
        paddingRight: '0.5rem',
    };

    const lastFooterStyle = {
        background: '#f60838',
        textAlign: 'center',
        padding: '1rem 0',
    };

    const lastFooterPStyle = {
        marginBottom: 0,
        fontSize: '1.2rem',
        fontWeight: 700,
    };

    return (
        <>
            <div style={footerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3 style={h3Style}><span style={spanStyle}>KABI SUKANTA SIKSHA NIKETAN </span>(H.S.)</h3>
                            <p style={pStyle}>Kabi Sukanta Siksha Niketan was established in 2001 as a 4-class Junior High School to meet the need of education of more than 16 village students in Joania Panchayat, under Krishnagar</p>
                            <div className="footer-icons">
                                <i style={iconStyle} className="fa-brands fa-facebook"></i>
                                <i style={iconStyle} className="fa-brands fa-twitter"></i>
                                <i style={iconStyle} className="fa-brands fa-instagram"></i>
                                <i style={iconStyle} className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5 style={h5Style}>Quick Links</h5>
                            <ul style={ulStyle}>
                                <li style={liStyle} className="nav-item">
                                    <a style={aStyle} href="https://wbbse.wb.gov.in/Web/Home?l=Z%2F%2F2JeEw6P%2FkXiUjdLauQg%3D%3D">WBBSE</a>
                                </li>
                                <li style={liStyle} className="nav-item">
                                    <a style={aStyle} href="https://wbchse.wb.gov.in/">WBCHSE
</a>
                                </li>
                                <li style={liStyle} className="nav-item">
                                    <a style={aStyle} href="https://school.banglarshiksha.gov.in/ws/website/index/19100115803">School Education WB</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5 style={h5Style}>Contact Information</h5>
                            <p style={ft3PStyle}><i style={iStyle} className="fa-solid fa-phone-volume"></i> +92 9732847489</p>
                            <p style={ft3PStyle}><i style={iStyle} className="fa-solid fa-envelope"></i> kabisukanta2001@gmail.com</p>
                            <p style={ft3PStyle}><i style={iStyle} className="fa-solid fa-paper-plane"></i> Malipota,Nadia,WB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={lastFooterStyle}>
                <p style={lastFooterPStyle}>Design By Kabi Sukanta SChool</p>
            </div>
        </>
    );
}

export default Footer;
