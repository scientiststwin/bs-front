import { useEffect, useState } from 'react'
import Button from '../../components/atoms/button/button'
import Footer from '../../components/organisms/footer'
import Header from '../../components/organisms/header'
import ManageBook from '../../components/organisms/manageBook'
import bookService from '../../service/book.service'
import { useNavigate, useParams } from 'react-router'

function Edit() {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [bookInfo, setBookInfo] = useState({ title: '', author: '' })

    useEffect(() => {
        bookService.getOne(bookId as string).then((book) => {
            setBookInfo(book)
        })
    }, [bookId])

    const handleTitleChange = (event: any) => {
        setBookInfo(preBookInfo => ({ ...preBookInfo, title: event.target.value }))
    }

    const handleAuthorChange = (event: any) => {
        setBookInfo(preBookInfo => ({ ...preBookInfo, author: event.target.value }))
    }

    const onEdit = () => {
        bookService.update(bookId as string, bookInfo).then(() => {
            alert("Book edited")
            navigate("/");
        })
    }

    const onDelete = () => {
        bookService.delete(bookId as string).then(() => {
            alert("Book deleted")
            navigate("/");
        })
    }

    return (
        <div>
            <Header />
            <ManageBook
                titleValue={bookInfo.title}
                onTitleChange={handleTitleChange}
                authorValue={bookInfo.author}
                onAuthorChange={handleAuthorChange}
            >
                <Button text="Delete" color="yellow" onClick={onDelete} />
                <Button text="Save" color="yellow" onClick={onEdit} />
            </ManageBook>
            <Footer />
        </div>
    )
}

export default Edit;
