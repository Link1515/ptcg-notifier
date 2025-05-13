import { XMLParser } from 'fast-xml-parser';

const YT_FEEDS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=';

export async function fetchRSS() {
  const data = await fetch(YT_FEEDS_URL + process.env.CHANNEL_ID).then(
    (response) => response.text(),
  );
  const parser = new XMLParser();
  const json = parser.parse(data);
  return json;
}
