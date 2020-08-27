let num = 0;
const $princessMononokePhoto = $('<img src="https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png"/>')
$(window).on("load",()=> {
$.ajax({
    url: `https://ghibliapi.herokuapp.com/films/?title=Princess+Mononoke`
}).then (
    (data) => {
        $('#photo').append($princessMononokePhoto)
        $('#title').html(`Title: ${data[0].title}`)
        $('#description').html(`${data[0].description}`)
        $('#director').html(`Director: ${data[0].director}`)
        $('#producer').html(`Producer: ${data[0].producer}`)
        $('#rt_score').html(`Rating: ${data[0].rt_score}`)
    }
)
console.log ("window loaded")
})

$('form').on('submit', (event) => {
    event.preventDefault();
    // $('#container').empty()    
    let $text = $('input[type="text"]').val()
    // console.log ($text)
    if ($text === "castle in the sky") {
        console.log ("it worked")
    }
    $.ajax({
        url: `https://ghibliapi.herokuapp.com/films/?title=${$text}`
    }).then (
        (data) => {
    //         // $('#photo').html($princessMononokePhoto)
            
            $('#title').html(`Title: ${data[0].title}`)
            $('#description').html(`${data[0].description}`)
            $('#director').html(`Director: ${data[0].director}`)
            $('#producer').html(`Producer: ${data[0].producer}`)
            $('#rt_score').html(`Rating: ${data[0].rt_score}`)
            //I want to make a carousel of the pictures of characters that are clickable and takes you to the people ajax.
            // $('#characters').html(data[0].people)

            console.log (data[0].title)
    //         })
            
    //     },
    //     () => {
    //         console.log ('bad request')
        })

//     $.ajax({
//         url: 
    })