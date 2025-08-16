/* Tipando apenas os campos que são usados */

import type { AnyAction } from "redux";
import type { ThunkDispatch } from "redux-thunk";

export type CharacterType = {
  name: string;
  born: string;
  titles: string[];
  aliases: string[];
};

export type CharacterState = {
  isLoading: boolean;
  character: CharacterType | null;
  error: string | null;
};

export type Dispatch = ThunkDispatch<CharacterState, null, AnyAction>;
