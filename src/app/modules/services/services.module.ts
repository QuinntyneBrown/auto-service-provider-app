import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { ServicesPageComponent } from "./services-page.component";

const declarables = [ServicesPageComponent];

@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: declarables
})
export class ServicesModule { }
