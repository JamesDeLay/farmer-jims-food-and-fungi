import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames"
import Image from "next/image";
import { config } from '../lib/site.config';
import { SiteSocial } from '../lib/types';
import Link from "next/link";

type Props = {
    isLandingPage?: boolean;
}

type SiteSocialProps = {
    social: SiteSocial
}

const SiteSocial = ({ social }: SiteSocialProps) => {
    return (
        <div className="h-4 w-4 md:h-6 md:w-6 text-primary">
            <Link key={social.name} href={social.url}>
                <FontAwesomeIcon icon={social.icon} />
            </Link>
        </div>
    )
}

export default function Footer({ isLandingPage }: Props) {
    const classes = classNames({
        "h-24 md:h-36 w-full bg-secondary flex justify-center": true,
        "fixed bottom-0": !isLandingPage
    })
    return (
        <footer className={classes}>
            <div className="flex justify-center flex-col">
                <div className="flex">
                    <p className="text-md md:text-lg text-primary text-center font-bold">Farmer Jims</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-sm md:text-md text-primary text-center font-bold">2023</p>
                    <div className="ml-1 h-2 w-2">
                        <FontAwesomeIcon icon={faCopyright} className="text-primary" />
                    </div>
                </div>
                <div className="flex justify-center mt-2 mb-2">
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