import { sigmar } from "../lib/fonts"
import { ReactNode } from 'react';
import cn from "classnames"

type WithHeadingProps = {
    title?: string;
    transparent?: boolean;
    children: ReactNode;
    containerClasses?: string;
}

export default function ContentWrapper({ title, children, transparent, containerClasses }: WithHeadingProps) {
    const wrapperClass = cn({
        "p-4 max-w-7xl m-auto": true,
        containerClasses: true,
        "bg-white": !transparent,
    })
    return (
        <section className={wrapperClass}>
            {
                title && (
                    <div className="my-4">
                        <h3 className={`${sigmar.className} text-3xl md:text-4xl`}>{title}</h3>
                    </div>
                )
            }
            <div className="section-children">
                {children}
            </div>
        </section>
    )
}
