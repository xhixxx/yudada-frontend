/* eslint-disable */
import { AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    requestType?: string;
  }
}
