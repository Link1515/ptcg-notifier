import 'dotenv/config';
import { videoNotExists, storeVideo } from './db.js';
import { fetchRSS } from './rss.js';

const data = await fetchRSS();
const targetVideo = getTargetVideo(data);
if (!targetVideo) {
  console.log('No target video found');
  process.exit();
}

console.log('Found target video: ', targetVideo.title);

if (videoNotExists(targetVideo.id)) {
  console.log('==> Store video to db');
  storeVideo(targetVideo.id, targetVideo.title);
} else {
  console.log('==> Video already exists');
}

function getTargetVideo(data) {
  return data.feed.entry.find((video) =>
    video.title.includes(process.env.TARGET_VIDEO_KEYWORD),
  );
}
