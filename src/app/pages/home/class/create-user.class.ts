import { FormGroup } from '@angular/forms';

export class FormGroupTyped<T> extends FormGroup {
    get values(): T {
        return this.values;
    }
}