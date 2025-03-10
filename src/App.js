import "./App.css";
import { useCallback, useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  PATH_SERVER,
  PATH_SPLASH,
  PATH_LANDING,
  PATH_AUTH,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_PHONE,
  PATH_PHONE_VERIFICATION,
  PATH_HOME,
  PATH_GENDER,
  PATH_BIRTHDAY,
  PATH_RELATIONSHIP,
  PATH_HOUSEHOLD,
  PATH_VEHICLE,
  PATH_REGISTER_CONGRATULATION,
  PATH_SETTING,
  PATH_EDIT_PROFILE,
  PATH_LANGUAGE,
} from "./constants/Paths";
import {
  ServerScreen,
  MainScreen,
  LandingScreen,
  SettingScreen,
  SplashScreen,
  LoginScreen,
  AuthScreen,
  RegisterScreen,
  PhoneScreen,
  PhoneVerificationScreen,
  BirthdayScreen,
  GenderScreen,
  RelationShipScreen,
  HomeScreen,
  VehicleScreen,
  HouseholdScreen,
  LanguageScreen,
  RegisterCongratulationScreen,
} from "./screens/index";

function App() {
  const { webApp } = useTelegram();
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onMainClick = useCallback(() => {
    webApp.showAlert("Main button click");
  }, [webApp]);

  useEffect(() => {
    webApp.ready();
    webApp.BackButton.onClick(onBackClick);
    webApp.MainButton.onClick(onMainClick);
    return () => {
      webApp.BackButton.offClick(onBackClick);
      webApp.MainButton.offClick(onMainClick);
    };
  }, [webApp]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<MainScreen />} />
        <Route path={PATH_SERVER} element={<ServerScreen />} />
        <Route path={PATH_SPLASH} element={<SplashScreen />} />
        <Route path={PATH_LANDING} element={<LandingScreen />} />
        <Route path={PATH_AUTH} element={<AuthScreen />} />
        <Route path={PATH_LOGIN} element={<LoginScreen />} />
        <Route path={PATH_REGISTER} element={<RegisterScreen />} />
        <Route path={PATH_PHONE} element={<PhoneScreen />} />
        <Route
          path={PATH_PHONE_VERIFICATION}
          element={<PhoneVerificationScreen />}
        />
        <Route path={PATH_HOME} element={<HomeScreen />} />
        <Route path={PATH_GENDER} element={<GenderScreen />} />
        <Route path={PATH_BIRTHDAY} element={<BirthdayScreen />} />
        <Route path={PATH_RELATIONSHIP} element={<RelationShipScreen />} />
        <Route path={PATH_HOUSEHOLD} element={<HouseholdScreen />} />
        <Route path={PATH_VEHICLE} element={<VehicleScreen />} />
        <Route
          path={PATH_REGISTER_CONGRATULATION}
          element={<RegisterCongratulationScreen />}
        />
        <Route path={PATH_SETTING} element={<SettingScreen />} />
        {/* <Route path={PATH_EDIT_PROFILE} element={<EditProfileScreen />} /> */}
        <Route path={PATH_LANGUAGE} element={<LanguageScreen />} />
      </Routes>
    </div>
  );
}

export default App;
