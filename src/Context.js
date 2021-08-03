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
            querySnapshot.forEach((doc) => {
            
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const array = []
            let currentID = doc.id
            let appObj = { ...doc.data(), ['id']: currentID }
            array.push(appObj)
            setShowModules(array)
            console.log(showmodules, 'array of modules')
            });

        })
    }

    const teacherAnnounment = () => {
        const db = firebase.firestore();
        db.collection("announcements")
        .get()
        .then((querySnapshot) => {
            querySnapshot((doc) => {
            
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const array = []
            let currentID = doc.id
            let appObj = { ...doc.data(), ['id']: currentID }
            array.push(appObj)
            setShowAnnouncemets(array)
            console.log(showAnnouncemets, 'array of announcemets')
            });

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
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