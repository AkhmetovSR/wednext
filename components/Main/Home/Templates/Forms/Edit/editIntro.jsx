import s from "@/components/Main/Home/Templates/Forms/Edit/editForms.module.css";
import {useCursorPosition} from "@/components/Main/Home/Templates/Functions/useCursorPosition";
import {useWeddingData} from "@/components/Providers/Context";

export default function EditIntro() {
    const {weddingData, setIntro} = useWeddingData();
    const { intro } = weddingData;

    const {ref, ...textareaProps} = useCursorPosition(intro, setIntro, 60);
    return (
        <div className={s.divTA}>
            <textarea ref={ref}
                      {...textareaProps}
                      value={intro}
                      placeholder="Введите вступительные слова..."
                      className={s.IntroInviteInput}
                      maxLength={60}
            ></textarea>
        </div>
    );
}