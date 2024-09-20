import { useState, useRef } from 'react';
import { Input } from '@nextui-org/react';
const faucetAddress = process.env.NEXT_PUBLIC_FAUCET_SERVER_ADDRESS

const CustomInput = ({
    setSecondButtonEnable,
    setAddress
}: {
    setSecondButtonEnable: (checkStatus: boolean) => void,
    setAddress: (address: string) => void
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = () => setIsFocused(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
        setAddress(newValue)
    }

    let checkStatus = inputValue.startsWith(`evmos`) && inputValue.length == 44
    setSecondButtonEnable(checkStatus)

    return (
        <div className='w-full'>
            {!(inputValue == "" && !isFocused) &&
                <span className={
                    `text-xs ${checkStatus ? 'text-neutral-950' : 'text-rose-500'}`
                }>
                    GFE wallet Address
                </span>}
            <Input
                id="GFE Wallet Address"
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="GFE wallet Address"
                value={inputValue}
                className={
                    `border rounded-xl border-b-4 ${checkStatus ? 'border-blue-500 text-neutral-950' : 'border-red-500 text-rose-500'}`
                }
            />
            <div className='mt-1 overflow-auto'>
                {inputValue === '' && <p className='text-rose-500'>Required. Example: {faucetAddress}</p>}
                {inputValue !== '' && (!checkStatus) && <p className='text-rose-500'>Invalid GFE address format.</p>}
                {inputValue !== '' && checkStatus && <p>{inputValue === faucetAddress ? `Example: ${faucetAddress}` : 'Correct GFE address format. Go ahead.'}</p>}
            </div>
        </div>
    );
};

export default CustomInput