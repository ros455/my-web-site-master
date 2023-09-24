import React, {useState} from 'react';
import '../style/reviews.scss';
import TitleTemplate from './template/TitleTemplate';
import ReviewBlocktemplate from './template/ReviewBlocktemplate';
const Reviews = () => {
    const [reviewsArray] = useState([
        {
            image: 'no-avatar.png',
            date: '18/06/2019',
            name: 'Юрий Стоун',
            text: 'Всем доброго дня. Сотрудничество с Александром было очень приятным и плодотворным. Хочу отметить высокий профессионализм и умение подхватывать мои идеи. Александр с лету понимал что я хочу. Так же приятно то он смог реализовать все мои хотелки. Раньше я часто слышал "это невозможно сделать". Сайт сложный, было много правок и изменений с моей стороны, но все было сделано. Очень рекомендую к сотрудничеству.'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Кирил Павленко',
            text: 'Робота виконана чудово, швидко та професійно, Олександр 24/7 тримав з нами звязок в режимі чату та відео-дзвінків для вирішення всіх запитань та демонтрації ходу проекту! Всім рекомендуємо даного виконавця!'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Artem Sergeevich',
            text: 'Все чітко, швидко та зручно. А головне - професійно. Рекомендую.'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Anastasia Zakharchuk',
            text: 'Исполнитель выполнил все на высшем уровне! Работа происходила максимально комфортно и оперативно. Спасибо!'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Sergey Martunuk',
            text: 'Все супер, рекомендую. Відповідально підходять до задач'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Андрій Дьомін',
            text: 'Дуже дякую, професійно та чітко виконали завдання. Дуже оперативно відповідають на запити та дуже професійно пораються з труднощами! Рекомендую!'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Виталий Орлов',
            text: 'Задача виконана, калькулятор працює, все чудово.'
        },
        {
            image: 'no-avatar.png',
            date: '02/01/2019',
            name: 'Дмитро Гезрдава',
            text: 'Хороша робота за короткий термін рекомендую!'
        },
    ]);
    return (
        <div className='reviews_wrap'>
            <TitleTemplate text={'Відгуки'}/>
            <div className='reviews_text_wrap'>
                <p className='reviews_text'> Кожен зворотный зв'язок дозволяє мені краще оцінити свої сильні та слабкі сторони</p>
            </div>
            <div className='reviews_all_items_wrap'>
                {reviewsArray.map((item,idx) => (
                <ReviewBlocktemplate item={item} key={idx}/>
                ))}
            </div>
        </div>
    );
};

export default Reviews;