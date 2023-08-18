import s from './Login.module.scss';
import cl from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MyInput from '../../../../UI/Input/MyInput';
import MyButton from '../../../../UI/Button/MyButton';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const btnClear = async (e, email, password) => {
        e.preventDefault()

        try {
            const postAuth = await axios.get('http://localhost:3001/users')
            const data = await postAuth.data
            const findUser = data.find(user => user.email == email)
            if (findUser && findUser.password === password) {
                setEmail('');
                setPassword('')
                router.push('/')
            } else {
                alert('Неверный пароль или почта')
            }

        } catch (error) {
            console.log(error);
        }
    }

    const btnEmail = (e) => setEmail(e.target.value);
    const btnPassword = (e) => setPassword(e.target.value);

    const router = useRouter()
    const validation = email.length == 0 || password.length == 0

    return (
        <div className={s.login}>
            <div className={s.container}>
                <div className={s.login_content}>
                    <div className={s.close_btn}>
                        <MyButton className={s.close_x} onClick={() => router.push('/')} type="primary" danger ghost>x</MyButton>
                    </div>
                    <h1><Link href='/login' className={s.dFlex}>Войти в аккаунт.</Link></h1>
                    <div className={s.content_user}>
                        <MyInput icon type="email" placeholder='Почта' value={email}
                            onChange={btnEmail} />
                    </div>
                    <div className={s.password_content}>
                        <MyInput icon type="password" placeholder='Пароль' value={password}
                            onChange={btnPassword} />
                    </div>
                    <MyButton className={cl(s.login_btn, s.dFlex)} onClick={e => btnClear(e, email, password)} disabled={validation} >Войти</MyButton>
                    <div className={cl(s.register, s.dFlex)}>
                        <Link href='/register'>Регистрация</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;