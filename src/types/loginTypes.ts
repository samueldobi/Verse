  // Types 
export type FormData = {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    agreeTerms:boolean;
  }
  // 2. Type for form errors (keys optional)
export type FormErrors = Partial<Record<keyof FormData, string>>;