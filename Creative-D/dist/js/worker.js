$(document).ready(function () {
    $('form').formvalidation({
        ErrorColor: "red",
        PassedColor: "green",
        PassedFunction: function () {
            alert('passed');
        }
    });
    $('nav span').click(function () {
        $(this).parent().toggleClass('active');
    });
});
(function ($) {
    $.fn.formvalidation = function (options) {
        var settings = $.extend({
            ErrorColor: "red",
            PassedColor: 'inherit',
            PassedFunction: options.PassedFunction
        }, options);
        var form = $(this);
        form.attr("novalidate", "novalidate");
        form.children('input,textarea').change(function () {
            if ($(this).val() === "" && !!$(this).attr('required')) {
                $(this).css('border-color', settings.ErrorColor);
            }
            else {
                $(this).css('border-color', settings.PassedColor);
                if ($(this).attr('type') == "email") {
                    if (!validateEmail($(this).val())) {
                        $(this).css('border-color', settings.ErrorColor);
                    }
                    else {
                        $(this).css('border-color', settings.PassedColor);
                    }
                    ;
                }
                ;
            }
            ;
        });
        form.submit(function (e) {
            e.preventDefault();
            var check = [];
            form.children('input,textarea').each(function () {
                if ($(this).val() === "" && !!$(this).attr('required')) {
                    check.push('1');
                    $(this).css('border-color', settings.ErrorColor);
                }
                else {
                    $(this).css('border-color', settings.PassedColor);
                    if ($(this).attr('type') == "email") {
                        if (!validateEmail($(this).val())) {
                            check.push('1');
                            $(this).css('border-color', settings.ErrorColor);
                        }
                        else {
                            $(this).css('border-color', settings.PassedColor);
                        }
                        ;
                    }
                    ;
                }
                ;
            });
            if (check.length <= 0) {
                settings.PassedFunction();
            }
            ;
        });
        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    };
})(jQuery);
