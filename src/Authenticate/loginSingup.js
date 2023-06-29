import useAuth from "./authenticate";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import { css } from "aphrodite";
import ShowRecipe from "../ShowRecipe/showrecipe";
import { styleLogSing } from "../styles/AuthStyle";
// Usage in component
function AuthComponent() {
    const { authentication, signup, login, logout } = useAuth();
    const [alreadyHaveAcc, setAlreadyHaveAcc] = useState(true);
  
    const handleSignup = (formData) => {
      signup(formData);
    };
  
    const handleLogin = (formData) => {
      login(formData);
    };
  
    const handleLogout = () => {
      logout();
    };

    const handleAlreadyHaveAcc = () => {
      setAlreadyHaveAcc(!alreadyHaveAcc);
    }
  
    return (
      <div>
        {authentication.isLoggedIn ? (
          <div>
            <div>
              <p
              className={css(styleLogSing.welcome, styleLogSing.alreadyhave)}>Welcome {authentication.user.username}!</p>
              <div className={css(styleLogSing.logoutContainer)}>
                <button
                className={css(styleLogSing.logout)}
                onClick={handleLogout}
                >Logout</button>
              </div>
            </div>
            <ShowRecipe />
      </div>
    ) : (
      <div>
        {alreadyHaveAcc ?
        <Login onSubmit={handleLogin} error={authentication.error} />
        : <Signup onSubmit={handleSignup} error={authentication.error} />
}
        <div
        className={css(styleLogSing.alreadyhave)}>
          <p>Go To </p>
          <p
          className={css(styleLogSing.element)}
        onClick={handleAlreadyHaveAcc}
        >{alreadyHaveAcc ? 'Signup':'Login' }</p>
        </div>
      </div>
    )}
  </div>
  );
  }

  

  export default AuthComponent;
