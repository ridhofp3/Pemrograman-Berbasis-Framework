import React from 'react';
import Counter from './counter';
import Greeting from './greeting';
import Example from './example';
import TodoList from './todolist';

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

// // Komponen App yang menggunakan Header, Main, dan Footer
// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Greeting name ="Ridho" />
//       <Counter />
//       <Example />
//       <Footer />
//     </div>
//   );
// }

// Tugas
function App() {
  return (
    <div>
      <h1>Aplikasi Todo List</h1>
      <TodoList />
    </div>
  );
}


export default App;