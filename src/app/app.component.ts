import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormData } from './core';

import { FormDataService }            from './core/services/formData.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-quiz';
   @Input() formData!: FormData;

    constructor(private formDataService: FormDataService,  private _elementRef: ElementRef) {
    }

    ngOnInit() {
        this._elementRef.nativeElement.removeAttribute("ng-version");
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }
}
