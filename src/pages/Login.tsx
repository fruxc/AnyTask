import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import { loginUser } from "../firebaseConfig";
import { Toast } from "../toast";
import { setUserState } from "../redux/ActionCreators";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setLoading(true);
    if (email.trim() === "" || password.trim() === "") {
      Toast("All fields are required!");
    } else {
      const res: any = await loginUser(email, password);
      if (res) {
        console.log(res);
        dispatch(setUserState(res.user.email));
        history.replace("/dashboard");
        Toast("Login successful with credentials");
      }
      setLoading(false);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={1000} isOpen={loading} />
      <IonContent className="padding">
        <IonItem>
          <IonLabel position="floating">Email Address</IonLabel>
          <IonInput
            type="email"
            placeholder="Email Address"
            name="email"
            onIonChange={(e: any) => setEmail(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Password"
            name="password"
            onIonChange={(e: any) => setPassword(e.target.value)}
          />
        </IonItem>
        <div style={{ padding: 10, paddingTop: 20 }}>
          <IonButton expand="full" style={{ margin: 14 }} onClick={login}>
            Submit
          </IonButton>
          <IonButton
            routerLink="/register"
            expand="full"
            style={{ margin: 14 }}
          >
            Create Account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
