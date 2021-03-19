describe("Feature 1 : have a way to count donuts", () => {
  describe("Can add to donut count", () => {
    let underTest;
    beforeEach(() => {
      underTest = new DonutMaker();
    });
    it("Should start with a click count of 0", () => {
      expect(underTest.clickCount).toBe(0);
    });
    it("should add one click to the click count when a click is recorded", () => {
      underTest.recordClick();
      expect(underTest.clickCount).toBe(1);
    });
    it("Should have a clickcount of 2 if 2 clicks recorded", () => {
      underTest.recordClick();
      underTest.recordClick();
      expect(underTest.clickCount).toBe(2);
    });
  });
});
