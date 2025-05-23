export function webhookNotify(message, link) {
  if (process.env.DISABLE_WEBHOOK) {
    return;
  }

  const body = {
    msgtype: 'text',
    text: {
      content: `🔔 新消息\n\n${message}\n${link}`
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
