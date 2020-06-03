const pageIntervals = require("../src/pageIntervals.js");

describe("Test VeeValidate plugins", () => {
  describe("page_intervals", () => {
    it("1-1 - countPage = 10", () => {
      expect(pageIntervals("1-1", { countPage: 10 })).toBe(true);
    });

    it("1-1 - countPage = 1", () => {
      expect(pageIntervals("1-1", { countPage: 10 })).toBe(true);
    });

    it("1,3,5,7-10 - countPage = 10", () => {
      expect(pageIntervals("1,3,5,7-10", { countPage: 10 })).toBe(true);
    });

    it("1,3,5,7-8 - countPage = 10", () => {
      expect(pageIntervals("1,3,5,7-8", { countPage: 10 })).toBe(true);
    });

    it("5-10 - countPage = 10", () => {
      expect(pageIntervals("5-10", { countPage: 10 })).toBe(true);
    });

    it("5-9 - countPage = 10", () => {
      expect(pageIntervals("5-9", { countPage: 10 })).toBe(true);
    });

    it("1-10 - countPage = 10", () => {
      expect(pageIntervals("1-10", { countPage: 10 })).toBe(true);
    });

    it("10 - countPage = 10", () => {
      expect(pageIntervals("10", { countPage: 10 })).toBe(true);
    });

    it("1 - countPage = 10", () => {
      expect(pageIntervals("1", { countPage: 10 })).toBe(true);
    });

    it("0-10 - countPage = 10", () => {
      expect(pageIntervals("0-10", { countPage: 10 })).toBe(false);
    });

    it("1-10 - countPage = 9", () => {
      expect(pageIntervals("1-10", { countPage: 9 })).toBe(false);
    });

    it("1-11 - countPage = 10", () => {
      expect(pageIntervals("1-11", { countPage: 10 })).toBe(false);
    });

    it("10-1 - countPage = 10", () => {
      expect(pageIntervals("10-1", { countPage: 10 })).toBe(false);
    });

    it("5,6,8,2,5-6 - countPage = 10", () => {
      expect(pageIntervals("5,6,8,2,5-6", { countPage: 10 })).toBe(false);
    });
  });
});
