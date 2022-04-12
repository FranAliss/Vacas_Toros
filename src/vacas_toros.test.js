import buscar from "./buscar_Toros_Vacas.js"
import buscarBisonte from "./buscar_bisonte.js"

describe("Verificar toros y vacas", () => {
  it("Deberia devolver vacio si la cadena secreta esta vacia", () => {
    expect(buscar("","")).toEqual("");
  });
  it("Deberia devolver cuatro toros", () => {
    expect(buscar("1234","1234")).toEqual("!!!!");
  });
  it("Deberia devolver un toro y un ternero", () => {
    expect(buscar("1234","1567")).toEqual("!#");
  });
  it("Deberia devolver nada (un ternero ahora)", () => {
    expect(buscar("1234","5678")).toEqual("#");
  });
  it("Deberia devolver dos toros y un ternero", () => {
    expect(buscar("1234","1564")).toEqual("!#!");
  });
  it("Deberia devolver dos vacas y tres terneros", () => {
    expect(buscar("1234","4368")).toEqual("*#*##");
  });
  it("Deberia devolver una ternera y una vaca ", () => {
    expect(buscar("1234","9499")).toEqual("*#");
  });  
});

describe("Buscar Bisontes", () => {
  it("Deberia devolver vacio si la cadena secreta esta vacia", () => {
    expect(buscarBisonte("")).toEqual("");
  });
  it("Deberia devolver dos bisontes por los numeros 3 y 5", () => {
    expect(buscarBisonte("4235")).toEqual("%%");
  });
  it("Deberia devolver dos bisontes por los numeros 3 y 5", () => {
    expect(buscarBisonte("7235")).toEqual("%%%");
  });
});

