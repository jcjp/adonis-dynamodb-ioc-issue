import {ApplicationContract} from '@ioc:Adonis/Core/Application'
import Custom from './src'

export default class MyProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.singleton('Project/Custom', () => new Custom())
  }

  public async boot() {}
  public async ready() {}
  public async shutdown() {}
}
