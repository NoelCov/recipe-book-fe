import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export const Navbar = () => {
    return (
        <nav className="flex flex-col items-center p-4 text-sm justify-center">
            <Link className="underline" href="/">Home</Link>
            <Separator className="my-4" />
        </nav>
    )
}
