/**
 * `my-component`
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyComponent extends Polymer.Element {
  static get is() { return 'my-component'; }
  static get properties() {
    return {
      name: {
        type: String,
        value: "Moises Martinez"
      },
      myProp: {
        type: String,
        value: 'my-component'
      },
      personas: {
        type: Array,
        value: () => [
          {
            name: 'Juan Perez',
            address: 'a@gmail.com',
            direction: 'St. Franklin #50',
            phone: '+ 52 -------',
            job: 'No work',
            socialmedia: 'instagram'
          },
          {
            name: 'Juan Perez',
            address: 'a@gmail.com',
            direction: 'St. Franklin #50',
            phone: '+ 52 -------',
            job: 'No work',
            socialmedia: 'instagram'
          },
          {
            name: 'Juan Perez',
            address: 'a@gmail.com',
            direction: 'St. Franklin #50',
            phone: '+ 52 -------',
            job: 'No work',
            socialmedia: 'instagram'
          },
          {
            name: 'Miriam Perez',
            address: 'a@gmail.com',
            direction: 'St. Franklin #50',
            phone: '+ 52 -------',
            job: 'No work',
            socialmedia: 'instagram'
          },
          {
            name: 'Juan Perez',
            address: 'a@gmail.com',
            direction: 'St. Franklin #50',
            phone: '+ 52 -------',
            job: 'No work',
            socialmedia: 'instagram'
          }
        ]
      },
      newUser: {
        type: Array,
        value: () => {
          return {
            name: '',
            address: '',
            direction: '',
            phone: '',
            job: '',
            socialmedia: ''
          };
        }
      }
      ,
      myObserver: {
        type: String,
        observer: '_myObserverFn'
      },
      myComputed: {
        type: String,
        computed: '_myComputedFn(myObserver, myName)'
      },
    };
  }

  addContact() {
    const newUser = this.newUser;

    if (newUser.name && newUser.address && newUser.direction && newUser.phone && newUser.job && newUser.socialmedia) {
      this.push('personas', newUser);
      this.set('newUser', { name: '', address: '', direction: '', phone: '', job: '', socialmedia: '' });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }//Añade contactos


  deleteContact(event) {
    var index = event.model.index;
    this.splice('personas', index, 1);
  }//Borrar el contacto con indice

  toggleVisibility(event) {
    var index = event.model.index;
    this.set(`personas.${index}.visible`, !this.get(`personas.${index}.visible`));
  }//Mostrar los datos completos del usuario

  toggleForm() {
    this.showForm = !this.showForm;
  }//Estado para la visualización


  _myObserverFn(newValue, oldValue) {
    console.log(newValue, oldValue);

  }

  _myComputedFn(myObserver, myName) {
    return myObserver;
  }


}

window.customElements.define(MyComponent.is, MyComponent);
