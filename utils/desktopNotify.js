import { WindowsToaster } from 'node-notifier';
import open from 'open';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notifier = new WindowsToaster({
  withFallback: false,
  appID: 'PTCGP Info'
});

export function desktopNotify(message, link) {
  notifier.notify({
    title: '發現新訊息!',
    message,
    icon: path.join(__dirname, 'images', 'pokeball.png'),
    sound: false,
    wait: true
  });

  notifier.on('click', function () {
    open(link);
  });
}
