import { videoNotExists, storeVideo } from './utils/db.js';
import { fetchRSS } from './utils/rss.js';
import { desktopNotify } from './utils/desktopNotify.js';
import { webhookNotify } from './utils/webhookNotify.js';
import { VIDEO_KEYWORD } from './constant.js';
import 'dotenv/config';

const data = await fetchRSS();
const targetVideo = getTargetVideo(data);
if (!targetVideo) {
  // No target video found
  process.exit();
}

if (videoNotExists(targetVideo.id)) {
  // Store video to db
  storeVideo(targetVideo.id, targetVideo.title);
  // Notify
  desktopNotify(targetVideo.title, targetVideo.link['@_href']);
  webhookNotify(targetVideo.title, targetVideo.link['@_href']);
}

function getTargetVideo(data) {
  return data.feed.entry.find((video) => video.title.includes(VIDEO_KEYWORD));
}
