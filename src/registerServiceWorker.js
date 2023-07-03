/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );

      navigator.serviceWorker.addEventListener("offline", () => {
        window.alert("offline? in here?");
      });
    },
    registered() {
      console.log("Service worker has been registered.");
      window.alert("registered!");
    },
    cached() {
      console.log("Content has been cached for offline use.");
      window.alert("cached!");
    },
    updatefound() {
      console.log("New content is downloading.");
      window.alert("New content is downloading.!");
    },
    updated() {
      console.log("New content is available; please refresh.");
      window.alert("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
      window.alert(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
    onmessage(msg) {
      console.log("get msg", msg);
    },
    onstatechange(state) {
      console.log("in onstatechange", state);
    },
  });
}
