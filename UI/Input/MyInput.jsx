import s from './MyInput.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { FiSearch } from 'react-icons/fi';

const MyInput = ({ placeholder, icon, search, value, onChange, type, ...props }) => {
    return (
        <div className={s.input}>
            {icon && (
                <div>
                    <UserOutlined />
                </div>
            )}
            {search && (
                <div>
                    <FiSearch size={24} />
                </div>
            )}
            <input {...props} type={type} placeholder={placeholder} value={value}
                onChange={onChange} />
        </div>
    );
};

export default MyInput;