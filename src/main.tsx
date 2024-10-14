import ScrollToTop from "./base-components/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";
import "./assets/css/app.css";
import { FirebaseAppProvider } from "reactfire";
import FirebaseProviders from "@/components/FirebaseProviders";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <FirebaseProviders>
          <Router />
        </FirebaseProviders>
      </Provider>
      <ScrollToTop />
    </FirebaseAppProvider>
  </BrowserRouter>
);
