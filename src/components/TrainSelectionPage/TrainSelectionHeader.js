import './TrainSelectionHeader.css';

export default function trainSelectionHeader() {
  return (
   <header className="header">
   <div className="header_text">
   <div className="logo">Лого</div>
   <div className="header_list_wrap">
   <ul className="header_text_list">
   <li className="list_element">О нас</li>
   <li className="list_element">Как это работает</li>
   <li className="list_element">Отзывы</li>
   <li className="list_element">Контакты</li>
   </ul>
   </div>
  
   <div className="window_booking">
    <div className="route_date_section">
    <div className="route_section">
   <div className="route">Направление</div>
   <div className="route_select">
   <input className="route_there" ></input>
   <span class="reverse_arrow"></span>
   <input className="route_back"></input>
   </div>
   </div>
   <div className="date_route">
    <div className="date">Дата</div>
    <div className="date_windows">
    <input className="date_there" type="date"></input>
    <input className="date_back" type="date"></input>
    </div>
   </div>
   </div>
   <button className="search_tickets">НАЙТИ БИЛЕТЫ</button>
  </div>
  </div>
   </header>
   )
}

