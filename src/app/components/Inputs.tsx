import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="p-4 border border-black" {...props} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="p-4 border border-black" {...props} />;
}
