import { ErrorState } from "./common";

export type LicenseData = {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  licenseNumber?: string;
  expirationDate?: string;
  issuanceDate?: string;
  gender?: string;
  rawData?: string;
};

export type ScanResult = {
  timestamp: number;
  data: LicenseData;
  isValid: boolean;
  errors?: ErrorState[];
};
