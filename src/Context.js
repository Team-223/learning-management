import { createContext, useState, useEffect} from 'react';
import firebase from './firebase';
import 'firebase/auth';


export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [ user, setUser] = useState(null);
    const [gituser, setGituser] = useState(null);
    const [name, setName] = useState(null);
    const [showmodules, setShowModules] = useState([]);
    const [showAnnouncemets, setShowAnnouncemets] = useState([]);
    

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

    const teacherModules = () => {
        const db = firebase.firestore();
        db.collection("modules")
        .onSnapshot((querySnapshot) => {
            console.log(querySnapshot.docs,'querysanpshot')
            const array = []
            querySnapshot.docs.forEach((doc) => {
            console.log(doc,'doc')
            let currentID = doc.id
            let appObj = { ...doc.data(), ['id']: currentID }
            array.push(appObj)
        });
        setShowModules(array)

        })
    }

    const teacherAnnounment = () => {
        const db = firebase.firestore();
        db.collection("annoncements")
        .onSnapshot((querySnapshot) => {
            console.log(querySnapshot.docs,'querysanpshot')
            const array = []
            querySnapshot.docs.forEach((doc) => {
            console.log(doc,'doc')
            let currentID = doc.id
            let appObj = { ...doc.data(), ['id']: currentID }
            array.push(appObj)
        });
        setShowAnnouncemets(array)

        })

    }



    

    const initialState = {
        user,
        teacherModules,
        showmodules,
        setShowModules,
        showAnnouncemets,
        setShowAnnouncemets,
        teacherAnnounment

    };
    return (
        <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
    )
}

export default ContextProvider;