import buscar from "./buscar_Toros_Vacas.js"

describe("Verificar toros y vacas", () => {
  it("Deberia devolver vacio si la cadena secreta esta vacia", () => {
    expect(buscar("","")).toEqual("");
  });
  it("Deberia devolver cuatro toros", () => {
    expect(buscar("1234","1234")).toEqual("!!!!");
  });
});

