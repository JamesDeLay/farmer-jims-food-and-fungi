import { roboto } from "@/lib/fonts"
import Image from "next/image"

type Props = {
    title: string
    subTitle: string
    imgURL: string
}
export default function Card({ title, subTitle, imgURL }: Props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
            <div className="w-full overflow-hidden" style={{ maxHeight: `300px` }}>
                <Image src={imgURL} alt={title} height={300} width={400} />
            </div>
            <div className="px-4 py-4 bg-white">
                <h4 className={`${roboto.className} font-bold text-2xl`}>{title}</h4>
                <h5 className={`${roboto.className} italic text-xl`}>{subTitle}</h5>
            </div>
        </div>
    )
}