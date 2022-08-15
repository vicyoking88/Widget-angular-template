import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MyLibModule } from 'my-lib'
import { AppComponent } from './components/app.component'
import { createCustomElement } from '@angular/elements'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: 'aqui-servicio-interceptor',
      multi: true,
    },
  ],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const imagenEspacio = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('widget-selector', imagenEspacio);
  }
  ngDoBootstrap() {}
}
