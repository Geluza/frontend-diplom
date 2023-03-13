import FirstHeader from './FirstHeader';
import AboutServis from './AboutServis';
import Feedback from './Feedback';
import Footer from './Footer';
import './App.css';

export default function FirstPage() {
  return (
   <div className="train_ticket_servis">
   <FirstHeader> </FirstHeader>
   <AboutServis></AboutServis>
   <Feedback></Feedback>
   <Footer></Footer>
   </div>
  );
}

