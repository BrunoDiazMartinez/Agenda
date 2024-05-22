/**
 * `my-container`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyContainer extends Polymer.Element {
  static get is() {
    return "my-container";
  }
  static get properties() {
    return {
      inputValue: {
        type: String,
        value: '',
        notify: true,
        observer: '_myPersonalEvent'
      },
      inputType: {
        type: String,
        value: 'text'
      },
      inputPlaceholder: {
        type: String,
        value: 'my-container'
      }
    };
  }

  _myPersonalEvent(value) {
    console.log('---------->>>>>Observer');
    if(value === 'Hola') {
      this.dispatchEvent(new CustomEvent('my-personal-event', {
        bubbles: true,
        composed: true,
        detail: {
          tam: this.inputValue.length,
          flag: true
        }
      }));
    }
  }
}

window.customElements.define(MyContainer.is, MyContainer);
