import classNames from "classnames"

type Props = {
    isLandingPage?: boolean;
}

export default function Footer({ isLandingPage }: Props) {
    const classes = classNames({
        "h-20 bg-black w-full text-white": true,
        "fixed bottom-0": !isLandingPage
    })
    return (
        <footer className={classes}>
            Footer with social links and contact info
        </footer>
    )
}