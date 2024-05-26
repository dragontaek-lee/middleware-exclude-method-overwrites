import { Controller, Get, Post } from "@nestjs/common";

const RETURN_VALUE = "test";

@Controller()
export class AppController {
  @Get("test")
  test() {
    return RETURN_VALUE;
  }

  @Get("test2")
  test2() {
    return RETURN_VALUE;
  }

  @Get("middleware")
  middleware() {
    return RETURN_VALUE;
  }

  @Post("middleware")
  noMiddleware() {
    return RETURN_VALUE;
  }

  @Get("wildcard/overview")
  testOverview() {
    return RETURN_VALUE;
  }

  @Get("overview/:id")
  overviewById() {
    return RETURN_VALUE;
  }

  @Get("multiple/exclude")
  multipleExclude() {
    return RETURN_VALUE;
  }
}
