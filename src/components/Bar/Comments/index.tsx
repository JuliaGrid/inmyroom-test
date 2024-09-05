import { useState } from 'react';
import { ReactComponent as CommentsIcon} from '../../../images/comments.svg';

export function Comments() {
    const [comments, setComments] = useState(localStorage.getItem('comments') ?? 0);

    const handleComments = () => {
        const newComments = +comments + 1;
        setComments(newComments);
        localStorage.setItem('comments', String(newComments))
    }

    return (
        <div className='button_wrapper'>
            <button className='button' onClick={handleComments}>
                <CommentsIcon />
                <p className='button_text'>
                    {comments}
                </p>
            </button>
        </div>
    )
}