import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Address }             from './../../core/models/formData.model';
import { FormDataService }     from './../../core/services/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
    title = 'Where do you live?';
    address!: Address | any;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setAddress(this.address);
        return true;
    }

    goToPrevious(form: any) {
       this.router.navigate(['/work']);
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    }
}
