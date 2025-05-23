import 'dotenv/config';

async function test() {
  const body = {
    msgtype: 'text',
    text: {
      content: `新訊息 test 2`
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

test();
