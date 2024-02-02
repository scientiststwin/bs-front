import React from 'react'
import coverBookSrc from '../../../assets/images/coverBook.png'
import Button from '../../../components/atoms/button/button'

interface BookItemProps {
    title: string
    onEditClick: () => void
}

const BookItem = (props: BookItemProps) => {
    return (
        <div className="flex flex-col justify-between w-[200px] h-[400px]">
            <img src={coverBookSrc} alt="coverBook" width={200} height={298} />
            <label>{props.title}</label>
            <Button text="Edit" color="yellow" onClick={props.onEditClick} />
        </div>
    )
}

export default BookItem;
