import { action, observable, decorate } from 'mobx'

export class ClickState {
  @observable isClicked = false
  
  @action
  setIsClicked(isClicked) {
    this.isClicked = isClicked
    return this
  }

  @action.bound
  handleClick() {
    this.setIsClicked(!this.isClicked)
  }
}