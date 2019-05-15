import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Below is structure for the ngmodule is as shown below − 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive'; //t6(Directves When We Created Custom Directive)
// includes the new-cmp component we created

import { RouterModule } from '@angular/router';
import { SqrtPipe } from './app.sqrt';
@NgModule({
  declarations: [

    SqrtPipe,
    // It is an array of components created. If any new component gets created, it will be imported first and the reference will be included in declarations 
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective
    // the AppComponent is the name given, i.e., the variable to store the reference of the app. Component.ts and the same is given to the bootstrap. 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'new-cmp',
        component: NewCmpComponent
        // t9:Router
      }
      // Path is the name of the router and component is the name of the class, i.e., the component created.
    ])
    // It is an array of modules required to be used in the application
  ],

  providers: [
    // This will include the services created.
  ],
  bootstrap: [AppComponent
    // This includes the main app component for starting the execution.
  ]
})
export class AppModule { }
