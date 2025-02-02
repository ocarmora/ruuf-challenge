import { hasRemainingSpace } from "./utils";

describe("Utils", () => {
  describe("hasRemainingSpace()", () => {
    describe.each([
      {
        totalSpace: 5,
        unitSize: 3,
        expected: true,
      },
      {
        totalSpace: 1,
        unitSize: 3,
        expected: false,
      },
    ])(
      "When totalSpace is $totalSpace and unitSize is $unitSize",
      ({ totalSpace, unitSize, expected }) => {
        test(`Should return ${expected}`, () => {
          // Arrange

          // Act
          const result = hasRemainingSpace(totalSpace, unitSize);

          // Assert
          expect(result).toBe(expected);
        });
      }
    );
  });
});
