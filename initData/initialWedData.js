import { InitialEvents } from "@/initData/initialEvents";
import { InitialWishes } from "@/initData/initialWishes";

export const initialWeddingData = {
    newlyWed1: "Сергей",
    newlyWed2: "Марина",
    intro: "ДОРОГИЕ И ЛЮБИМЫЕ НАШИ РОДИТЕЛИ, ДРУЗЬЯ И КОЛЛЕГИ!",
    invite: "С БОЛЬШИМ УДОВОЛЬСТВИЕМ ПРИГЛАШАЕМ ВАС НА НАШУ СВАДЬБУ!",
    date: new Date(),
    eventList: InitialEvents,
    wishList: InitialWishes,
    mail: "asd",
    guestData: {
        guestYes: null,
        guestNot: null
    }
};

export const initialGuestYes = [
    { id: 1, guest: "Анна Иванова", v: "2", k: "1", vn: "3", s: "1", o: "Виски, Джин" },
    { id: 2, guest: "Петр Сидоров", v: "1", k: "0", vn: "2", s: "2", o: "Пиво" },
    { id: 3, guest: "Мария Петрова", v: "0", k: "0", vn: "4", s: "3", o: "Мохито" },
    { id: 4, guest: "Сергей Козлов", v: "3", k: "2", vn: "1", s: "0", o: "Коньяк, Виски" },
    { id: 5, guest: "Елена Смирнова", v: "0", k: "0", vn: "2", s: "4", o: "Безалкогольное" },
    { id: 6, guest: "Дмитрий Попов", v: "2", k: "1", vn: "1", s: "1", o: "Текила" },
    { id: 7, guest: "Ольга Новикова", v: "0", k: "0", vn: "3", s: "2", o: "Лимонад" },
    { id: 8, guest: "Алексей Морозов", v: "1", k: "3", vn: "0", s: "1", o: "Ром, Кола" },
    { id: 9, guest: "Ирина Волкова", v: "0", k: "0", vn: "5", s: "1", o: "Сок" },
    { id: 10, guest: "Михаил Лебедев", v: "2", k: "2", vn: "2", s: "2", o: "Водка, Пиво" },
    { id: 11, guest: "Наталья Соколова", v: "0", k: "1", vn: "4", s: "0", o: "Шампанское" },
    { id: 12, guest: "Андрей Кузнецов", v: "3", k: "0", vn: "1", s: "1", o: "Джин, Тоник" },
    { id: 13, guest: "Татьяна Орлова", v: "0", k: "0", vn: "2", s: "3", o: "Мартини" },
    { id: 14, guest: "Владимир Соловьев", v: "1", k: "2", vn: "1", s: "0", o: "Коньяк" },
    { id: 15, guest: "Светлана Васильева", v: "0", k: "0", vn: "3", s: "2", o: "Минеральная вода" }
];

export const initialGuestNot = [
    { id: 1, guest: "Александр Петров" },
    { id: 2, guest: "Юлия Зайцева" },
    { id: 3, guest: "Иван Григорьев" },
    { id: 4, guest: "Екатерина Михайлова" },
    { id: 5, guest: "Павел Алексеев" },
    { id: 6, guest: "Марина Титова" },
    { id: 7, guest: "Николай Федоров" },
    { id: 8, guest: "Алина Комарова" },
    { id: 9, guest: "Артем Борисов" },
    { id: 10, guest: "Кристина Яковлева" },
    { id: 11, guest: "Роман Киселев" },
    { id: 12, guest: "Валерия Андреева" },
    { id: 13, guest: "Григорий Макаров" },
    { id: 14, guest: "Людмила Никитина" },
    { id: 15, guest: "Станислав Белов" }
];