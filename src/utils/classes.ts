export function getClassAttributeNames<
  Class extends Record<string, any>,
>(props: { instance: Class }): Record<keyof typeof props.instance, string> {
  return Object.keys(props.instance).reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: key,
      };
    },
    {} as Record<keyof typeof props.instance, string>
  );
}
