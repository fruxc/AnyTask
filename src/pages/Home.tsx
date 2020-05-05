import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Any Tasks</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="padding">
        <IonButton
          expand="full"
          style={{ margin: 14 }}
          routerLink="/login"
          color="primary"
        >
          Login
        </IonButton>
        <IonButton
          expand="full"
          style={{ margin: 14 }}
          routerLink="/register"
          color="secondary"
        >
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
