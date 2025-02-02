export const hasRemainingSpace = (totalSpace: number, unitSize: number) => {
  return unitSize < totalSpace ? Boolean(totalSpace % unitSize) : false;
};
