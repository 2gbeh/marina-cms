import { StringHelper as S } from "./common/string.helper";

export class PersonHelper {
  static initials = (name = "Not available") => S.initials(name);

  static displayName = (name = "---") => S.capitalize(name);
}
