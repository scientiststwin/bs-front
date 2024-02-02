import { useState } from 'react'
import Button from '../../components/atoms/button/button'
import Footer from '../../components/organisms/footer'
import Header from '../../components/organisms/header'
import ManageBook from '../../components/organisms/manageBook'
import bookService from '../../service/book.service'

function Create() {
    const [bookInfo, setBookInfo] = useState({ title: '', author: '' })

    const handleTitleChange = (event: any) => {
        setBookInfo(preBookInfo => ({ ...preBookInfo, title: event.target.value }))
    }

    const handleAuthorChange = (event: any) => {
        setBookInfo(preBookInfo => ({ ...preBookInfo, author: event.target.value }))
    }

    const onCreate = () => {
        bookService.create(bookInfo).then(() => {
            setBookInfo({ title: '', author: '' })
            alert("Book created")
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
                <Button text="Create" color="orange" onClick={onCreate} />
            </ManageBook>
            <Footer />
        </div>
    )
}

export default Create
