import { useSelector, useDispatch} from "react-redux";
import { loginUser, loginError, signupUser, signupError, logoutUser } from "../actions";

// Define custom hooks for auth state and dispatch
function useAuth() {
    const authentication = useSelector(state => state.authentication);
    const dispatch = useDispatch();
  
    // Define signup function to dispatch signup action
    const signup = async (formData) => {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (data.success) {
          dispatch(signupUser(data.user));
        } else {
          dispatch(signupError(data.error));
        }
      } catch (error) {
        dispatch(signupError(error.message));
      }
    };
  
    // Define login function to dispatch login action
    const login = async (formData) => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (data.success) {
          dispatch(loginUser(data.user));
        } else {
          dispatch(loginError(data.error));
        }
      } catch (error) {
        dispatch(loginError(error.message));
      }
    };
  
    // Define logout function to dispatch logout action
    const logout = () => {
      dispatch(logoutUser());
    };
  
    return {
      authentication,
      signup,
      login,
      logout,
    };
  }

  export default useAuth;
