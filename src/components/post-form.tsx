"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

interface FormErrors {
  title?: string[];
  content?: string[];
}

interface FormState {
  errors: FormErrors;
}

interface PostFormProps {
  formAction: any;
  initialData: {
    title: string;
    content: string;
  };
}

export default function PostForm({ formAction, initialData }: PostFormProps) {
  const [FormState, action] = useFormState<FormState>(formAction, {
    errors: {},
  });

  return <>
    <h1 className="text-3xl"></h1>
  </>
}
