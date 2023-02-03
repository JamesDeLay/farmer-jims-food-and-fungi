import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import Link from 'next/link'
import { useEffect, useState } from 'react';


type NavItem = {
    route: String,
    label: String
}

type NavProps = {
    routes: Array<NavItem>
}

//Mobile - 600

export default function NavBar({ routes, }: NavProps) {
    const [toggleTransparent, setToggleTransparent] = useState(true)
    const onScroll = () => {
        if (window.scrollY >= 550) {
            setToggleTransparent(false)
        } else {
            setToggleTransparent(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => onScroll());
        return window.removeEventListener('scroll', () => onScroll());
    }, [])

    const containerClasses = classNames({
        "w-full fixed top-0 z-50 flex justify-center transition-all": true,
        "bg-hero-pattern": !toggleTransparent,
        "bg-transparent": toggleTransparent
    })

    const iconClasses = classNames({
        'h-12 w-12 m-2 cursor-pointer transition-all': true,
        'hidden': toggleTransparent
    })

    return (
        <nav className={containerClasses}>
            <div className={iconClasses}>
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className='text-white text-sm' />
                </Link>
            </div>
        </nav>
    )
}