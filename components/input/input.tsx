'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

interface input {
    label: string,
    placeholder: string,
    name: string,
    initialValue: string
}

const InputComponent = ({ label, placeholder, name, initialValue }: input) => {
    const [value, setValue] = useState(initialValue);

    return (
        <div className="flex flex-col gap-2 mb-6 align-center w-full">
            <Label htmlFor={name}>{label}</Label>
            <Input placeholder={placeholder} name={name} type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        </div >
    )
}

export default InputComponent;  