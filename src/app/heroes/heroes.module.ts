import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ]
})

export class HeroesModule {}

