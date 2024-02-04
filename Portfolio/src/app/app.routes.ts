import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'Portfolio/imprint', component: ImprintComponent },
    { path: 'Portfolio/privacy', component: PrivacyComponent },
];
