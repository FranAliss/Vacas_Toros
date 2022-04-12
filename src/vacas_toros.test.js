import buscar from "./buscar_Toros_Vacas.js"

describe("Verificar toros y vacas", () => {
  it("Deberia devolver vacio si la cadena secreta esta vacia", () => {
    expect(buscar("","")).toEqual("");
  });
  it("Deberia devolver cuatro toros", () => {
    expect(buscar("1234","1234")).toEqual("!!!!");
  });
  it("Deberia devolver un toro", () => {
    expect(buscar("1234","1567")).toEqual("!#");
  });
  it("Deberia devolver nada (terneros ahora)", () => {
    expect(buscar("1234","5678")).toEqual("#");
  });
  it("Deberia devolver dos toros", () => {
    expect(buscar("1234","1564")).toEqual("!#!");
  });
  it("Deberia devolver dos vacas", () => {
    expect(buscar("1234","4368")).toEqual("*#*##");
  });
  it("Deberia devolver una ternera ", () => {
    expect(buscar("1234","9499")).toEqual("*#");
  });  
});

