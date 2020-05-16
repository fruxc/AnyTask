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
import { Link, useHistory } from "react-router-dom";
import { Toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  async function Register() {
    setLoading(true);
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      Toast("All fields are required!");
    } else if (password !== confirmPassword) {
      Toast("Password Does Not Match");
    } else {
      const res = await registerUser(email, password, firstName, lastName);
      console.log(res);
      if (res) {
        history.replace("/login");
        Toast("User Registration Success");
        setLoading(false);
      }
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>{" "}
      <IonLoading message="Please wait..." duration={2000} isOpen={loading} />
      <IonContent>
        <>
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
            <IonLabel position="floating">First Name</IonLabel>
            <IonInput
              type="text"
              placeholder="First Name"
              name="firstName"
              onIonChange={(e: any) => setFirstName(e.target.value)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              onIonChange={(e: any) => setLastName(e.target.value)}
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
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onIonChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </IonItem>
          <div style={{ padding: 8 }}>
            <IonButton expand="full" style={{ margin: 14 }} onClick={Register}>
              Create Account
            </IonButton>
            <p>
              Already have an account?<Link to="/login"> Login</Link>
            </p>
          </div>
        </>
      </IonContent>
    </IonPage>
  );
};

export default Register;
