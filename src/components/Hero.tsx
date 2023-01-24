import Image from "next/image";
import { sigmar } from "../lib/fonts"
interface HeroProps {
    title: String,
    subTitle?: String
}


export default function Hero({ title, subTitle }: HeroProps) {
    return (
        <section className="hero w-full flex flex-col bg-hero-pattern md:pb-10">
            <Image
                className="m-auto"
                src={"/assets/logo.png"}
                priority
                width={425}
                height={475}
                alt={"logo"}
            />
            <div className="overlay relative z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit">
                <h1 className={`${sigmar.className} text-white text-5xl text-center md:text-7xl drop-shadow-hero-shadow`}>{title}</h1>
                {subTitle && <h2 className={`${sigmar.className} text-white text-2xl md:text-4xl text-center mt-4 drop-shadow-hero-shadow`}>{subTitle}</h2>}
            </div>
        </section>
    )
}

