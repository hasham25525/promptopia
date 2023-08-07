
import { connectDB } from "@utils/database";
import Prompt from "@models/prompt";

//GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectDB();
        const prompts = await Prompt.findById(params.id).populate('creator');
        if (!prompt) return new Response("Prompt not found", { status: 404 })
        return new Response(JSON.stringify(prompts), { status: 200 })

    } catch (error) {
        return (
            new Response("failed to fatch all posts", { status: 500 }))
    }
}