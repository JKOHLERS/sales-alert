import icon from '../../assets/img/notify-icon.svg'
import './styles.css'

function NotificationButton() {
    return(
        <div className="red-btn">
            <img src={icon} alt="notify"/>
        </div>
    )
  }
  
  export default NotificationButton