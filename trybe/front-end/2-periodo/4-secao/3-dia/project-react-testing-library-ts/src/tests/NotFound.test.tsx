import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound/NotFound";

describe("Componente NotFound", () => {
  it('deve conter um heading h2 com o texto "Page requested not found"', () => {
    render(<NotFound />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Page requested not found/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("deve exibir uma imagem com o src correto e texto alternativo adequado", () => {
    render(<NotFound />);
    const image = screen.getByRole("img", {
      name: /i have no idea what i'm doing/i,
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/404.gif");
  });
});
