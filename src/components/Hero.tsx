import Image from "next/image";
import { sigmar } from "../lib/fonts"
import classNames from "classnames";
interface HeroProps {
    title: string;
    subTitle?: string;
    isLandingPage?: boolean;
}


export default function Hero({ title, subTitle, isLandingPage }: HeroProps) {
    const sectionClasses = classNames({
        "hero w-full flex flex-col bg-hero-pattern": true,
        "pt-12 pb-12": isLandingPage,
        "pt-6 pb-14": !isLandingPage
    })
    return (
        <section className={sectionClasses}>
            <Image
                className="m-auto"
                src={"/assets/logo.png"}
                priority
                width={425}
                height={475}
                alt={"logo"}
            />
            {
                isLandingPage && (
                    <div className="overlay relative z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
                        <h1 className={`${sigmar.className} text-light text-5xl text-center md:text-7xl drop-shadow-hero-shadow`}>{title}</h1>
                        {subTitle && <h2 className={`${sigmar.className} text-light text-2xl md:text-4xl text-center mt-4 drop-shadow-hero-shadow`}>{subTitle}</h2>}
                    </div>
                )
            }
        </section>
    )
}

