import Logger from '@ioc:Adonis/Core/Logger'
import MyController from 'App/Controllers/MQ/MyController'

export default class MapController {
  public async index(message) {
    Logger.info({CREATE: new MyController().create(message)}, message)
  }
}
