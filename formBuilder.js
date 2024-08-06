export class FormBuilder {
    constructor(config) {
        this.config = config;
    }

    buildForm(formId) {
        const form = document.getElementById(formId);
        this.config.forEach(field => {
            const fieldElement = this.createField(field);
            form.appendChild(fieldElement);
        });
        form.appendChild(this.createSubmitButton());
        form.appendChild(this.getDataLocation());
    }
   

    createField(field) {
        const div = document.createElement('div');
        div.className = 'mb-3';
        
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.className = 'form-label';
        label.textContent = field.label;
        div.appendChild(label);

        let input;
        switch (field.type) {
            case 'text':
            case 'email':
            case 'number':
            case 'date':
                input = document.createElement('input');
                input.type = field.type;
                input.className = 'form-control';
                input.id = field.id;
                input.name = field.id;
                input.required = field.required;
                if (field.onInput) {
                    input.addEventListener('input', window[field.onInput]);
                }
                div.appendChild(input);
                break;
            case 'radio':
                field.options.forEach(option => {
                    const radioDiv = document.createElement('div');
                    radioDiv.className = 'form-check';
                    
                    const radioInput = document.createElement('input');
                    radioInput.type = 'radio';
                    radioInput.className = 'form-check-input';
                    radioInput.id = `${field.id}-${option}`;
                    radioInput.name = field.id;
                    radioInput.value = option;
                    radioInput.required = field.required;
                    
                    const radioLabel = document.createElement('label');
                    radioLabel.className = 'form-check-label';
                    radioLabel.htmlFor = `${field.id}-${option}`;
                    radioLabel.textContent = option;
                    
                    radioDiv.appendChild(radioInput);
                    radioDiv.appendChild(radioLabel);
                    div.appendChild(radioDiv);
                });
                break;
            case 'select':
                input = document.createElement('select');
                input.className = 'form-select';
                input.id = field.id;
                input.name = field.id;
                input.required = field.required;
                field.options.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.textContent = option.label;
                    input.appendChild(optionElement);
                });
                div.appendChild(input);
                break;
            case 'checkbox':
                field.options.forEach(option => {
                    const checkDiv = document.createElement('div');
                    checkDiv.className = 'form-check';
                    
                    const checkInput = document.createElement('input');
                    checkInput.type = 'checkbox';
                    checkInput.className = 'form-check-input';
                    checkInput.id = `${field.id}-${option.value}`;
                    checkInput.name = field.id;
                    checkInput.value = option.value;
                    
                    const checkLabel = document.createElement('label');
                    checkLabel.className = 'form-check-label';
                    checkLabel.htmlFor = `${field.id}-${option.value}`;
                    checkLabel.textContent = option.label;
                    
                    checkDiv.appendChild(checkInput);
                    checkDiv.appendChild(checkLabel);
                    div.appendChild(checkDiv);
                });
                break;
            case 'textarea':
                input = document.createElement('textarea');
                input.className = 'form-control';
                input.id = field.id;
                input.name = field.id;
                input.required = field.required;
                input.rows = 3;
                div.appendChild(input);
                break;
        }

        return div;
    }

    createSubmitButton() {
        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn btn-primary';
        button.textContent = 'Submit';
        return button;
    }
    getDataLocation(){
        const div = document.createElement('div');
        const inputLatitude = document.createElement('input');
        inputLatitude.type = 'hidden';
        inputLatitude.id = 'latitude';
        inputLatitude.name = 'latitude';
        div.appendChild(inputLatitude);
        const inputLongitude = document.createElement('input');
        inputLongitude.type = 'hidden';
        inputLongitude.id = 'longitude';
        inputLongitude.name = 'longitude';
        div.appendChild(inputLongitude);
        return div;
        

    }
}
