interface Iinput{
    children?: any;
    w: string;
    h: string;
    backcolor?: string;
    placeholder: string;
}

const Input = ({children, w, h, placeholder}:Iinput) => (
    <div className={`rounded-full bg-main-white ${w} ${h} 
    overflow-hidden flex items-center gap-x-2 py-2 `}>
        <input type="text" placeholder={placeholder} className="ml-3"/>
        {children}
    </div>
)

export default Input;