import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/contactheader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
function App() {
  return (
    <>
      <Navigation />
      <main className="main_conatiner">
      <ContactHeader />
      <ContactForm />
      </main>
    </>
  );
}

export default App;
