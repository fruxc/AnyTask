import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
} from "@ionic/react";
import React from "react";
const Tasks: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle>New Task</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="padding"
      >
        <IonItem>
          <IonButton>Select Image</IonButton>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Title</IonLabel>
          <IonInput type="text" placeholder="Enter Title" name="title" />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter Description"
            name="description"
          />
        </IonItem>
        <IonButton>Create Task</IonButton>
        <IonButton>Cancel</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
