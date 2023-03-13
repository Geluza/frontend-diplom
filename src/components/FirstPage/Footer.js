import '../../App.css';

export default function Footer() {
  return (
  <footer className="footer">
  <div className="contacts_subscription">
  <div className="contacts">
  <h4 className="contacts_title">Свяжитесь с нами</h4>
  <ul className="contacts_list">
     <li class="contacts-list_item">
  <a href="#0" class="contacts-link contacts_link-phone"> <span class="contacts-item-span">phone_number</span> </a>
  <span className="contacts-item contacts-item_number">8 (800) 000 00 00</span>
   </li>
   <li class="contacts-list_item">
  <a href="#0" class="contacts-link contacts_link-email"> <span class="contacts-item-span">e-mail</span> </a>
  <span className="contacts-item contacts-item_email"> inbox@mail.ru</span>
   </li>
   <li class="contacts-list_item">
  <a href="#0" class="contacts-link contacts_link-skype"> <span class="contacts-item-span">skype</span> </a>
  <span className="contacts-item contacts-item_skype" > tu.train.tickets</span>
  </li>
  <li class="contacts-list_item">
  <a href="#0" class="contacts-link contacts_link-location"> <span class="contacts-item-span">location</span> </a>
  <span className="contacts-item contacts-item_location"> г. Москва <br></br>ул. Московская 27-35 <br></br>555 555</span>
   </li>
  </ul>
  </div>


  <div className="subscription">

  <div class="subcribtion_form-section">
  <h4 className="subscription_title">Подписка</h4>
  <form className="subscribtion_form">
     <label className="mailing">
    <div className="mailing_text">Будьте в курсе событий</div>
     <input type="email" className="mailing-field" placeholder="email" required></input>
    </label>
     <button className="button-mailing" type="submit"><span className="button-subscription">Отправить </span> </button>
     </form>
  </div>

  <div className="subcribtion-social-link">
  <h4 className="subscription_link-title">Подписывайтесь на нас</h4>
  <ul className="social-link_list">
     <li class="social-link-list_item">
  <a href="#0" class="social-link contacts_link-youtube"> <span class="contacts-item-span">youtube</span> </a>
   </li>
   <li class="social-link-list_item item_in">
  <a href="#0" class="social-link contacts_link-i"> <span class="contacts-item-span">I</span> </a>
  <a href="#0" class="social-link contacts_link-n"> <span class="contacts-item-span">n</span> </a>
   </li>
   <li class="social-link-list_item item_g_plus">
  <a href="#0" class="social-link contacts_link-g"> <span class="contacts-item-span">G</span> </a>
  <a href="#0" class="social-link contacts_link-plus"> <span class="contacts-item-span">plus</span> </a>
  </li>
  <li class="social-link-list_item">
  <a href="#0" class="social-link contacts_link-facebook"> <span class="contacts-item-span">facebook</span> </a>
   </li>
   <li class="social-link-list_item">
  <a href="#0" class="social-link contacts_link-twitter"> <span class="contacts-item-span">twitter</span> </a>
   </li>
  </ul>
  </div>
  </div>
  </div>

  <div className="footer_lower">
  <div className="footer_lower_wrapper">
   <span className="footer_logo">Лого</span>
   <span className="footer_lower_arrow"><a href="#0" class="footer_lower_element">arrow</a></span>
   <span className="footer_lower_web">2018 WEB</span>
  </div>
  </div>
  </footer>
  );
}

