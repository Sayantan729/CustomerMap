import { AbstractControl, ValidationErrors } from '@angular/forms';

export class VehicleNumValidators {
    static checkFormat(control: AbstractControl): ValidationErrors | null {
        let regex = new RegExp(/^[A-Z]{2}[0-9]{1,2}(?:[A-Z])?(?:[A-Z]*)?[0-9]{4}$/);
        if (control.value !== null) {
            if (!regex.test(control.value as string))
                return { 'formatNotProper': true };
            return null;
        }
        return { 'formatNotProper': true };

    }
}