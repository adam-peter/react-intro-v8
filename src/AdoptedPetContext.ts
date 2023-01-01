import { createContext } from "react";
import { IPet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [IPet, (adoptedPed: IPet) => void] | null
>(null);

export default AdoptedPetContext;
