import { useState, useRef, useEffect } from 'react';
import { Input } from '@nextui-org/react';

const CustomInput = () => {
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

    return (
        <div className='w-4/5'>
            {!(inputValue == "" && !isFocused) && <span className='text-xs'>GFE wallet Address</span>}
            <Input
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="GFE wallet Address"
                value={inputValue}
                className={`p-2 ${isFocused ? 'border-blue-500' : 'border-gray-500'}`}
            />
            {inputValue == '' && <p>Required. Example: evmos17u6aw9l89myt7mmfr3vfluzkst4w7ths0sa9ru</p>}
            {inputValue != '' && (!inputValue.startsWith(`evmos`) || inputValue.length != 44) && <p>Invalid GFE address format.</p>}
            {inputValue.startsWith(`evmos`) && inputValue.length == 44 && <p>Invalid GFE ad dress format.</p>}
        </div>
    );
};

export default CustomInput;