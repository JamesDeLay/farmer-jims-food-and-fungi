import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"
import Image from "next/image";
import { config } from '../lib/site.config';
import { SiteSocial } from '../lib/types';
import Link from "next/link";

type SiteSocialProps = {
    social: SiteSocial
}

const SiteSocial = ({ social }: SiteSocialProps) => {
    return (
        <div className="h-4 w-4 md:h-6 md:w-6 text-dark">
            <Link key={social.name} href={social.url}>
                <FontAwesomeIcon icon={social.icon} />
            </Link>
        </div>
    )
}

export default function Footer() {
    const classes = classNames({
        " w-full bg-gray-300 flex justify-center bottom-0 fixed": true,
    })
    return (
        <footer className={classes}>
            <div className="flex justify-center flex-col">
                <div className="flex">
                    <p className="text-xs text-dark text-center font-bold">Farmer Jims</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-xs text-dark text-center font-bold">2023</p>
                </div>
                <div className="flex justify-center text-dark">
                    {
                        config.socials.map((social: SiteSocial) => (
                            <SiteSocial key={social.name} social={social} />
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}