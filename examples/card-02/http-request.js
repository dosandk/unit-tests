const httpRequest = {
  async get(url = "", options = {}) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    } catch (error) {
      throw new Error(`Error: something went wrong ${error.message}`);
    }
  },
};

export default httpRequest;
