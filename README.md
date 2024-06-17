## Overview 
My Learnwell web app allows users to add, select, view, and comment on educational videos. 

![Add video modal screenshot](public/modal.png)

I decided to support adding videos from Youtube because it's easy to upload videos to, has good APIs, and Khan Academy does the same thing.

The home page displays video previews of all the videos that have been added to Learnwell by the current user. 

![Home page screenshot](public/home-page.png)

The video page displays the video player and comments section for a given video. It also displays a list of link previews for the rest of the videos. I simulated comments from other users by manually changing the user_id. 

![Video page screenshot](public/video-page.png)

![Video player screenshot](public/video-player.png)

![Video comments screenshot](public/comments.png)

## Try it out 
1) git clone
2) npm install
3) npm run dev or npm build and npm run preview 

- the user_name is set to corso_rosati4 (I used corso_rosati for testing purposes before realizing I couldn't delete data)
- I used a proxy to avoid CORS issues (see /vite.config.js)