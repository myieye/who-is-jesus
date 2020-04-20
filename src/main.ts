import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initScreenSizeCssClassHandlers } from './utils/screen-size-util';

if (environment.production) {
  enableProdMode();
}

initScreenSizeCssClassHandlers();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
