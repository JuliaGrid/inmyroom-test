import { useEffect, useState } from 'react';
import './index.css';
import { useDebounce } from '../../hooks/useDebounce';
import { PageUp } from './PageUp';
import { Share } from './Share';
import { Comments } from './Comments';
import { Favorites } from './Favorites';

export function Bar() {
    const [lastScroll, setLastScroll] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [isHide, setIsHide] = useState(false);
    const debouncedScroll = useDebounce(scroll, 1000)

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        if (scroll - lastScroll >= 200) {
            setIsHide(true)
        } else {
            setIsHide(false)
        }
    }, [scroll, lastScroll])
  
    useEffect(() => {
        setLastScroll(debouncedScroll);
    }, [debouncedScroll])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={isHide ? 'bar hide' : 'bar'} >
            <Share />
            <PageUp />
            <Comments />
            <Favorites />
        </div>
    )
}