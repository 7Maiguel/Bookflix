import { useRef, useState } from "react";
import CustomIcon from "./CustomIcon";

export default function PasswordInput({ label, name, onChange }) {
  const [inputFocused, setInputFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordInput = useRef(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    passwordInput.current.type = showPassword ? "password" : "text";
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <div
        className={`mb-3 flex items-center justify-between border-b-2 bg-white pr-3 ${inputFocused ? "border-red-400" : ""}`}
      >
        <input
          id={name}
          type="password"
          ref={passwordInput}
          name={name}
          className="password-input"
          onChange={onChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder="*************"
          required
        />
        <CustomIcon
          type={showPassword ? "eyeOff" : "eye"}
          styles="cursor-pointer text-2xl text-[#E50914]"
          handleClick={toggleShowPassword}
        />
      </div>
    </div>
  );
}
