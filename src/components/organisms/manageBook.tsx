import LabeledInput from '../../components/molecules/labeledInput/labeledInput'
import favoriteIconSrc from '../../assets/icons/favorite.svg'
import coverBookSrc from '../../assets/images/coverBook.png'

export type ManageBookProps = {
    titleValue: string
    onTitleChange: (event: any) => void
    authorValue: string
    onAuthorChange: (event: any) => void
    children: React.ReactNode
}

const ManageBook = (props: ManageBookProps) => {
    return (
        <div>
            <div className="w-8/12 mx-auto flex flex-row-reverse">
                <div className="w-4/6 px-6">
                    <div className="flex flex-row justify-between">
                        <p className="text-4xl font-unica w-4/6 text-center">
                            {props.titleValue}
                        </p>
                        <div>
                            <img src={favoriteIconSrc} alt="favorite" />
                        </div>
                    </div>
                    <div className="mt-24 space-y-10 flex flex-col items-end">
                        <LabeledInput
                            type="text"
                            text="Title: "
                            value={props.titleValue}
                            onChange={props.onTitleChange}
                        />
                        <LabeledInput
                            type="text"
                            text="Author: "
                            value={props.authorValue}
                            onChange={props.onAuthorChange}
                        />
                    </div>
                    <div className="mt-36 flex flex-row justify-end space-x-5">
                        {props.children}
                    </div>
                </div>
                <div className="w-2/6">
                    <div className="flex justify-center items-end h-full">
                        <img src={coverBookSrc} alt="coverBook" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageBook
