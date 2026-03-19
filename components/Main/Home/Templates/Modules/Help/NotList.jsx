import s from "@/components/Main/Home/Templates/Modules/Help/NotList.module.css";

export default function NotList({customClasses}) {

    return (
        <div className={`${s.NotList} ${customClasses?.NotList || ""}`}>
            Если Вы НЕ хотите, чтобы данный раздел видели гости - оставьте его пустым.
            <br/><br/>
            Но если передумаете, Вы всегда можете добавить или отредактировать информацию.
        </div>
    );
}