import s from './MyButton.module.scss';

const MyButton = ({ children, props, onClick, className, style, disabled }) => {
    return (
        <div>
        <button className={className} style={style} onClick={onClick} props={props} disabled={disabled}>
            {children}
        </button>
        </div>
    );
};

export default MyButton;