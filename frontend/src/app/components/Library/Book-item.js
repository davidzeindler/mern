import { useDispatch } from 'react-redux'
const BookItem = ({ book }) => {
    const dispatch = useDispatch()

    return (
        <div className='task'>
            <div>{new Date(book.createdAt).toLocaleString('en-US')}</div>
            <h2>{book.title}</h2>
        </div>
    )
}

export default BookItem