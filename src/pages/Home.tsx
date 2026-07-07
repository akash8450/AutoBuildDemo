import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { logoAndroid, cloudDone } from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Auto Build Demo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>
          <IonCardContent style={{ textAlign: "center" }}>
            <IonIcon
              icon={logoAndroid}
              style={{
                fontSize: "80px",
                color: "#3DDC84",
              }}
            />

            <h1>🚀 GitHub Actions APK Build</h1>

            <p>
              This APK was generated automatically after pushing code to GitHub.
            </p>

            <IonButton expand="block">
              Build Successful
            </IonButton>

            <br />

            <IonButton
              expand="block"
              color="success"
            >
              <IonIcon icon={cloudDone} slot="start" />
              Downloaded from GitHub Actions
            </IonButton>

            <h3 style={{ marginTop: "20px" }}>
              Version 1.0.1
            </h3>

          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;