import { PortfolioComponent } from "@/components/profiles";


export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
                    Welcome to the User Portfolio Page
                </h1>
                <PortfolioComponent />
            </div>
        </main>
    );
}
