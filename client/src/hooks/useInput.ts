import { SelectChangeEvent } from "@mui/material";
import React, {useCallback,useState } from "react";

interface ReturnObjectType {
    value: string | number,
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | any,
    error: boolean
}
export const useInput = (initialValue: string | number, validateError?: Function): [ReturnObjectType, Function, Function] => {
    const [value, setValue] = useState<string | number>(initialValue);
    const [error, setError] = useState<boolean>(true);
    
    const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        if (validateError?.(e.target.value)) {
            setError(true);
        } else {
            setError(false);
        }
        if (!e.target.value)
            {setError(true);}
        setValue(e.target.value);
    }, [validateError]);
    
    const clearinput = useCallback(() => {
        setValue('');
        setError(true)
    }, []);

    return [{
        value,
        onChange,
        error
    }, clearinput, setValue];
}