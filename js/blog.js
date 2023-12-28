$(document).ready(function () {
    $.ajax({
        url: '/html/data.html',
        success: postBlogs(),
        error: function (jqXhr, textStatus, errorThrown) {
            alert('FOUT: ' + textStatus + errorThrown);
        }
    })
});

function getBlogs() {
    let blogs = [];
    let x = Math.floor((Math.random() * 5) + 1);
    let numbers = [];

    while (blogs.length < 3) {

        if (numbers.includes(x) === false) {
            numbers.push(x);
            blogs.push('#blog' + x);
        }

        else {
            x = Math.floor((Math.random() * 5) + 1);
        }
    }
    console.log(blogs)
    return blogs
}

function postBlogs(data) {
    blogs = getBlogs()
    const blogArchive = {};

    for (let i = 0; i < blogs.length; i++) {
        let j = i + 1;
        blogDiv = '#postblog' + j;

        blogArchive[blogDiv] = blogs[i];

        let postblog = '/html/data.html ' + blogs[i].toString();

        $(blogDiv).load(postblog, function () {
            $('.truncate').each(function () {
                $(this).html($(this).html().substring(0, 500) + '...');
            })
        });
    }
    $('.readbtn').each(function(){
        $(this).html("<strong class='read'>Lees verder</strong>")

    })
    console.log(blogArchive)

    $('.truncate').on('click', function () {
        let getDivID = '#' + $(this).attr('id');
        getSelectedBlog(getDivID, blogArchive[getDivID]);
        deleteBlogs(getDivID)

    })
}

function getSelectedBlog(selectedBlog, blog) {

    $.ajax({
        url: '/html/data.html',
        success: function (data) {
            $(selectedBlog).load('/html/data.html ' + blog);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert('FOUT: ' + textStatus + errorThrown);
        }
    });
}


function deleteBlogs(deletion){
    $('.readbtn').hide()
    if (deletion !== 'postblog1'){
        $('#postblog1').empty();
    }
    if (deletion !== 'postblog2'){
        $('#postblog2').empty();
    }
    if (deletion !== 'postblog3'){
        $('#postblog3').empty();
    }
}

$('#blogFormBtn').on('click', function(){
    console.log('clicked')
    $('#blog').hide('fade', () => {
        $('#form').show(500)
    })
})

jQuery.validator.setDefaults({
    debug: true,
    success: 'valid'
})

$('#blogform').validate({
    rules:{
        titel: {
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        auteur: {
            required: true,
            minlength: 3,
            maxlength: 100,
        },
        postdatum: {
            required: true,
            date: true
        },
        blog: {
            required: true,
            minlength: 100
        }
    }
})