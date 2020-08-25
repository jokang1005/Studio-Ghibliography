// console.log ('hi world')
// const $princessMononokeButton = $('#Princess+Mononoke')
// $($princessMononokeButton).on('click', (event) => {
//     event.preventDefault()
//     // const $input = $('input[type="text"]')
//     // const $parseInt = $($input).val().replace(/" "/g, "+")
//     // console.log ($parseInt)
//     console.log ("button was clicked")


//     // $.ajax({
//     //     url: `https://ghibliapi.herokuapp.com/films/?title=Princess+Mononoke`
//     // }).then (
//     //     (data) => {
//     //         console.log (data);
//     //         $movieCharacters = $('<div>').html(data[0].people)
//     //         $('body').append($movieCharacters)
            
//     //     },
//     //     () => {
//     //         console.log ('bad request')
//     //     }
//     //     )
    

// });

const $button = $('<button id="Princess+Mononoke">').text("Princess Mononoke")
$('body').append($button)
$($button).on('click', (event) => {
    console.log ($($button).text())

});

$.ajax({
    url: `https://ghibliapi.herokuapp.com/films/?title=${$($button).text()}`
}).then (
    (data) => {
        console.log (data);
    }
)