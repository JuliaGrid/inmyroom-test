import { useState } from 'react';
import { ReactComponent as HeartIcon} from '../../../images/heart.svg';

export function Favorites() {
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ?? 0);

    const handleFavorites = () => {
        const newFavorites = +favorites + 1;
        setFavorites(newFavorites);
        localStorage.setItem('favorites', String(newFavorites))
    }

    return (
        <div className='button_wrapper'>
            <button className='button' onClick={handleFavorites}>
                <HeartIcon />
                <p className='button_text'>
                    {favorites}
                </p>
            </button>
        </div>
    )
}