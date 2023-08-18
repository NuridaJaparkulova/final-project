import s from './Register.module.scss';
import cl from 'classnames'
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { message } from 'antd'
import MyInput from '../../../../UI/Input/MyInput';
import MyButton from '../../../../UI/Button/MyButton';


const Register = () => {
    const [name, setName] = useState('');
    const [sName, setSName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()
    const validation = email.length == 0 || password.length == 0 || name.length == 0 || sName.length == 0

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidEmailWithAt(email) {
        return email.includes('@') && isValidEmail(email);
    }

    const btnClear = async (e) => {
        e.preventDefault();

        if (isValidEmailWithAt(email)) {
            try {
                const response = await axios.get('http://localhost:3001/users');
                const users = response.data;

                const existingUser = users.find(user => (
                    user.email === email
                ));

                if (existingUser) {
                    message.open({
                        type: 'error',
                        content: 'Такой пользователь уже существует',
                    });
                } else {
                    const newUser = {
                        name: name,
                        sName: sName,
                        email: email,
                        password: password
                    };

                    await axios.post('http://localhost:3001/users', newUser);
                    message.open({
                        type: 'success',
                        content: 'Пользователь успешно зарегистрирован',
                    });
                    setName('');
                    setSName('');
                    setEmail('');
                    setPassword('');
                }
            } catch (error) {
                console.error('Ошибка при регистрации:', error);
            }
        } else {
            alert('Некорректный email');
        }
    }
    const btnName = (e) => setName(e.target.value);
    const btnSName = (e) => setSName(e.target.value);
    const btnEmail = (e) => setEmail(e.target.value);
    const btnPassword = (e) => setPassword(e.target.value);

    return (
        <div className={s.register}>
            <div className={s.container}>
                <div className={s.register_content}>
                    <MyButton className={s.close_btn} onClick={() => router.push('/')}>x</MyButton>
                    <h1 className={s.dFlex}>Регистрация</h1>
                    <div className={cl(s.content_user, s.dFlex)}>
                        <MyInput
                            icon
                            type="text"
                            placeholder='Имя*'
                            value={name}
                            onChange={btnName} />
                        <MyInput
                            icon
                            type="text"
                            placeholder='Фамилия*'
                            value={sName}
                            onChange={btnSName} />
                    </div>
                    <MyInput
                        icon
                        className={s.content_email}
                        type="email"
                        placeholder='Email*'
                        value={email}
                        onChange={btnEmail}
                    />
                    <MyInput
                        icon
                        className={s.password_content}
                        type="password"
                        placeholder='Пароль*'
                        value={password}
                        onChange={btnPassword}
                    />
                    <MyButton
                        className={cl(s.register_btn, s.dFlex)}
                        onClick={btnClear}
                        disabled={validation} >Создать</MyButton>
                    <div className={cl(s.auth, s.dFlex)}>
                        <Link href='/login'> Уже есть аккаунт? </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
// }
export default Register;