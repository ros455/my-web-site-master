import React from "react";
import "../style/callToAction.scss";
const CallToAction = () => {
  return (
    <div className="call_to_action_wrap">
      <div className="call_to_action_content_wrap">
        <div className="call_to_action_main_text">
          <p className="call_to_action_main_text_developer">Розробка</p>
          <div className="call_to_action_main_text_site_block">
          <p className="call_to_action_main_text_site">Сайтів</p>
          <div className="call_to_action_individual_approach_wrap">
            <p className="call_to_action_individual_approach_text">
              З індивідуальним підходом
            </p>
          </div>
          </div>
          <p className="call_to_action_main_text_buisness">ДЛЯ БІЗНЕСУ</p>
        </div>
        <div className="call_to_action_list_wrap">
          <p>- Розробимо ефективний інструмент продажу</p>
          <p>- Збільшимо впізнаванність бренду</p>
          <p>- Залучимо потік клієнтів</p>
        </div>
        <div className="call_to_action_create_button_wrap">
          <button className="call_to_action_create_button">
            Створити сайт
          </button>
        </div>
      </div>
      <div className="call_to_action_img_wrap">
        <img className="call_to_action_img" src="./img/call-to-action.svg" />
      </div>
    </div>
  );
};

export default CallToAction;
