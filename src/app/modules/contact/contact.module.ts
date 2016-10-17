import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ContactPageComponent } from './contact-page.component';

const declarables = [ContactPageComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ContactModule { }
