import React, {useState} from 'react';
import './index.css'
const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');

    const handleFullNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setNumber(e.target.value);
        validatePhoneNumber(e.target.value);
    };

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(input)) {
            setEmailError('');
        } else {
            setEmailError('Некорректный формат email!');
        }
    };

    const validatePhoneNumber = (input) => {
        const phoneRegex = /^\+996 [253791]\d{2} \d{2}-\d{2}-\d{2}$/;

        if (phoneRegex.test(input)) {
            setNumberError('');
        } else {
            setNumberError('Некорректный формат номера телефона!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailError && !numberError) {
            alert('Вы успешно зарегистрировались.');
        } else {
            alert('Пожалуйста, исправьте ошибки в форме.');
        }
    };

    return (
        <div className="regist">
            <form>
                <label>
                    <input type="text" placeholder={'Ф.И.О'} value={name} onChange={handleFullNameChange}/>
                </label>

                <label>
                    <input type="number" placeholder={'Возраст'} value={age} onChange={handleAgeChange}/>
                </label>

                <label>
                    <input type="email" placeholder={'example@gmail.com'} value={email} onChange={handleEmailChange}/>
                    {emailError && <span className="error">{emailError}</span>}
                </label>

                <label>
                    <input type="tel" placeholder={'+996 xxx xx-xx-xx'} value={number}
                           onChange={handlePhoneNumberChange}/>
                    {numberError && <span className="error">{numberError}</span>}
                </label>
            </form>
            <div className="resalt">
                <h2>Введенные значения:</h2>
                <p>ФИО: {name}</p>
                <p>Возраст: {age}</p>
                <p>Email: {email}</p>
                <p>Номер телефона: {number}</p>
            </div>

            <form onSubmit={handleSubmit}>
                <button type="submit">Регистрироваться</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
