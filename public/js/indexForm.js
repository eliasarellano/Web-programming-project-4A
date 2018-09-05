// Utils
function addclass(el, classname) {
	if (el.classList) {
		el.classList.add(classname);
	} else {
		el.className += ' ' + classname;
	}
}
function removeclass(el, classname) {
	if (el.classList) {
		el.classList.remove(classname);
	} else {
		el.className = el.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}

// Validate
var FormValidator = {

    the_email : document.querySelector('#login-email'),
    the_password : document.querySelector('#login-password'),

    check : function() {

        if (this.the_password.value === '' || this.the_email.value === '') {

            // Password
            if (this.the_password.value === '') {
                addclass(document.querySelector('#password-error'), 'open');
                this.the_password.focus();
            } else {
                removeclass(document.querySelector('#password-error'), 'open');
            }

            // Mail
            if (this.the_email.value === '') {
                addclass(document.querySelector('#email-error'), 'open');
                this.the_email.focus();
            } else {
                removeclass(document.querySelector('#email-error'), 'open');
            }
            return false;

        } else {

            return true;
        }
    },

    clear : function() {

        removeclass(document.querySelector('#email-error'), 'open');
        removeclass(document.querySelector('#password-error'), 'open');

        // Done... output something...
        window.alert('all good : \n - Email : ' + this.the_email.value + '\n - Pass : '+ this.the_password.value);
        this.the_email.value = '';
        this.the_password.value = '';
    },

    init : function() {
        var that = this;
        document.querySelector('#login-form').onsubmit = function(e) {
            e.preventDefault();
            if ( that.check() ) {
                that.clear();
            }
        }
    }
}

// Init
FormValidator.init();