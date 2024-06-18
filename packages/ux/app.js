/*
  ATTENTION!!! ACHTUNG!!! PELIGRO!!! PIZDETS!!! ZRADA!!! AZ5!!!
  -------------------------------------------------------------
  Any change to architecture, addition of 3rd party modules MUST be discussed with Dmitriy K and John K.
  Do not add 3rd party libraries on a whim!!!
*/

import { dispose } from "../../../azos-js/packages/azos/types.js";
import { application } from "../../../azos-js/packages/azos/application.js";
import { Arena } from "../../../azos-js/packages/azos-ui/arena.js";
import { ConLog } from "../../../azos-js/packages/azos/ilog.js";
import { BrowserStorage } from "../../../azos-js/packages/azos/storage.js";
import { AppSync } from "../../../azos-js/packages/azos/appsync.js";
import { IClient } from "../../../azos-js/packages/azos/client.js";
import { LOG_TYPE } from "../../../azos-js/packages/azos/log.js";

//  Application configuration root ======================================
const cfgApp = {
  id: "folio",
  name: "$(id)",
  description: "Folio UI Portal",
  //session: null, //{type: "UiSession"},
  modules: [
    {name: "log", type: ConLog}, //will add chronicle-backed composite logger soon
    {name: "localStorage", type: BrowserStorage, isSession: false}, //localStorage to store tokens etc..
    {name: "tabSync", type: AppSync}, //needed to sync app state across tabs,
    {name: "client", type: IClient, url: "/", oAuthUrl: "/app/access-token"}//server
    //{name: "client", type: IClient, url: "https://folio.g8day-dev.com/", oAuthUrl: "/app/access-token", useOAuth: false, accessToken: "xyz"}//client
  ]
};

// Create application chassis
const app = application(cfgApp);
// Load session with the user, if the page is coming from OAuth flow, the INIT object will be injected by the server
app.session.boot(window.G8_USER_OBJECT_INIT);
//Introduce GLOBAL variable for App Chassis
window.AZOS_APP = app;

//Launch UI Arena
Arena.launch(app);

//temp debug user state
window.setInterval(async () => {
  document.getElementById("preUser").innerHTML = JSON.stringify(app.session.user.toInitObject(), null, 2);
  var isSecure = document.getElementById('chkSecure').checked;
  try{
    const cl = app.moduleLinker.resolve(IClient);
    const got = await cl.post(`system/test/${isSecure ? "secure" : ""}echo`, {x: Date.now()})
    app.log.write({text: `Response: ${JSON.stringify(got.data)}`});
   // console.dir(got);
  }catch(e){
    app.log.write({type: LOG_TYPE.ERROR, text: e.message, exception: e});
  }
}, 1000);


// Handle UNLOADING/CLOSING of tab/window
//https://developer.chrome.com/docs/web-platform/page-lifecycle-api
window.addEventListener("beforeunload", (evt) => {
  if (app.dirty){
    evt.preventDefault();
    evt.returnValue = true;
    return;
  }
});

//Called on tab close POST-factum asking questions.
//Not called if user decides to cancel tab close
window.addEventListener("pagehide", () => dispose(app));
