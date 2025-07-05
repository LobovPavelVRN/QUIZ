import "i18next";
import { TranslationTypes } from "./types";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: TranslationTypes;
  }
}