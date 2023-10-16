interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button className="bg-hv_yellow px-8 py-[17px] rounded-lg hover:scale-105 ">
            <span className="text-black">{text}</span>
        </button>
    );
};

export default Button;