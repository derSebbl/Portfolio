import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ContactComponent,
        NgModule
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }