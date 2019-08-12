// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


$(function () {
    $('.tab-pane a').on('click', function () {
        $('#modal').modal;
        var img_path = ($(this).find('img').attr('src'));
        $('#info-modal').attr('src', img_path);
    });

    $('#modal').on('click', function () {
        $('#modal').modal('hide');
    });
});

function switch_style(css_title) {
    var i, link_tag;
    for (i = 0, link_tag = document.getElementsByTagName("link");
        i < link_tag.length; i++) {
        if ((link_tag[i].rel.indexOf("stylesheet") != -1) &&
            link_tag[i].title) {
            link_tag[i].disabled = true;
            if (link_tag[i].title == css_title) {
                link_tag[i].disabled = false;
            }
        }
    }
    localStorage.setItem('theme', css_title);
};

$(document).ready(function () {
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'blue');
    }
    switch_style(localStorage.getItem('theme'));
});