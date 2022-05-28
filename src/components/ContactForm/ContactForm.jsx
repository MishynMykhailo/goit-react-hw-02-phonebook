// import { Component } from 'react';

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   render() {
//     return (
//       <form onSubmit={this.handlerSumbit}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handlerChange}
//             value={this.state.name}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             onChange={this.handlerChange}
//             value={this.state.number}
//           />
//         </label>
//         <button type="submit">Add contact </button>
//       </form>
//     );
//   }
// }
