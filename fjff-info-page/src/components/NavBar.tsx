interface NavItem {
    route: String,
    label: String
}

interface NavProps {
    routes: Array<NavItem>
}

export default function NavBar({ routes, }: NavProps) {
    return (
        <nav className="w-full bg-black h-20">
            <div>LOGO ICON</div>
            <div>
                <p>Test</p>
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </nav>
    )
}