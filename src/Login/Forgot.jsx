import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Forgot() {
    return ( 
        <div>
    <div className="login-container">
      <div className="login-box">
        <div className="logo"> 
          <img src="src/assets/logo/Logo.png" alt="Logo" />
        </div>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email or Username" />
          <div className="password-container">
            <input type="password" placeholder="New Password" />
            <span className="show-password"><i class="bi bi-eye-fill"></i></span>
          </div>
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="login-button"><a href="#/login">Login</a></button>

        </form>
      </div>
    </div>

        </div>
     );
}

export default Forgot;