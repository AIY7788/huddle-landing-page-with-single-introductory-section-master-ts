import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <img src="/logo.svg" className="logo" alt="Logo" />

        <main>
          <img
            className="hero"
            src="/images/illustration-mockups.svg"
            alt="Illustration Mockups"
          />

          <section>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <a href="#register" className="btn-register">
              Register
            </a>
          </section>
        </main>

        <footer>
          <a href="#" className="icon">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
