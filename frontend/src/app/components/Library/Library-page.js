import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../features/books/book-slice'

const LibraryDashboard = () => {
  const dispatch = useDispatch();
 

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(getBooks())

  return (
    <>
      <section className='heading'>
        <h1>Bibliothek Dashboard</h1>
        <p>Here you can lend your book</p>
        <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>View Booklist</button>
                </div>
            </form>
      </section>
    </>
  )
  }
}
export default LibraryDashboard