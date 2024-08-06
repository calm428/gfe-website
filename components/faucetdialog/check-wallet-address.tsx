import { useState, useRef } from 'react';
import { Input } from '@nextui-org/react';

const CustomInput = ({
    setButtonEnable
} : {
    setButtonEnable : (checkStatus : boolean) => void
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    let checkStatus = inputValue.startsWith(`evmos`) && inputValue.length == 44
    setButtonEnable(checkStatus)

    return (
        <div className='w-4/5'>
            {!(inputValue == "" && !isFocused) && 
            <span className={
                `text-xs ${checkStatus ? 'text-neutral-950' : 'text-rose-500'}`
            }>
                GFE wallet Address
            </span>}
            <Input
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="GFE wallet Address"
                value={inputValue}
                className={
                    `border rounded-xl border-b-4 ${checkStatus ? 'border-blue-500 text-newtral-950' : 'border-red-500 text-rose-500'}`
                }
            />
            <div className='flex flex-col items-center p-t-2'>
                {inputValue == '' && <p className='text-rose-500'>Required. Example: evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru</p>}
                {inputValue != '' && (!inputValue.startsWith(`evmos`) || inputValue.length != 44) && <p className='text-rose-500'>Invalid GFE address format.</p>}
                {inputValue == 'evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru' && <p>Example: evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru</p>}
                {inputValue != 'evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru' && checkStatus && <p>Correct GFE address format. Go ahead.</p>}
            </div>
        </div>
    );
};

export default CustomInput