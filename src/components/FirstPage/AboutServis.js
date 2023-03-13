import '../../App.css';

export default function AboutServis() {
  return (
   <main class="main_description>">
  <article className="description_ticket_servis">
  <h3 className="main_title">О НАС</h3>
  <div className="main_description_paragraphs">
  <div className="main_description_paragraph">Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем <br></br>все больше людей заказывают жд билеты через интернет.</div>
  <div className="main_description_paragraph">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? <br></br> Мы расскажем о преимуществах заказа через интернет.</div>
  <div className="main_description_paragraph paragraph_bold_font">Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br></br>
  Благодаря динамическому ценоообразованию цена на билеты в это время самая низкая</div>
  </div>
  </article>

  <article className="main_about_working_servis">
  <div className="about_servis_content">
  <div className="title_button_about_servis">
  <h3 className="title_about_servis">КАК ЭТО РАБОТАЕТ</h3>
  <button className="button_about_servis">Узнать больше</button>
  </div>
  <ul className="advantages_servis_list">
  <li className="advantage_servis_element order_on_website"><div className="advantage_servis"></div><div className="description_advantage">Удобный заказ <br></br>на сайте</div></li>
  <li className="advantage_servis_element no_offise"><div className="advantage_servis"></div><div className="description_advantage">Нет необходимости <br></br>ехать в офис</div></li>
  <li className="advantage_servis_element choosing directions"><div className="advantage_servis"></div><div className="description_advantage">Огромный выбор <br></br>направлений</div></li>
  </ul>
  </div>
  </article>
  </main>
  )
}