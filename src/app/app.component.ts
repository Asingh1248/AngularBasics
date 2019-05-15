import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
// Angular core is imported and referred as the Component and the same is used in the Declarator as −
export class AppComponent {
  title = 'BasicAngularTutorial';
  // The class AppComponent has a variable called title, which is displayed in the browser.
  //The @Component uses the templateUrl called app.component.html which is as follows −

  //t3:Understanding Binding
  months = ["Jan", "Feb", "Mar", "Apr", "May"];
  isavailable = true;  //t4: Try with false

  myClickFunction(event) {
    alert("Button is Clicked");
    console.log(event);
  }

  //t7 Pipes
  todaydate = new Date();
}


