import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        await connect();
        const {id} = params;

        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch(err) {
        return new NextResponse("Blog Post not found!", { status: 404 })
    }
}

export const DELETE = async (request, {params}) => {
    const {id} = params;

    try {
        await connect();
        await Post.findByIdAndDelete(id);

        return new NextResponse("Post has been deleted", { status: 200 })
    } catch(err) {
        return new NextResponse("Something went wrong!", { status: 500 })
    }
}