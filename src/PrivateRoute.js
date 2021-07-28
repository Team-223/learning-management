import { useContext } from "react"
import { Redirect, Route } from "react-router";
import { MyContext } from "./Context";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, gituser, name} = useContext(MyContext);

    return (
        <Route
            {...rest}
            render={
                props => {
                    if ( (user) || (gituser) || (name)){
                        return <Component {...rest} {...props} />
                    } else {
                     
                        return <Redirect to='/' />
                            
                        
                       
                    }
                }
            }
        />  
    )
};

export default PrivateRoute;