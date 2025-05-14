"use server"

export async function createProfiles(_prevState , formdata:FormData)
{
    const name = formdata.get('name');
    const title = formdata.get("title");
    const location = formdata.get("location");
    const skills = formdata.get('name');
    const experience = formdata.get('experience');
    const email = formdata.get("email");
    const bio = formdata.get('bio');

    let errors = [];
    if(!name )
    {
        errors.push("name is required");
    }
    if( !title)
    {
        errors.push("Title is required!");
    }
    if( !location )
    {
        errors.push("Location is a mandatory field");
    }
    if(!skills )
    {
        errors.push("skill is required")
    }
    if(!experience )
    {
        errors.push("experience is required");
    }
    if(!email )
    {
        errors.push("email is required");
    }
    if( !bio)
    {
        errors.push("Fill up the bio");
    }

    if(errors.length > 0)
    {
        return {
            errors
        }
    }

    const res = await fetch()


}