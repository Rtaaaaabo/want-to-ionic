import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Amplify Config
import Amplify, { Auth } from 'aws-amplify';
import PubSub from '@aws-amplify/pubsub';
import API from '@aws-amplify/api';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);
Auth.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
