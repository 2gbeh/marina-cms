export type TProps = Record<string, unknown>;

export type TId = string | number;

export type TList = string[];

export type TDocument = Record<string, unknown>;

export type TCollection = TDocument[];

enum EGender {
  M = "Male",
  F = "Female",
}

// "M" | "F"
type TGenderKeys = keyof typeof EGender;

// "Male" | "Female"
type TGenderValues = `${EGender}`;