
export async function fetchProfiles() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/portfolio`);
        if (!res.ok) {
            throw new Error("Invalid url in dev");
        }
        const profiles = await res.json();
        console.log(profiles, "--profiles , 11");
        return profiles;

    }
    catch (error) {
        console.error("Error in loading profiles");
        return null;
    }
}
export async function fetchProfilesByID(id: any) {

    try {
        //here i want to use http://localhost:3000/api/userprofile bu it is giving 404
        const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/portfolio/${id}`);
        if (!res.ok) {
            throw new Error("Invalid url in dev");
        }
        const profile = await res.json();
        console.log(profile, "--profiles , 11");
        return profile;

    }
    catch (error) {
        console.error(`Error in loading profile with ${id}`);
        return null;
    }
}