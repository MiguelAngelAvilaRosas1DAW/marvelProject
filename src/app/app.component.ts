import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen max-w-screen-2xl justify-between mx-auto pt-4">
    <app-header class="col-span-3"/>
    <router-outlet />
    <app-footer class="col-span-3"/>
  </div>
`
})
export class AppComponent {
  title = 'angular-renaissance-fundamentals-workshop';

}
