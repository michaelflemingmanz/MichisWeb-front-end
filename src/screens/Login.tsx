function MyButton({ title }: { title: string }) {
    return (
      <button>{title}</button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton title="Soy un botón" />
      </div>
    );
  }
  