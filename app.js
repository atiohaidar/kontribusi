import { formConfig } from './formConfig.js';
import { FormBuilder } from './formBuilder.js';
import { FormSubmission } from './formSubmission.js';
import { Utilities } from './utilities.js';

document.addEventListener('DOMContentLoaded', () => {
    const formBuilder = new FormBuilder(formConfig);
    formBuilder.buildForm('dynamicForm');

    const formSubmission = new FormSubmission('dynamicForm', 'https://script.google.com/macros/s/AKfycbxlvWt36gZSOKtSn2pGSWxTHy_L-rB7RAZQmiP5Hd2Nedv-tq0tKftYCVtDE3G8_y29lQ/exec');
    formSubmission.setupSubmission();

    Utilities.setupDeadline(new Date('2024-08-06T23:59:59'));
    Utilities.setupTimeAndLocation();
    Utilities.getInfoFromNIM();
});
