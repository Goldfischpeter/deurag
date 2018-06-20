
    function bindSelector()
    {
    $(".selector li").hover(
        function () {
            $(this).addClass("sel--hover");
        },
        function () {
            $(this).removeClass("sel--hover");
        }
        );
    }

function bindRabatt()
{
    var defaultRabatt = 20;

    $("input.range-rabatt").change(function() {
        el = $(this);
        var rabatt = el.val();
        $(".rabatt").val(rabatt);
    });

    $(document).on('input change', '.rabatt', function() {
        var v = $(this).val();
        $("input.range-rabatt").val(v);
    });

    $('.rabatt').val(defaultRabatt);
    $("input.range-rabatt").val(defaultRabatt);
}

function bindCheckbox()
{
    $(".form-row-checkbox:not(.form-row-checkbox--disabled) label.label-txt").hover(
        function () {
            $(this).parent().parent().parent().addClass("form-row-checkbox--hover");
        },
        function () {
            $(this).parent().parent().parent().removeClass("form-row-checkbox--hover");
        }
    );
}

function bindAccordeon()
{
    $("h2.accordeon-trigger").click(function () {
        $(this).toggleClass("accordeon-content--open");
        $(this).parent().find(".accordeon-content").toggleClass("accordeon-content--open");
    });
}


$(document).ready(function()
{
	bindSelector();
    bindRabatt();	
    bindCheckbox();
    bindAccordeon();
});

