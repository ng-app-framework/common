import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {CoreModule} from "@ng-app-framework/core";
import {LocationModule} from "@ng-app-framework/location";
import {ProgressModule} from "@ng-app-framework/progress";
import {SessionModule} from "@ng-app-framework/session";
import {StorageModule} from "@ng-app-framework/storage";
import {TimeModule} from "@ng-app-framework/time";
import {ValidationModule} from "@ng-app-framework/validation";

@Component({
    selector: 'app',
    template: `
        <div>It works!</div>
    `
})
export class AppComponent {

    constructor() {

    }
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        CoreModule,
        LocationModule,
        ProgressModule,
        SessionModule,
        StorageModule,
        TimeModule,
        ValidationModule
    ],
    exports     : [
        CoreModule,
        LocationModule,
        ProgressModule,
        SessionModule,
        StorageModule,
        TimeModule,
        ValidationModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class NgCommonModule {

}
