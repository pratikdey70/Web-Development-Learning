let body = $('body');
// console.log(body);

// let b = document.querySelector('body')
// let b1 = $(b);
// console.log(b1);

let h1 = $('<h1>');
body
    .append(
        h1.text('Hello World').css('font-size', '84px')

    )
    .append(
        $('<button>').text('Click Me').addClass('button').click(ev=>{
        // console.log(ev.target);
        $(ev.target).css('backgroundColor', 'orange')
    })
    //     .css({
    //     "backgroundColor":"purple",
    //     "border":"0px",
    //     "padding":"15px",
    //     "color":"white",
    //     "cursor":"pointer" 
    // })
    )
    .append(
        $('<ul>')
            .html(
                '<li>Avengers</li> <li>Thor</li> <li>IronMan</li>'
            ).addClass('movies')
    )
