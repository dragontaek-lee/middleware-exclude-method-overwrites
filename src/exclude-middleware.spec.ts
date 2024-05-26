import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "./app.module";

const RETURN_VALUE = "test";

describe("middleware - multiple exclude method overwrites previous one", () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = (
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile()
    ).createNestApplication();

    await app.init();
  });

  it(`should exclude "/test" endpoint`, () => {
    return request(app.getHttpServer()).get("/test").expect(200, RETURN_VALUE);
  });

  it(`should exclude POST "/middleware" endpoint`, () => {
    return request(app.getHttpServer()).post("/middleware").expect(200, RETURN_VALUE);
  });

  it(`should exclude "/overview/:id" endpoint (by param)`, () => {
    return request(app.getHttpServer()).get("/overview/1").expect(200, RETURN_VALUE);
  });

  it(`should exclude "/wildcard/overview" endpoint (by wildcard)`, () => {
    return request(app.getHttpServer()).get("/wildcard/overview").expect(200, RETURN_VALUE);
  });

  it(`should exclude "/multiple/exclude" endpoint`, () => {
    return request(app.getHttpServer()).get("/multiple/exclude").expect(200, RETURN_VALUE);
  });

  afterEach(async () => {
    await app.close();
  });
});
