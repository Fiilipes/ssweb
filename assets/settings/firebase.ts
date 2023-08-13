import {initializeApp} from "@firebase/app";
import {collection, getDocs, getFirestore} from "@firebase/firestore";

// env
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "survival-server-org.firebaseapp.com",
    projectId: "survival-server-org",
    storageBucket: "survival-server-org.appspot.com",
    messagingSenderId: "45781323100",
    appId: "1:45781323100:web:e952c1b5e78ca255764599",
    measurementId: "G-Y8E982JSFL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref__ss  = collection(db, "ssbot");

// Functions to get data from Firebase
const getSS = async (ids: string[]) => {
    const data = await getDocs(ref__ss);

    const returnData:any = {}

    ids.forEach((id) => {
        returnData[id] = data.docs.map((doc) => ({...doc.data(), id: doc.id} )).find(doc => doc.id === id) as any
    })
    return returnData;
}

export {
    getSS
}

export default db;
