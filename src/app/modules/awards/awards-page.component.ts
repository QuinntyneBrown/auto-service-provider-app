import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./awards-page.component.html"),
    styles: [require("./awards-page.component.scss")],
    selector: "awards-page"
})
export class AwardsPageComponent implements OnInit { 
    ngOnInit() {

    }
}
