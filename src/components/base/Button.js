import { createElement, applyClassName } from "@utils/handleElement"
import { stateChangeIsNecessary } from "@utils/optimization"

export default function Button({ targetEl, initialState, onClick }) {
  const buttonEl = createElement({ elType: "button" })

  this.state = initialState

  this.setState = (nextState) => {
    if (!stateChangeIsNecessary(this.state, nextState)) {
      return
    }

    this.state = nextState
    this.render()
  }

  this.reset = () => {
    this.setState(initialState)
  }

  this.render = () => {
    const { elClassName, content, value } = this.state

    applyClassName(buttonEl, elClassName)

    buttonEl.value = value ?? null
    buttonEl.innerHTML = `${content ?? ""}`
  }

  this.render()
  targetEl.append(buttonEl)

  buttonEl.addEventListener("click", (e) => {
    onClick(e)
  })
}
