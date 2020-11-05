import { AbstractControl, ValidationErrors } from '@angular/forms';

export class DateValidators {
    static fieldRequired(control: AbstractControl): ValidationErrors | null {
        if (control.value !== null) {
            //console.log(control.value);
            
            if (!(control.value[0] && control.value[1]))
                return { 'required': true };
            return null;
        }
        return { 'required': true };
    }
}