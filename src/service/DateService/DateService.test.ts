import { formatDate } from "./";

describe("Date", () => {
  it("should return a valid formatted date", () => {
    const date = new Date("2021-06-26T10:00:00Z");
    expect(formatDate(date)).toBe("26/06/2021 Saturday");
  });
});
