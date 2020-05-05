import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonIcon,
  IonButton,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";
import { logOutOutline, addCircleSharp } from "ionicons/icons";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();
  async function logout() {
    setBusy(true);
    await logoutUser();
    history.replace("/");
    setBusy(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={logout}>
              <IonIcon slot="icon-only" icon={logOutOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>{" "}
      <IonLoading message="Please wait..." duration={1000} isOpen={busy} />
      <IonContent className="padding">
        <IonFab horizontal="center" vertical="top" edge={true} slot="fixed">
          <IonFabButton size="small">+</IonFabButton>
        </IonFab>
        <p style={{ textAlign: "center", padding: 20 }}>
          Hello {username.split("@")[0]}!<br />
          Want to create a new task???
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
