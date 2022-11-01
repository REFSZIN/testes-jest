import supertest from 'supertest';
import app from '../src/app';
import { prisma } from '../src/database';

// Describe = É usado para uma descrição da suite de teste que está sendo executada
// it ou test = É usado para descrever cada etapa dos teste da suite

// Será executado a cada it que estiver dentro do describe.
beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE memes CASCADE`;
});

describe('Testa rota POST /memes', () => {
  const novoMeme = {
    url: 'http://www.memesbrasil.com.br',
    title: 'Um novo meme da geração',
    description: 'Esse é um meme muito legal pq.....',
    author: 'Xablau'
  };

  it('Cria um usuário e retorna status code 201', async () => {
    const result = await supertest(app).post('/memes').send(novoMeme);

    expect(result.status).toBe(201);
  });

  it('Criando um meme que já existe deve retornar status 409', async () => {
    await supertest(app).post('/memes').send(novoMeme);
    const result = await supertest(app).post('/memes').send(novoMeme);

    expect(result.status).toBe(409);
  });
});

describe('Testa rota GET /memes', () => {
  it('Deve retornar um status 200 e um array de memes', async () => {
    const result = await supertest(app).get('/memes').send();

    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
  });
});

describe('Testa rota PUT /memes', () => {});

afterAll(async () => {
  await prisma.$disconnect();
});
