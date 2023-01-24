interface NavItem {
    route: String,
    label: String
}

interface NavProps {
    routes: Array<NavItem>
}

export default function NavBar({ routes, }: NavProps) {
    return (
        <nav className="w-full bg-black p-4 fixed top-0">
            <p className="text-white">Nav</p>
        </nav>
    )
}