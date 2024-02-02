
import Footer from '../../components/organisms/footer'
import Header from '../../components/organisms/header'
import BookItem from '../../components/molecules/bookItem/bookItem'
import Input from '../../components/atoms/input/input'
import { useEffect, useState } from 'react'
import bookService from '../../service/book.service'
import { useNavigate } from 'react-router'


const Home = () => {
    const [books, setBooks] = useState<{id: number, title: string, author: string}[]>([])
    const navigate = useNavigate();
    const getBooks = (search?: string) => {
        bookService.getAll({query: search}).then((books) => {
            setBooks(books.results)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    const onEditClick = (id: number) => {
        navigate(`/edit/${id}`)
    }

    console.log("books ", books)

  return (
    <div>
        <Header />
        <div className='mx-24' >
            <div className='flex-col  py-10' >   
                <div className='w-full flex justify-center mb-10' >
                    <Input type='text' value='' placeholder='Type the name of book or author...' onChange={() => {}} />
                </div>
                <div className='font-unica text-2xl' >
                    <label>Results "</label>
                    <label>"</label>
                </div>
            </div>
            <div className=' border-t-2 border-dashed border-gray-500' >
                <div className='flex space-x-8 mt-14 flex-wrap' >
                    {
                        books.map((book) => {
                            return <BookItem key={book.id} title={book.title} onEditClick={onEditClick.bind(this, book.id)} />
                        })
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home