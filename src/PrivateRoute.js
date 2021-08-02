import { useContext } from "react"
import { Redirect, Route } from "react-router";
import { MyContext } from "./Context";
import firebase from "./firebase";
import 'firebase/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(MyContext);

    return (
        <Route
            {...rest}
            render={
                props => {
                    if (user){
                        return <Component {...rest} {...props} />
                    } else { 
                        firebase.auth().signOut()
                        return <Redirect to='/' /> 

                        
                            
                        

                    
                    }
                }
            }
        />  
    )
};

export default PrivateRoute;