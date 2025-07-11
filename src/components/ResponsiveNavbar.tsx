type Props = {
    isOpen: boolean
}

export function ResponsiveNavbar({isOpen}: Props) {
    return (
        <div>
            <div>
                {isOpen && (
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}