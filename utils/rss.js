import { XMLParser } from 'fast-xml-parser';
import { YT_FEEDS_URL, CHANNEL_ID } from '../constant.js';

export async function fetchRSS() {
  const data = await fetch(YT_FEEDS_URL + CHANNEL_ID).then((response) =>
    response.text(),
  );
  const parser = new XMLParser({
    ignoreAttributes: false,
  });
  const json = parser.parse(data);

  return json;
}
