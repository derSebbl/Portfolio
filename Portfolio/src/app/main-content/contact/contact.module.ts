import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';


@NgModule({
    declarations: [
        // Remove the declaration of ContactComponent from here
    ],
    imports: [
        CommonModule,
        FormsModule,
        ContactComponent // Add the import of ContactComponent here
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }