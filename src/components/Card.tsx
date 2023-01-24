import { roboto } from "@/lib/fonts"
import Image from "next/image"
import Link from "next/link";

type Props = {
    title: string;
    subTitle?: string;
    imgURL: string;
    link: string;
}
export default function Card({ title, subTitle, imgURL, link = "" }: Props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link
                as={`/cultivar/${link}`}
                href="/cultivar/[slug]"
            >
                <div className="w-full overflow-hidden bg-black" style={{ height: `275px` }}>
                    <Image src={imgURL} alt={title} height={300} width={400} />
                </div>
                <div className="px-4 py-4 bg-primaryLight text-primaryDark">
                    <h4 className={`${roboto.className} font-bold text-2xl`}>{title}</h4>
                    <h5 className={`${roboto.className} italic text-xl`}>{subTitle}</h5>
                </div>
            </Link>
        </div>
    )
}