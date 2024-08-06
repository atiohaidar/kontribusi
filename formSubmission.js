import { Utilities } from "./utilities.js";
export class FormSubmission {
    constructor(formId, submitUrl) {
        this.form = document.getElementById(formId);
        this.submitUrl = submitUrl;
    }

    setupSubmission() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (this.form.checkValidity()) {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());
            data.interests = formData.getAll('interests');

            try {
                Utilities.showLoading();
                const response = await fetch(this.submitUrl, {
                    method: 'POST',
                    redirect: 'follow',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    const result = await response.json();
                    this.showSuccessMessage(result.row);
                    localStorage.setItem('formData', JSON.stringify(data));
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                this.showErrorMessage();
            } finally {
                Utilities.hideLoading();
            }
        } else {
            this.form.classList.add('was-validated');
        }
    }

    showSuccessMessage(row) {
        const card = document.querySelector('.card');
        card.innerHTML = `
            <div class="card-body text-center">
                <h1>Thank You!</h1>
                <p>Your form has been submitted successfully. Data added to row ${row}.</p>
            </div>
        `;
    }

    showErrorMessage() {
        const dialogMessage = document.getElementById('customDialogMessage');
        dialogMessage.textContent = 'An error occurred while submitting the form. Please try again.';
        new bootstrap.Modal(document.getElementById('customDialog')).show();
    }
}
