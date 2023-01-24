import { sigmar } from "../lib/fonts"
import { ReactNode } from 'react';

type WithHeadingProps = {
    title: String,
    children: ReactNode
}

export default function ContentWrapper({ title, children }: WithHeadingProps) {
    return (
        <section className='pt-4 pl-4 pr-4 max-w-7xl m-auto'>
            <div className="my-4">
                <h3 className={`${sigmar.className} text-3xl md:text-4xl`}>{title}</h3>
            </div>
            <div className="section-children">
                {children}
            </div>
        </section>
    )
}
