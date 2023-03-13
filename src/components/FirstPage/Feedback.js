import '../../App.css';

export default function Feedback() {
  return (
  <article className="feedback">
 <h3 className="feedback_title">ОТЗЫВЫ</h3>
 <div className="feedback_clients">
 <div className="feedback_client">
 <div className="photo_clients photo_clients1"></div>
 <div className="title_text_clients">
 <h5 className="client_name">ЕКАТЕРИНА ВАЛЬНОВА</h5>
 <div className="feedback_text">
 "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и 
 без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
 </div>
 </div>
 </div>
 <div className="feedback_client">
 <div className="photo_clients photo_clients2"></div>
 <div className="title_text_clients">
 <h5 className="client_name">ЕВГЕНИЙ СТРЫКАЛО</h5>
 <div className="feedback_text">
 "сопровождение до посадки Сразу после оплаты ж/д билетов и 
 за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
 </div>
 </div>
 </div>
 </div>
 <ul className="slider">
 <li className="slider_elem1"><button className="slider_elem1_btn"></button></li>
 <li className="slider_elem"><button className="slider_elem_btn"></button></li>
 <li className="slider_elem"><button className="slider_elem_btn"></button></li>
 <li className="slider_elem"><button className="slider_elem_btn"></button></li>
 <li className="slider_elem"><button className="slider_elem_btn"></button></li>
 </ul>
 </article>
  );
}

