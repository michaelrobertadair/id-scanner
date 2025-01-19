import { ErrorState } from "./common";

export type CameraPermissionStatus = "prompt" | "granted" | "denied";

export type ScannerState = {
  isActive: boolean;
  hasPermission: CameraPermissionStatus;
  error?: ErrorState;
  isFlashlightOn: boolean;
};

export type ScanFeedback = {
  isScanning: boolean;
  progress: number;
  message: string;
};
