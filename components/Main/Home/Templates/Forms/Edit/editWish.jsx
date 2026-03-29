import s from "@/components/Main/Home/Templates/Forms/Edit/editForms.module.css";

export default function EditWish({wishVal, setWishVal}) {
    return (
        <div className={s.divEditWish}>
            <textarea value={wishVal.text} placeholder="введите свой текст..."
                      onChange={(e) => {
                          setWishVal(prev => ({...prev, text: e.target.value}));
                      }}
                      className={s.textDesc}
                      maxLength={600}
            ></textarea>
        </div>
    );
}