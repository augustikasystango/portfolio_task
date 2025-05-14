import Link from "next/link"
export default function MainHeaderComponent()
{
    return (
        <>
        <nav>
            <div>Logo</div>
            <Link href="/addProfiles">Add users</Link>
            <button>
                Logout
            </button>
        </nav>
        
        </>
    )
}