import { Directive, ElementRef } from '@angular/core';
// import ElementRef
@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changing Directive.";
  }

}

// ng g directive changeTechangeText
// CREATE src/app/change-text.directive.spec.ts (241 bytes)tes)
// CREATE src/app/change-text.directive.ts (149 bytes)
// UPDATE src/app/app.module.ts (1178 bytes)

