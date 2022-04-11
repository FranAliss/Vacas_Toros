import buscar from "./buscar_Toros_Vacas.js"

describe("Verificar toros y vacas", () => {
  it("Deberia devolver vacio si la cadena secreta esta vacia", () => {
    expect(buscar("","")).toEqual("");
  });
  it("Deberia devolver cuatro toros", () => {
    expect(buscar("1234","1234")).toEqual("!!!!");
  });
  it("Deberia devolver un toro", () => {
    expect(buscar("1234","1567")).toEqual("!");
  });
  it("Deberia devolver nada", () => {
    expect(buscar("1234","5678")).toEqual("");
  });
  it("Deberia devolver dos toros", () => {
    expect(buscar("1234","1564")).toEqual("!!");
  }); 
});

