describe("FEATURE 1 : Have a way to count donuts.", () => {
  describe("Can add to donut count", () => {
    it("Should start with a click count of 0", () => {
      const underTest = new DonutMaker();
      expect(underTest.clickCount).toBe(0);
    });
    it("Should add on click to the click count when a click recorded", () => {
      underTest.recordClick();
      expect(underTest.clickCount).toBe(1);
    });
    it("Should have a clickCount of 2 if 2 clicks recorded", () => {
      const underTest = new DonutMaker();
      underTest.recordClick();
      underTest.recordClick();
      expect(underTest.clickCount).toBe(2);
    });
  });
});
