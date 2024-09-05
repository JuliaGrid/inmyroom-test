import { ReactComponent as PageUpIcon} from '../../../images/pageUp.svg';

export function PageUp() {
    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    return (
         <div className='button_wrapper'>
            <button className='button' onClick={handleUpButton}>
                <PageUpIcon/>
            </button>
        </div>
    )
}