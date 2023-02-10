import { createStore } from "solid-js/store"

function checkValid( { element, validators = [] } : {
    element : HTMLInputElement,
    validators : Array<any>,
}, setErrors, errorClass : string) {
    return async () => {
        element.setCustomValidity("");
        element.checkValidity();
        let message = element.validationMessage;
        if (!message) {
            for (const validator of validators) {
                const text = await validator(element);
                if (text) {
                    element.setCustomValidity(text)
                    break
                }
            }
            message = element.validationMessage;
        }
        if (message) {
            errorClass && element.classList.toggle(errorClass, true);
            setErrors({ [element.name] : message });
        }
    }
}
