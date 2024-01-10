import httpRequest from "./http-request";

describe("httpRequest", () => {
  test("should successfully make a GET request", async () => {
    const mockUrl = "https://example.com";
    const mockResponse = { data: "Mock data" };

    // Mocking the fetch function
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await httpRequest.get(mockUrl);

    expect(fetch).toHaveBeenCalledWith(mockUrl, {});
    expect(result).toEqual(mockResponse);
  });

  test("should handle errors during GET request", async () => {
    const mockUrl = "https://example.com";
    const mockErrorMessage = "Mock error message";

    // Mocking the fetch function to simulate an error
    fetch.mockRejectedValueOnce(new Error(mockErrorMessage));

    await expect(httpRequest.get(mockUrl)).rejects.toThrow(
      `Error: something went wrong ${mockErrorMessage}`,
    );
  });
});
