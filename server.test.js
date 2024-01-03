const http = require('http');
const server = require('./server'); // Pfad zu Ihrer Serverdatei

describe('Server', () => {
  it('responds with "Hello World\\n"', done => {
    http.get('http://127.0.0.1:3000', res => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        expect(data).toBe('Hello World\n');
        server.close();
        done();
      });
    });
  });
});