import { OnfidoConfig, OnfidoMediaResult, OnfidoResult } from "./config_constants";
declare const Onfido: {
    start(config: OnfidoConfig): Promise<OnfidoResult>;
    addCustomMediaCallback(callback: (result: OnfidoMediaResult) => OnfidoMediaResult): import("react-native").EmitterSubscription;
    byteArrayStringToBase64(byteArrayString: String): string;
};
export default Onfido;
