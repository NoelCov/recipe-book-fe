import React, { HTMLInputTypeAttribute } from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface input {
    label: string,
    placeholder: string,
    name: string
}

const InputComponent = ({ label, placeholder, name }: input) => {
    return (
        <div className="flex flex-col gap-2 mb-6 align-center w-full">
            <Label htmlFor={name}>{label}</Label>
            <Input placeholder={placeholder} name={name} type="text" />
        </div >
    )
}

export default InputComponent;  