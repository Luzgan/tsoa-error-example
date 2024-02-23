import {
    Body,
    Controller,
    Post,
    Route,
  } from "tsoa";

  interface EntryModel {
    children: Array<DeepModel | Children>
  }

  interface DeepModel {
    children: Array<DeepModel | Children>
  }

  type Children = Test1 | Test2 | Test3| Test4;

  interface Test1 {
    a: string
  }

  interface Test2 {
    b: string
  }

  interface Test3 {
    c: string
  }

  interface Test4 {
    d: string
  }
  
  @Route("test")
  export class TestController extends Controller {
    @Post()
    public async createUser(
      @Body() requestBody: EntryModel
    ): Promise<void> {
      console.log(requestBody)
      return;
    }
  }