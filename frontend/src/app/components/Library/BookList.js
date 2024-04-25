import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks, reset } from '../../features/books/book-slice'
import BookItem from '../Library/Book-item'
import Spinner from '../Spinner'
import { useNavigate } from 'react-router-dom'

const BookList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { books, isLoading, isError, message } = useSelector(state => state.books)

    useEffect(() => {
        if (isError) console.log(message)
        dispatch(getBooks())
        return () => dispatch(reset())
    }, [navigate, isError, message, dispatch])

    return (
        isLoading ? <Spinner /> : (
            <section className='content'>
                {books.length > 0 && (
                    <div className='tasks' >
                        {books.map(book => <BookItem key={book._id} task={book} />)}
                    </div>
                )}
            </section>
        )
    )
}

export default BookList