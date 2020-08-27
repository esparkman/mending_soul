import { Controller } from 'stimulus'

export default class extends Controller {
    static targets = ['menu']
    connect() {
        this.toggleClass = this.data.get('class') || 'hidden'
    }
    toggle() {
      console.log("I've been clicked!")
      this.menuTarget.classList.toggle(this.toggleClass)
    }
    hide(event) {
        if (
            this.element.contains(event.target) === false &&
            !this.menuTarget.classList.contains(this.toggleClass)
         ) {
            this.menuTarget.classList.add(this.toggleClass)
        }
    }
}
