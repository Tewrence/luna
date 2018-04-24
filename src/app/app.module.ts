/**
 * app 模块
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {LoggerModule, NGXLogger, NgxLoggerLevel} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';

import {AppRouterModule} from './router/router.module';

import {AppComponent} from './pages/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeModule} from 'angular-tree-component';

// service
import {AppService, HttpService, LocalStorageService, LogService, UUIDService} from './app.service';


import {NgProgressModule} from 'ngx-progressbar';
import {TestPageComponent} from './test-page/test-page.component';
import {MaterialModule} from './plugins/MaterialModule.component';
import {CookieService} from 'ngx-cookie-service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';


import {Pipes} from './pipes/pipes';
import {PagesComponents} from './pages/pages.component';
import {ElementComponents} from './elements/elements.component';
import {ChangLanWarningDialogComponent} from './elements/nav/nav.component';
import {CleftbarDialogComponent} from './pages/control/cleftbar/cleftbar.component';
import {DialogService, ElementDialogAlertComponent} from './elements/dialog/dialog.service';
import {pluginModules} from './plugins/plugins';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgProgressModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    NgxDatatableModule,
    TreeModule,
    AppRouterModule,
    ...pluginModules
  ],
  declarations: [
    AppComponent,
    TestPageComponent,
    ...Pipes,
    ...ElementComponents,
    ...PagesComponents
  ],
  entryComponents: [
    CleftbarDialogComponent,
    ElementDialogAlertComponent,
    ChangLanWarningDialogComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    // {provide: LoggerConfig, useValue: {level: LoggerLevel.WARN}},
    // {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
    AppService,
    HttpService,
    LogService,
    UUIDService,
    LocalStorageService,
    DialogService,
    CookieService,
    NGXLogger,
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}

  ]
})
export class AppModule {
}
