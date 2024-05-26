import { AppController } from "./app.controller";
import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";

const MIDDLEWARE_VALUE = "middleware";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => res.send(MIDDLEWARE_VALUE))
      .exclude("test", "overview/:id", "wildcard/(.*)", {
        path: "middleware",
        method: RequestMethod.POST,
      })
      .exclude("multiple/exclude")
      .forRoutes("*");
  }
}
