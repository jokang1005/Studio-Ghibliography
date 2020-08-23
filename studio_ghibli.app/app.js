console.log ('hi world')

$('form').on('submit', (event) => {
    event.preventDefault()
    const $input = $('input[type="text"]')
    console.log ($($input).val().replace(/" "/g, "+"))


    $.ajax({
        url: `https://ghibliapi.herokuapp.com/films/?title=My+Neighbor+Totoro`
    }).then (
        (data) => {
            console.log (data);
            $movieCharacters = $('<div>').html(data[0].people)
            $('body').append($movieCharacters)
            
        },
        () => {
            console.log ('bad request')
        }
        )
});

