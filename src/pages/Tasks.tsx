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
  IonImg,
  IonList,
  useIonViewWillEnter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Toast } from "../toast";
import { uploadTaskToFirebase, retrieveTask } from "../firebaseConfig";
import { useSelector } from "react-redux";

const Tasks: React.FC = () => {
  const history = useHistory();
  const username = useSelector((state: any) => state.user.username);
  const image = "http://placekitten.com/g/200/300";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  type Item = {
    src: string;
    text: string;
  };

  useIonViewWillEnter(() => {
    const tasksList = retrieveTask(username);
    console.log(tasksList);
  });
  const items: Item = {
    src: "http://placekitten.com/g/200/300",
    text: "a picture of a cat",
  };

  async function uploadToFirebase() {
    if (title.trim() === "" || description.trim() === "") {
      Toast("All fields are required!");
    } else {
      const res = await uploadTaskToFirebase(
        title,
        description,
        image,
        username
      );
      console.log(res);
      if (res) {
        history.replace("/login");
        Toast("Added Registration Success");
      }
    }
  }

  //   ImagePicker.hasReadPermission().then(
  //     (result) => {
  //       if (result == false) {
  //         ImagePicker.requestReadPermission();
  //       } else if (result == true) {
  //         ImagePicker.getPictures({
  //           maximumImagesCount: 1,
  //         }).then(
  //           (results) => {
  //             for (var i = 0; i < results.length; i++) {
  //               uploadImageToFirebase(results[i]);
  //             }
  //           },
  //           (err) => console.log(err)
  //         );
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

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
        <IonList>
          <IonItem>
            <IonImg src={items.src} />
          </IonItem>
          <IonItem>
            <IonImg />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Title</IonLabel>
            <IonInput
              onIonChange={(e: any) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Title"
              name="title"
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonInput
              onIonChange={(e: any) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter Description"
              name="description"
            />
          </IonItem>
          <IonButton onClick={uploadToFirebase}>Create Task</IonButton>
          <IonButton>Cancel</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tasks;
