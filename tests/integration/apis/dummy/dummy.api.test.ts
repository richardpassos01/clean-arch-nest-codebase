import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';

describe('dummyAPI', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('dummy endpoint', () => {
    describe('When call dummy get endpoint', () => {
      it('then return dummy', async () => {
        const { body } = await request(app.getHttpServer()).get('/');

        expect(body).toEqual({
          id: '616c6c7e38cb718ceef557e7',
          lastName: 'passos',
          name: 'richard',
        });
      });
    });
  });
});
