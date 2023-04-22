




$(document).ready(function() 
{
    $(".carousel").carousel(
    {
        interval: 6000
    });

    $(".gear-check").click(function()
        {
            $(".color-option").fadetoggle();
        });
});


