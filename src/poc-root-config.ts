import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import PubSub from "pubsub-js";
import * as isActive from "./activity-functions";
import { BehaviorSubject } from 'rxjs';

const publish = (event, data) => PubSub.publish(event, data)
const subscribe = (event, callback) => PubSub.subscribe(event, callback);

let currentNameSubject = new BehaviorSubject('');

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
applications.map((mfe: any) => registerApplication({
  ...mfe,
  customProps: {
    currentNameSubject,
    publish,
    subscribe,
  }
}))
layoutEngine.activate();
start();
