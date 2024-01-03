const http = require('http');
const server = require('./server'); // Pfad zu Ihrer Serverdatei

describe('Server', () => {
  beforeAll(done => {
    server.listen(3000, '127.0.0.1', done);
  });

  afterAll(done => {
    server.close(done);
  });

  it('responds with "Hello World\\n"', done => {
    http.get('http://127.0.0.1:3001', res => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        expect(data).toBe('Hello World\n');
        done();
      });
    });
  });
});