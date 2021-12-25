export const getArgs = function (args: string[]) {
  let starIndex;
  args.forEach((item, index) => {
    if (item.startsWith("--")) {
      starIndex = index;
      return;
    }
  });
  return args.slice(starIndex);
};
