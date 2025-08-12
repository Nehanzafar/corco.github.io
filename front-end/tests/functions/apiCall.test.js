import fetchRecipeById, { searchRecipes } from "../../src/utils/recipes";

describe("Should call the api of spoonacular and return data", () => {
  const key = process.env.SPOONACULAR_API_KEY;
  afterEach(() => {
    fetch.mockClear();
  });

  it("Should be called with the correct url", async () => {
    const data = {
      id: 1,
      title: "test",
      image: "https://test.react.com",
      imageType: "jpg",
    };
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );
    const response = await fetchRecipeById(1);
    expect(response).toEqual({
      id: 1,
      title: "test",
      image: "https://test.react.com",
      imageType: "jpg",
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.spoonacular.com/recipes/1/information?apiKey=${key}`
    );
  });
  it("Should check the return value of an api request", async () => {
    const fetchSpy = vi.spyOn(global, "fetch");

    fetchSpy.mockReturnValueOnce(
      Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: "test" }),
      })
    );

    const response = await fetchRecipeById(1);
    const response2 = await fetchRecipeById(1);
    const response3 = await fetchRecipeById(1);
    expect(response).toEqual({ id: 1, title: "test" });

    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.spoonacular.com/recipes/1/information?apiKey=${key}`
    );
  });

  it('Should not return undefined', () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
  })
});
