import {Component, OnInit, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {WizardComponent as BaseWizardComponent} from "angular-archwizard/lib/components/wizard.component";

@Component({
  selector: 'app-nouveaufacturefournisseur',
  templateUrl: './nouveaufacturefournisseur.component.html',
  styleUrls: ['./nouveaufacturefournisseur.component.scss']
})
export class NouveaufacturefournisseurComponent implements OnInit {

  simpleItems: any = [];
  selectedSimpleItema: any = null;

  validationForm1: UntypedFormGroup;

  isForm1Submitted: Boolean;

  @ViewChild('wizardForm') wizardForm: BaseWizardComponent;


  constructor(public formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {

    this.simpleItems = ['Client', 'Fournisseur'];


    /**
     * form1 value validation
     */
    this.validationForm1 = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      userName : ['', Validators.required]
    });


    this.isForm1Submitted = false;

  }


  /**
   * Returns form
   */
  get form1() {
    return this.validationForm1.controls;
  }
  form1Submit() {
    if(this.validationForm1.valid) {
      this.wizardForm.goToNextStep();
    }
    this.isForm1Submitted = true;
  }



}
