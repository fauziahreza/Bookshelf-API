const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000, // Ubah port menjadi 9000 sesuai dengan kriteria
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();