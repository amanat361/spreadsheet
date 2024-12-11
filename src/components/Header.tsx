import { HeaderProps } from "../types";
import { CellContainer } from "./CellContainer";

export function Header({ cols }: HeaderProps) {
  return (
    <div className="flex">
      <CellContainer>
        <div className="bg-gray-50" />
      </CellContainer>
      {Array(cols)
        .fill(0)
        .map((_, i) => (
          <CellContainer key={i}>
            <div className="flex justify-center items-center w-full h-full bg-gray-50 text-gray-600">
              {String(i + 1).padStart(2, "0")}
            </div>
          </CellContainer>
        ))}
    </div>
  );
}
