function CommentSection({ comments }) {
    return (
        <div>
            {comments.length ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
                            <p className="font-semibold mb-2">{comment.user_id}</p>
                            <p>{comment.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}

export default CommentSection;