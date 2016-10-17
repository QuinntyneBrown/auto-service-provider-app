import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AwardsPageComponent } from './awards-page.component';

const declarables = [AwardsPageComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class AwardsModule { }
