export function webhookNotify(message, link) {
  const body = {
    msgtype: 'text',
    text: {
      content: `📢新訊息\n\n${message}\n${link}`
    }
  };

  fetch(process.env.WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}
