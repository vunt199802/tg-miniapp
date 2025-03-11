import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramEditProfileForm from "../../../components/kit/EditProfileForm/TelegramEditProfileForm";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";
import HEADER from "../../../components/app/main/layout/MainHeader";

const EditProfile = () => {
  const navigate = useNavigate();

  const onSendMessage = async (message) => {
    console.log("message", message);
  };

  return (
    <TelegramScreen showbackbutton={true} className="gap-[32px]">
      <HEADER title="Edit Profile" action={false} />
      <TelegramEditProfileForm
        fieldhint={`Enter a message`}
        buttonlabel={"NEXT"}
        onSubmit={onSendMessage}
      />
    </TelegramScreen>
  );
};

export default EditProfile;
