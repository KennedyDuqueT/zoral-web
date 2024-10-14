import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import {
  useFirebaseApp,
  FirestoreProvider,
  AuthProvider,
  StorageProvider,
  FunctionsProvider,
} from "reactfire";

type Props = {
  children: JSX.Element;
};
/**
 * Main component that configures Firebase and provides the Firebase providers
 * @param param Component properties, including 'children'
 * @returns  TSX containing suppliers and secondary components
 */

function Main({ children }: Props) {
  const app = useFirebaseApp();
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const functions = getFunctions(app);
  auth.useDeviceLanguage();
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>
          <FunctionsProvider sdk={functions}>{children}</FunctionsProvider>
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default Main;
