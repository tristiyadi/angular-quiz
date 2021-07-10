import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../../core/models/formData.model';
import { FormDataService }            from '../../core/services/formData.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Terima Kasih';
    @Input() formData!: FormData | any;
    isFormValid: boolean = false;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }

    submit() {
        alert('Ntap Gan!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
