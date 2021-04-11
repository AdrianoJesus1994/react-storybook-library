import React, { useCallback } from 'react';

import { Input } from './styles';

type InputType = 'text' | 'number' | 'email' | 'password';

interface TextFieldBaseProps {
    /**
     * Input placeholder
     */
    placeHolder?: string;
    /**
     * Input Value
     */
    value?: string;
    /**
     * Input type. Default: 'text'
     */
    inputType?: InputType;
    /**
     * Input element id
     */
    itemId?: string;
}

export type TextFieldProps = {
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & TextFieldBaseProps;

const TextField: React.FC<TextFieldProps> = ({ placeHolder, onTextChange, value, inputType, itemId }) => {
    const handleIputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (onTextChange) {
            console.log('onChange Input');
            onTextChange(event);
        }
    }, []);
    return <Input placeholder={placeHolder} onChange={handleIputChange} value={value} type={inputType} id={itemId} />;
};

export default TextField;
