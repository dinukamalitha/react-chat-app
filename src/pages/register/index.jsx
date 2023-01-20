import React, { useState } from "react";
import Add from "../../assets/imgs/addAvatar.png";
import "./style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [err, setErr] = useState(false);
    //const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
            //const storageRef = ref(storage, displayName);


            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        //setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            //setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="containerWrapper">
                <div className="titleContainer">
                    <span className="heading">Din-Chat</span>
                    <span className="title">Register</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <div className="label" style={{display:'flex'}}>
                            <img src={Add} alt="ADD" width="40px" style={{marginLeft:'5px',cursor:'pointer'}}/>
                            <span style={{display:'flex',marginLeft:'5px',alignItems:'center',cursor:'pointer'}}>Add an image</span>
                        </div>
                    </label>

                    <div className="btnContainer">
                        {/*disabled={loading}*/}
                        <button >Sign up</button>
                        {/*{loading && "Uploading and compressing the image please wait..."}*/}
                        {err && <span>Something went wrong</span>}
                    </div>

                </form>

                <p>You do have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;