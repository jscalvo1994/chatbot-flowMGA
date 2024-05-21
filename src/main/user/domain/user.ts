import { getClassAttributeNames } from "@utils/classes";

export class User {
  email: string;

  constructor(props: User) {
    this.email = props.email;
  }

  static get attributeNames() {
    return this.getAttributeNames({ instance: new this({} as User) });
  }

  static getAttributeNames = <Class extends Record<string, any> = User>(props: {
    instance: Class;
  }): Record<keyof Class, string> => {
    return getClassAttributeNames<Class>(props);
  };
}
