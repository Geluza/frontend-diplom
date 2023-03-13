import './TrainsInfoBar.css';

export default function TrainsInfoBar() {
  return (
  <ul className="aboutTicket">
  <li className="about_ticket_elem tickets"><div className="number_text_section"><span className="number_section">1</span><span className="text_section">Билеты</span></div></li>
  <li className="about_ticket_elem pass"><div className="number_text_section"><span className="number_section">2</span><span className="text_section">Пассaжиры</span></div></li>
  <li className="about_ticket_elem pay"><div className="number_text_section"><span className="number_section">3</span><span className="text_section">Оплата</span></div></li>
  <li className="about_ticket_elem check"><div className="number_text_section"><span className="number_section">4</span><span className="text_section">Проверка</span></div></li>
  </ul>
   )
}

