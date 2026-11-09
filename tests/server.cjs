const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html': 'text/html', '.htm': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };

http.createServer(async (request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        const file = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
        if (!file.startsWith(root + path.sep)) throw new Error('Invalid path');
        response.setHeader('Content-Type', (types[path.extname(file).toLowerCase()] || 'application/octet-stream') + '; charset=utf-8');
        response.end(await fs.readFile(file));
    } catch {
        response.writeHead(404).end('Not found');
    }
}).listen(4173, '127.0.0.1');
