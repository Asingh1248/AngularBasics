import { Component, OnInit } from '@angular/core';

@Component({
  // this is a declarator
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  // reference to the html file created in the new component.
  styleUrls: ['./new-cmp.component.less'] //reference to the style file.
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in the New Component created";
  // In the class, we have added one variable called new component and the value is “Entered in new component created”.
  // The above variable is bound in the .new-cmp.component.html file as follows −
  constructor() { }

  ngOnInit() {
  }

}

// we can create components and link the same using the selector in the app.component.html file as per our requirements.
// Flow 1.app.module.ts---app.component .html---new-cmp.component.ts---new component .html
