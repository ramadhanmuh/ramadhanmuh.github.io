// Init object
let contact = {};

// Init functions
contact.functions = {};

contact.functions.getInputForm = (form) => {
    return {
        name: form.find('input[name="name"]').eq(0).val(),
        email: form.find('input[name="email"]').eq(0).val(),
        phone: form.find('input[name="phone"]').eq(0).val(),
        message: form.find('textarea[name="message"]').eq(0).val(),
    };
}

contact.functions.formLoading = (status) => {
    if (!status) {
        contact.formButton.text('Send');
        contact.formButton.removeAttr('disabled');
        return;
    }

    contact.formButton.text('Sending message...');
    contact.formButton.attr('disabled', true);

}

contact.functions.ajaxSuccess = (status) => {
    if (status) {
        contact.formElement.find('small.text-success').removeClass('d-none');
        return;
    }

    contact.formElement.find('small.text-danger').removeClass('d-none');
}

contact.functions.ajaxHandler = (form) => {
    
    contact.functions.formLoading(true);
    contact.formElement.find('small').addClass('d-none');

    $.ajax({
        url: contact.formUrl,
        data: contact.functions.getInputForm(form),
        method: 'POST',
        complete: function( jqXHR, textStatus ) {
            contact.functions.formLoading(false);
        },
        success: function (data, textStatus, jqXHR) {
            contact.functions.ajaxSuccess(true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            contact.functions.ajaxSuccess(false);
        }
    });
};

contact.functions.initEvents = () => {
    $("#contactForm input,#contactForm textarea,#contactForm button")
        .jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function ($form, event) {
                event.preventDefault(); // prevent default submit behaviour
                contact.functions.ajaxHandler($form);
            },
            filter: function () {
                return $(this).is(":visible");
            },
    });
};

contact.functions.initVars = () => {
    contact.formElement = $('#contactForm');
    contact.formUrl = 'https://script.google.com/macros/s/AKfycbxqywgzZuG4a2w5ZfNGRKr6ERyDAPmCbGW9m00eKMOhko4pW0oEjDJ6w1qSqGMBV1E/exec';
    contact.formButton = contact.formElement.find('button[type="submit"]').eq(0);
}

contact.functions.start = () => {
    contact.functions.initVars();
    contact.functions.initEvents();
}