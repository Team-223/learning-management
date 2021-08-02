import { createContext, useState, useEffect} from 'react';
import firebase from './firebase';
import 'firebase/auth';


export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [ user, setUser] = useState(null);
    const [gituser, setGituser] = useState(null);
    const [name, setName] = useState(null);

    

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                setUser(usr)
                // setGituser(null)
            } else {
                setUser(null)
            }
        });
    },[user]);

    // useEffect(()=>{
    //     firebase.auth().onAuthStateChanged((usr) => {
    //         if (usr) {
    //             setTeacher(usr)
    //         } else {
    //             setTeacher(null)
    //         }
    //     });
    // },[teacher]);



    

    const initialState = {user};
    return (
        <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    )
}

export default ContextProvider;