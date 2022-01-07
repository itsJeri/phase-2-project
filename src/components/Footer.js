import styled from 'styled-components';

const FooterContainer = styled.footer`
    .main-footer {
        background: #212529;
        padding-top: 2rem;
        color: white;
        text-align: left;
    }

    .footer-bottom {
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
    }

    h4 {
        margin-left: 50px;
    }

    ul {
        margin-left: 50px;
    }

    ul li a {
        color: rgba(172, 172, 172);
        text-decoration: none;
    }

    ul li a:hover {
        color: rgba(130, 130, 130);
    }
`

function Footer() {
    return (
        <FooterContainer>
            <div className='main-footer'>
                <div className='container'>
                    {/* ROW */}
                    <div className='row'>
                        {/* COLUMN 1 */}
                        <div className='col-md-3 col-sm-6'>
                            <h4>Contact Us</h4>
                            <ul className='list-unstyled'>
                                <li>Fake Address</li>
                                <li>1337 Champ Blvd</li>
                                <li>Nice Try, GG 69420</li>
                                <li>777-777-7777</li>
                            </ul>
                        </div>
                        {/* COLUMN 2 */}
                        <div className='col-md-3 col-sm-6'>
                            <h4>Follow Us</h4>
                            <ul className='list-unstyled'>

                                <li><a href='https://github.com/itsJeri'>Jerry Tong</a></li>
                                <li><a href='https://github.com/Tyler0342'>Tyler Maggio</a></li>
                                <li><a href='https://github.com/Skylarxu214'>Tian Xu</a></li>
                            </ul>
                        </div>
                        {/* COLUMN 3 */}
                        <div className='col-md-3 col-sm-6'>
                            <h4>Github</h4>
                            <ul className='list-unstyled'>
                                <li><a href='https://github.com/itsJeri/phase-2-project'>Github Repo</a></li>

                            </ul>
                        </div>
                        {/* COLUMN 4 */}
                        <div className='col-md-3 col-sm-6'>
                            <h4>LinkedIn</h4>
                            <ul className='list-unstyled'>
                                <li><a href='/'>Sorry</a></li>
                                <li><a href='/'>This is fake</a></li>
                                <li><a href='/'>It's all fake</a></li>
                                <li><a href='/'>I just wanted more stuff here</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* FOOTER BOTTOM */}
                    <div className='footer-bottom'>
                        <p className='text-xs-center'>
                            &copy;{new Date().getFullYear()} Earthling Aptitude Test - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;