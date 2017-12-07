import '../lib/polyfills';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgCommonModule} from "./app/NgCommonModule";

platformBrowserDynamic().bootstrapModule(NgCommonModule)
    .catch(err => console.log(err));
