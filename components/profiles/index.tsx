"use client";
import { fetchProfiles } from "@/app/utils/fetchProfiles";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";


export function PortfolioComponent() {
    const { data, isPending, isError } = useQuery({
        queryKey: ["profiles"],
        queryFn: fetchProfiles
    });

    if (isPending) {
        return <p className="text-gray-600 text-center mt-4">Loading...</p>;
    }

    if (isError) {
        return <p className="text-red-600 text-center mt-4">Some error occurred</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {data?.portfolios?.map((user) => (
                <Link href={`/portfolios/${user.id}`} >
                     <div
                   
                    className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-lg duration-300 cursor-pointer"
                >
                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                    <h2 className="text-lg text-gray-600">{user.title}</h2>
                    <p className="text-sm text-gray-500">{user.location}</p>
                </div>
                </Link>
               
            ))}
        </div>
    );
}
