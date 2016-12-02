function ContactForm() {
    [].slice.call(document.querySelectorAll('.input')).forEach(function(inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            jQuery(this).parent('fieldset').addClass('input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        jQuery(this).parent('fieldset').addClass('input--filled');
    };

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            jQuery(this).parent('fieldset').removeClass('input--filled');
        };
    };
};