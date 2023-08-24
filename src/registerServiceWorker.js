/* eslint-disable no-console */

import { register } from "register-service-worker";

if (import.meta.env.NODE_ENV === "production") {
  register(`${import.meta.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );

      self.addEventListener("offline", () => {
        window.alert("進入離線狀態");
      });
    },
    registered() {
      console.log("Service worker has been registered.");
      window.alert("service worker註冊完成");
    },
    cached() {
      console.log("Content has been cached for offline use.");
      window.alert("應用已緩存在本地");
    },
    updatefound() {
      console.log("New content is downloading.");
      window.alert("有更新內容，下載中");
    },
    updated() {
      console.log("New content is available; please refresh.");
      window.alert("更新內容已可使用，請重新開啟");
    },
  });
}
