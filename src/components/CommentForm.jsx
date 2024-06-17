import { useState } from 'react';
import { createComment, getComments } from '../services/api';

function CommentForm({ videoId, userId, setComments }) {
    const [comment, setComment] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const newComment = {
            video_id: videoId,
            content: comment,
            user_id: userId,
        }
        try {
            await createComment(newComment);
            const response = await getComments(videoId);
            setComments(response.comments);
            setComment('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mt-4 mb-4">Comments</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <textarea
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full border rounded-lg p-2"
                        rows={2}
                    ></textarea>
                </div>
                <div className="flex justify-end mb-4">
                    <button
                        type="submit"
                        className="bg-[#47B99B] text-white font-medium rounded-lg py-2 px-4"
                    >
                        Post comment 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;