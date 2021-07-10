import { Component, OnInit, AfterViewInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

import { Personal }            from '../../core/models/formData.model';
import { FormDataService }     from '../../core/services/formData.service';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './personal.component.html' // material
    // ,templateUrl: './personal2.component.html' // bootstrap
})

export class PersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal!: Personal | any;
    form: any;
    personalForm: FormGroup = new FormGroup ({
      firstName: new FormControl(),
      umur :new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
    });
    isProcess:boolean=false;
    constructor(private router: Router, private formDataService: FormDataService, private dataFB: FormBuilder,) {
    }

    ngOnInit() {
      this.personalForm = this.dataFB.group({
        firstName: ['', [Validators.required,Validators.minLength(1), Validators.maxLength(50)]],
        umur : ['', [Validators.required,Validators.min(1), Validators.max(200)]],
        email: ['', [Validators.required,Validators.email]],
        gender: ''
      });
      this.personal = this.formDataService.getPersonal();
      if(this.personal) {
        this.personalForm.patchValue({
          firstName: this.personal.firstName,
          umur: this.personal.umur,
          email: this.personal.email,
          gender: this.personal.gender
        });
      }
      // console.log(this.personalForm)
    }
    ngAfterViewInit(){
    }
    // get personalFormControl() {
    //   return this.personalForm.controls;
    // }
    prepareData(): Personal {
      const controls = this.personalForm.controls;
      const _n = new Personal();
      _n.firstName = controls.firstName.value;
      _n.umur = controls.umur.value;
      _n.email = controls.email.value;
      _n.gender = controls.gender.value;
      return _n;
    }

    save(form: any): boolean {
        // if (!form.valid) {
        //     return false;
        // }
        const controls = this.personalForm.controls;
        if (this.personalForm.invalid) {
          Object.keys(controls).forEach(controlName => {
            controls[controlName].markAsTouched()
          });
          return false;
        }
        this.personal = this.prepareData();
        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        this.isProcess = true;
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    }
}
