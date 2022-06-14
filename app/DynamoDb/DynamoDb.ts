import Env from '@ioc:Adonis/Core/Env'
import {DynamoDB} from '@ioc:Adonis/Addons/DynamoDB'

import Dynamo from '@ioc:Project/Dynamo'

@DynamoDB.$Table({name: Env.get('DYNAMODB_TABLE', '')})
export default class DynamoDb extends DynamoDB.Table {
  constructor() {
    super()
    console.log(Dynamo)
  }
}
