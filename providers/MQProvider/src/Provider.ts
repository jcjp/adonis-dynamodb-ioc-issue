import Controller from 'App/Controllers/MQ/MapController'

export default class Provider {
  private customMap: any

  public topics: string[] = []
  public events: object = {}

  constructor(private config) {
    this.customMap = new Controller().index
    console.log(JSON.stringify(this.config, null, 2))
    console.log(JSON.stringify(this.customMap, null, 2))
  }
}
