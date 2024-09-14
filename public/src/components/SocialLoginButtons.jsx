import React from "react";
import styled from "styled-components";
import { BsGoogle, BsGithub, BsFacebook } from "react-icons/bs";
import {
  EmailAuthCredential,
  EmailAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateEmail,
} from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { firebaseLoginRoute } from "../utils/APIRoutes";

// const REACT_APP_LOCALHOST_KEY = "chat-app-user"

export default function SocialLoginButtons() {
  const providers = {
    google: new GoogleAuthProvider().addScope("email"),
    facebook: new FacebookAuthProvider().addScope("email"),
    github: new GithubAuthProvider().addScope("email"),
  };
  const navigate = useNavigate();

  const firebaseLogin = async (loginType) => {
    try {
      const provider = providers[loginType];
      console.log(provider);
      const userData = await signInWithPopup(firebaseAuth, provider);
      console.log(userData);
      const email = userData.user.email
        ? userData.user.email
        : userData.user.providerData[0].email;
        console.log(email);
      const { data } = await axios.post(firebaseLoginRoute, { email });
      console.log(data);
     

      if (data.status) {
        console.log("in if");
        localStorage.setItem(
"chat-app-user",
          JSON.stringify(data.user)
        );
        
          navigate("/");
        
       
      } else {
        console.log("in else");
       
        navigate("/setUsername")};
      
    } catch (err) {
    
    }
  };
  return (
    
    <SocialLoginContainer>
      <button type="button" onClick={() => firebaseLogin("google")}>

        <BsGoogle />
      </button>
      <button type="button" onClick={() => firebaseLogin("facebook")}>
        <BsFacebook />
      </button>
      <button type="button" onClick={() => firebaseLogin("github")}>
        <BsGithub />
      </button>
    </SocialLoginContainer>
  );
}

const SocialLoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: transparent;
    border: 0.1rem solid #4e0eff;
    font-size: 1.5rem;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
