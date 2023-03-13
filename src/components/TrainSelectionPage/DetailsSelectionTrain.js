import './DetailsSelectionTrain.css';

export default function TrainsInfoBar() {
  return (
  <section className="details_selection">
  <div className="section_dates">
  <div className="dates_container">
  <div className="date_title_there">Дата поездки</div>
   <input className="date_trip date_trip_there" type="date" ></input>
   <div className="date_title_back">Дата возвращения</div>
    <input className="date_trip date_trip_back" type="date"></input>
  </div></div>
  
  <div className="train_fares">
   <ul className="train_fares_list">
    <li className="train_fares_elem">
    <span className="fares_elem fares_elem_coupe">Купе</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
    <li className="train_fares_elem"><span className="fares_elem fares_elem_plac">Плацкарт</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
    <li className="train_fares_elem"><span className="fares_elem fares_elem_seat">Сидячий</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
    <li className="train_fares_elem"><span className="fares_elem fares_elem_lux">Люкс</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
    <li className="train_fares_elem"><span className="fares_elem fares_elem_wifi">Wi-Fi</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
    <li className="train_fares_elem"><span className="fares_elem fares_elem_express">Экспресс</span><label class="switch">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label></li>
   </ul>
  </div>

  <div className="price_trip">
  <h4 className="price_trip_title">СТОИМОСТЬ</h4>
  <div className="filterPrice__limits">
        <span className>от</span>
        <span>до</span>
      </div>
      <label class="switch switch_limit_price">
  <input type="checkbox" checked></input>
  <span class="slider round"></span>
</label>
  </div>   


  </section>
   )
}

