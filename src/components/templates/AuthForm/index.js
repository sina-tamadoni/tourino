"use client";

import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useState } from "react";
import ModalContainer from "@/components/partials/ModalContainer";
import { useAuth } from "@/context/AuthProvider";

function AuthForm() {
  const { step } = useAuth();
  const [mobile, setMobile] = useState("");

  return (
    <div>
      {step === 1 && (
        <ModalContainer>
          <SendOTPForm mobile={mobile} setMobile={setMobile} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer>
          <CheckOTPForm mobile={mobile} />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
