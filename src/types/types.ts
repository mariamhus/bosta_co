export const SET_LANGUAGE ='SET_LANGUAGE';

export interface langState {
language:string;
}

interface SetLanguageAction {
    type: typeof SET_LANGUAGE;
    payload: string;
}

export type LangAction = SetLanguageAction;

export interface Shipment {
    provider: string;
    CurrentStatus: {
      state: string;
      timestamp: string;
    };
    PromisedDate: string;
    TrackingNumber: string;
    TrackingURL: string;
    SupportPhoneNumbers: string[];
    TransitEvents: {
      state: string;
      timestamp: string;
      hub?: string;
      reason?: string;
    }[];
    CreateDate: string;
    isEditableShipment: boolean;
    nextWorkingDay: {
      dayDate: string;
      dayName: string;
    }[];
  }

  export interface PackageState {
    state: string;
    timestamp: string;
    hub?: string;
    reason?: string;
  }