import { Theme } from "./common";
import { LicenseData } from "./results";

export type DisplayField = keyof LicenseData;

export type Settings = {
  displayFields: DisplayField[];
  ageVerification: {
    enabled: boolean;
    minimumAge: number;
  };
  theme: Theme;
  scannerPreferences: {
    autoClose: boolean;
    vibration: boolean;
    showRawData: boolean;
  };
};
