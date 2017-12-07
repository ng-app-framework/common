import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgCoreModule} from "@ng-app-framework/core";
import {NgLocationModule} from "@ng-app-framework/location";
import {NgProgressModule} from "@ng-app-framework/progress";
import {NgSessionModule} from "@ng-app-framework/session";
import {NgStorageModule} from "@ng-app-framework/storage";
import {NgTimeModule} from "@ng-app-framework/time";
import {NgValidationModule} from "@ng-app-framework/validation";

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
        NgCoreModule,
        NgLocationModule,
        NgProgressModule,
        NgSessionModule,
        NgStorageModule,
        NgTimeModule,
        NgValidationModule
    ],
    exports     : [
        NgCoreModule,
        NgLocationModule,
        NgProgressModule,
        NgSessionModule,
        NgStorageModule,
        NgTimeModule,
        NgValidationModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class NgCommonModule {

}
