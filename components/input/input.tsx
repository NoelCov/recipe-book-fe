import React from 'react'

interface input {
    label: string,
    placeholder: string
}

export const Input = ({ label, placeholder }: input) => {
    return (
        <div className="flex flex-col gap-1 mb-6 align-center max-w-80">
            <label className="text-sm">{label}</label>
            <input type="text" placeholder={placeholder} className="input input-bordered w-full input-sm" />
        </div >
    )
}
