import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static notBeforeToday(control: AbstractControl): ValidationErrors|null {
        let date = control.value;
        if(date > new Date()) {
            return { notBefore: { date: new Date() } }
        }
        return null;
    }

    static listLength(min: number, max: number) {
        return (control: AbstractControl) => {
            let list = control.value;
            if(list.length < min || list.length > max) {
                return { listlength: { min, max } };
            }
            return null;
        }
    }
}