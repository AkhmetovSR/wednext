import s from "@/components/Main/Home/Templates/Modules/RVSP/Confirmed/Confirmed.module.css";
import r from "@/components/Main/Home/Templates/Modules/RVSP/RSVP.module.css";

export default function Confirmed({customClasses, changeConfirm}) {

    return (
        <div className={`${s.Confirm} ${customClasses?.Confirm || ""}`}>
            <div className={r.Thanks}>
                Спасибо, за ваш отклик!
                Если по каким-либо причинам у Вас изменились планы, просим Вас заполнить анкету повторно.
                Это можно сделать нажав кнопу ниже<br/>
                <br/>↓
            </div>
            <div>
                <button onClick={changeConfirm} className={r.BtnConfirm}>Изменить решение</button>
            </div>
        </div>
    );
}