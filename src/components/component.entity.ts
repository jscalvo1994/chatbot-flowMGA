type ComponentEntityAttributes<Component> = keyof Component;

export class ComponentEntity {
  static readonly role: string = "component";

  static get attributeNames(): Record<
    ComponentEntityAttributes<ComponentEntity>,
    string
  > {
    return this.getAttributeNames();
  }

  protected static getAttributeNames<
    Component extends ComponentEntity = ComponentEntity,
  >(): Record<ComponentEntityAttributes<Component>, string> {
    return Object.keys(new this()).reduce(
      (acc, key) => {
        return {
          ...acc,
          [key]: key,
        };
      },
      {} as Record<ComponentEntityAttributes<Component>, string>
    );
  }
}
