const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const inputIdNumber = document.getElementById('searchByID').value
        console.log(inputIdNumber)
        fetch(`http://localhost:3000/movies/${inputIdNumber}`)
        .then(response => response.json())
        .then(movie => {
            const title = document.querySelector('h4')
            const summary = document.querySelector('p')
            console.log(movie)
            title.textContent = movie.title
            summary.textContent = movie.summary



        })


    })
}
  


document.addEventListener('DOMContentLoaded', init);

