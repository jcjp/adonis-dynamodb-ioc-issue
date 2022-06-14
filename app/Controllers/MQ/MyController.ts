import Logger from '@ioc:Adonis/Core/Logger'
import DynamoDb from 'App/DynamoDb/DynamoDb'

export default class MyController {
  public async create(message) {
    try {
      const record = await DynamoDb.new(message)
      await record.save()
    } catch (error) {
      Logger.error(error.message)
    }
  }
}
