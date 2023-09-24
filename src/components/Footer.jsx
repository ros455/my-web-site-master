import React from "react";
import "../style/footer.scss";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { SiViber } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="first_block">
        <div className="work_schedule_wrap">
          <div className="work_schedule_icon_wrap">
            <BiLogoTelegram className="work_schedule_icon"/>
            <SiViber className="work_schedule_icon"/>
            <BsWhatsapp className="work_schedule_icon"/>
          </div>
          <div className="work_schedule_text_wrap">
            <p className="work_schedule_text">Графік роботи</p>
            <p>Пн - Сб, з 9:00 до 21:00</p>
          </div>
        </div>
          <nav>
            <div className="footer_links_wrap">
              <div className="footer_link">
                <p className="footer_link_round"></p>
                <Link to='/'>Головна</Link>
              </div>
              <div className="footer_link">
              <p className="footer_link_round"></p>
                <Link to='/'>Послуги</Link>
              </div>
              <div className="footer_link">
              <p className="footer_link_round"></p>
                <Link to='/'>Шаблони</Link>
              </div>
              <div className="footer_link">
              <p className="footer_link_round"></p>
                <Link to='/'>Про нас</Link>
              </div>
              <div className="footer_link">
              <p className="footer_link_round"></p>
                <Link to='/'>Контакти</Link>
              </div>
              <div className="footer_link">
              <p className="footer_link_round"></p>
                <Link to='/'>Політика конфіденційності</Link>
              </div>
            </div>
          </nav>
        <div className="footer_contacts_wrap">
            <div className="footer_contacts_numbers_wrap">
                <div className="footer_contacts_numbers_icon_wrap">
                <BsFillTelephoneFill className="footer_contacts_numbers_icon"/>
                </div>
                <div className="footer_contacts_numbers_block">
                    <p className="footer_contacts_number">+38 (000) 000 00 00</p>
                    <p className="footer_contacts_number">+38 (000) 000 00 00</p>
                </div>
            </div>
            <div className="footer_button_wrap">
              <button className="footer_button">Замовити дзвінок</button>
            </div>
            <div className="footer_contacts_post_wrap">
                <SiMaildotru className="footer_contacts_post_icon"/>
                <p className="footer_contacts_post_text">nexuslab2000@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="bottom_text">2017-2023 Nexus Lab | Всі права захищені</div>
    </div>
  );
};

export default Footer;
