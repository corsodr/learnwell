import axios from "axios";

const API_URL = "/api";

export async function createVideo(video) {
    try {
        const response = await axios.post(`${API_URL}/videos`, video);
        return response.data;
    } catch (error) {
        console.error("Error creating video", error);
        throw new Error ("Error creating video")
    }
}

export async function getVideos(userId) {
    try {
        const response = await axios.get(`${API_URL}/videos?user_id=${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching videos", error);
        throw new Error ("Error fetching videos")
    }
}

export async function getVideo(videoId) {
    try {
        const response = await axios.get(`${API_URL}/videos/single?video_id=${videoId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching video", error);
        throw new Error ("Error fetching video")
    }
}

export async function getComments(videoId) {
    try {
        const response = await axios.get(`${API_URL}/videos/comments?video_id=${videoId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching comments", error);
        throw new Error ("Error fetching comments")
    }
}

export async function createComment(comment) {
    try {
        const response = await axios.post(`${API_URL}/videos/comments`, comment);
        return response.data;
    } catch (error) {
        console.error("Error creating comment", error);
        throw new Error ("Error creating comment")
    }
}