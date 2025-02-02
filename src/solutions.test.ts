import { calculatePanelsInARectangleRoof } from "./solutions";

describe("calculatePanelsInARectangleRoof()", () => {
  describe("When any parameter is missing", () => {
    test("should throw an error", () => {
      //Arrange

      // Act

      // Assert
      expect(() => {
        // @ts-expect-error
        calculatePanelsInARectangleRoof({});
      }).toThrow();
    });
  });

  describe.each([
    {
      panelWidth: 1,
      panelHeight: 2,
      roofWidth: 5,
      roofHeight: 3,
      expected: 7,
    },
    {
      panelWidth: 1,
      panelHeight: 2,
      roofWidth: 2,
      roofHeight: 4,
      expected: 4,
    },
    {
      panelWidth: 1,
      panelHeight: 2,
      roofWidth: 3,
      roofHeight: 5,
      expected: 7,
    },
    {
      panelWidth: 2,
      panelHeight: 2,
      roofWidth: 1,
      roofHeight: 10,
      expected: 0,
    },
  ])(
    "When the roof is $roofWidth wide and $roofHeight high, and the panels are $panelWidth wide by $panelHeight high",
    ({ panelWidth, panelHeight, roofWidth, roofHeight, expected }) => {
      test(`should return ${expected} panels`, () => {
        // Arrange
        const measurements = {
          panelWidth,
          panelHeight,
          roofWidth,
          roofHeight,
        };

        // Act
        const panelsQuantity = calculatePanelsInARectangleRoof(measurements);

        // Assert
        expect(panelsQuantity).toBe(expected);
      });
    }
  );
});
