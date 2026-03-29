import s from "@/components/Main/Home/Templates/Forms/Edit/editForms.module.css";
import {useCursorPosition} from "../../Functions/useCursorPosition";
import {useWeddingData} from "@/components/Providers/Context";

export default function EditInvite() {
    const {weddingData, setInvite} = useWeddingData();
    const { invite } = weddingData;
    const {ref, ...textareaProps} = useCursorPosition(invite, setInvite, 60);
    return (
        <div className={s.divTA}>
            <textarea ref={ref}
                      {...textareaProps}
                      value={invite}
                      placeholder="введите свой текст..."
                      className={s.IntroInviteInput}
                      maxLength={60}
            ></textarea>
        </div>
    );
}