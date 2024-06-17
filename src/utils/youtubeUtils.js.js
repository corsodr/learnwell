export function extractYoutubeVideoID(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^\&\?\/]+)/);
    return match ? match[1] : null;
};
