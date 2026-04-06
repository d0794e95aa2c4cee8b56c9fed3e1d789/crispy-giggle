import readme from './README.md' with { type: 'text' };

export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DIE!!</title>
  <style>
    body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.6; }
    pre { background: #f4f4f4; padding: 1em; overflow-x: auto; }
    code { background: #f4f4f4; padding: 2px 4px; }
  </style>
</head>
<body><pre>${readme.replace(/</g, '&lt;')}</pre></body>
</html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }
};
