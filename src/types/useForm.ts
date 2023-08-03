export interface IValidateOption<Type> {
  initialState: Type;
  required: (value: Type) => boolean;
  error: string;
}

export interface IUseForm<Type> {
  value: Type;
  error: string;
  handleChange: (val: Type) => void;
}
