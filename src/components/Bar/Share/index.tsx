import { useState } from 'react';
import { ReactComponent as ShareIcon} from '../../../images/share.svg';

export function Share() {
    const [isDisabled, setIsDisabled] = useState(false)
    const currentUrl = window.location.href;

    const shareData = {
        title: "INMYROOM",
        url: currentUrl,
    };

    async function handleShare() {
        if (window.navigator.canShare(shareData)) {
            setIsDisabled(true)
            try {
                await window.navigator.share(shareData)
            } catch (err) {
                console.log(err)
            }
            setIsDisabled(false)
        } else {
            try {
                navigator.clipboard.writeText(currentUrl)
            } catch (err) {
                 console.log(err)
            }
        }
    }

    return (
        <div className='button_wrapper'>
            <button className='button' onClick={handleShare} disabled={isDisabled}>
                <ShareIcon/>
            </button>
        </div>
    )
}