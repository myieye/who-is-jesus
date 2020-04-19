import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initScreenSizeHandler } from './utils/screen-size-handler';

if (environment.production) {
  enableProdMode();
}

initScreenSizeHandler();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
