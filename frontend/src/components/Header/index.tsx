import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="SALES Alert"/>
                <h1>SALES Alert</h1>
                <p>Powered by
                <a href="https://www.linkedin.com/in/jkohlers/"> @jkohlers </a></p>
            </div>
        </header>
    )
  }
  
  export default Header;