import { CellProps } from "../types";

export function Cell({ isSelected, onSelect, inputRef }: CellProps) {
  return (
    <div
      className="flex justify-center items-center w-full h-full"
      onClick={onSelect}
    >
      <input
        ref={inputRef}
        type="text"
        className="w-full h-full px-1 focus:outline-none"
      />
    </div>
  );
}
