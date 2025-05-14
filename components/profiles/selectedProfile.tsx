"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProfilesByID } from "@/app/utils/fetchProfiles";

export default function SelectedProfileComponent({id}) {
   
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["profiles", id],
        queryFn: () => fetchProfilesByID(id)
    });

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <>Error: {error?.message || "Unknown error"}</>;
    }
    const profile = data?.portfolio;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
        <div className="flex items-center space-x-4 mb-6">
            <img
                src={profile.avatar}
                alt={`${profile.name}'s avatar`}
                className="w-20 h-20 rounded-full"
            />
            <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-gray-600">{profile.title}</p>
                <p className="text-sm text-gray-500">{profile.location}</p>
            </div>
        </div>

        <p className="mb-4">{profile.bio}</p>

        <h2 className="text-lg font-semibold mb-2">Skills:</h2>
        <ul className="flex flex-wrap gap-2 mb-4">
            {profile?.portfolio?.skills.map((skill, index) => (
                <li
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                    {skill}
                </li>
            ))}
        </ul>

        <p className="text-sm text-gray-700">Experience: {profile.experience} years</p>
        <p className="text-sm text-gray-700">Email: {profile.email}</p>
    </div>
    );
}
