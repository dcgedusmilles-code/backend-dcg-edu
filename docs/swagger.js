const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API DCG EDU',
            version: '1.0.0',
            description: 'Documentação da API DCG EDU',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./routes/**/*.js'], // Caminho para os arquivos com anotações Swagger
}


const swaggerDocs = swaggerJsDoc(options);

module.exports = swaggerDocs;


// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'API Agendamento de Atendimento',
//             version: '1.0.0',
//             description: 'Documentação da API com Swagger',
//         },
//     },
//     apis: ['./src/routes/*.js'],
// };

// const specs = swaggerJsDoc(options);

// module.exports = (app) => {
//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// };
