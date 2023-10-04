

const BookList = () => {
    return (
        <section>
            <Book />
        </section>
    )
}

const Book = () => {
    return <article>
        <Image />
        <Title />
        <Author />
    </article>
}

const Image = () => <img src="https://img.chirpbooks.com/image/upload/f_auto,q_auto:low,w_420,h_420/v1692312368/cover_images/harper_collins/9780062229984.jpg" alt="hi" />
const Title = () => <h2>Hallowe'en Party</h2>
const Author = () => <h4>Agatha Christie</h4>

export default BookList;