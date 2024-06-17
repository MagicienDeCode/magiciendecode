export class Title {
  page!: string
  title!: string
  creationDate!: string

  constructor(_p: string, _t: string, _cd: string) {
    this.page = _p
    this.title = _t
    this.creationDate = _cd
  }
}
