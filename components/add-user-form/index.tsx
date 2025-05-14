"use client";
import { useActionState } from "react";

export function AddUsersForm() {
     const [state, formAction, isPending] = useActionState(createProfiles, null);

    return (
        <form  className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
                <input
                    type="text"
                    id="skills"
                    name="skills"
                    placeholder="e.g. React, Node.js, PostgreSQL"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (years)</label>
                <input
                    type="number"
                    id="experience"
                    name="experience"
                    min="0"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
            </div>

            <div>
                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Avatar URL</label>
                <input
                    type="url"
                    id="avatar"
                    name="avatar"
                    placeholder="https://example.com/avatar.jpg"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <button
                    type="submit"
                    // disabled={isPending}
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
                >
                    {/* {isPending ? "Submitting..." : "Add User"} */}
                    Add User
                </button>
            </div>
        </form>
    );
}
