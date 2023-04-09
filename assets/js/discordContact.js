      async function sendContact(ev) {
        ev.preventDefault();

        const senderEmail = document
          .getElementById('emailInput').value;
        const senderMessage = document
          .getElementById('messageInput').value;

        const webhookBody = {
          embeds: [{
            title: 'Contact Form Submitted',
            fields: [
              { name: 'Sender', value: senderEmail },
              { name: 'Message', value: senderMessage }
            ]
          }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/1094471165906534430/5fX8AgUwYrm8ZIWpdxqKeDL52-1xhdzpsfmW0rJVawCdhhJCfA3M81RN_GcoKlo10D2J';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('I have received your message!');
        } else {
          alert('There was an error! Try again later!');
        }
      }