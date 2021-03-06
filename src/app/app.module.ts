// Modules
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';

// Ionic-native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Market } from '@ionic-native/market';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BarcodeScanner } from '@fttx/barcode-scanner';
import { NativeAudio } from '@ionic-native/native-audio';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';
import { Zeroconf } from '@ionic-native/zeroconf';
import { Network } from '@ionic-native/network';

// Pages
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { ScanSessionsPage } from '../pages/scan-sessions/scan-sessions';
import { EditScanSessionPage } from '../pages/scan-session/edit-scan-session/edit-scan-session';
import { SelectScanningModePage } from '../pages/scan-session/select-scanning-mode/select-scanning-mode';
import { WelcomePage } from '../pages/welcome/welcome';
import { ScanSessionPage } from '../pages/scan-session/scan-session';
import { SelectServerPage } from '../pages/select-server/select-server';
// import { BuyProPage } from '../pages/buy-pro/buy-pro';

// Providers
import { ServerProvider } from '../providers/server'
import { Settings } from '../providers/settings'
import { CameraScannerProvider } from '../providers/camera-scanner';
import { ScanSessionsStorage } from '../providers/scan-sessions-storage'

// Compontents
import { MyApp } from './app.component';
import { CircleTextComponent } from '../components/circle-text';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ScanSessionsPage,
    EditScanSessionPage,
    SelectScanningModePage,
    WelcomePage,
    ScanSessionPage,
    SelectServerPage,
    CircleTextComponent,
    SettingsPage,
    HelpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ScanSessionsPage,
    SelectServerPage,
    EditScanSessionPage,
    SelectScanningModePage,
    SettingsPage,
    HelpPage,
    WelcomePage,
    ScanSessionPage,
  ],
  providers: [
    ServerProvider,
    CameraScannerProvider,
    Settings,
    ScanSessionsStorage,
    GoogleAnalytics,
    StatusBar,
    SplashScreen,
    Market,
    Device,
    SocialSharing,
    AppVersion,
    BarcodeScanner,
    Zeroconf,
    Network,
    NativeAudio,
    InAppPurchase2,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
