import Provider from './Provider'

class MQ {
  public serviceProvider: Provider
  public events: object
  constructor() {
    this.serviceProvider = new Provider({})
  }
}

export default MQ
