interface Props {
  color: string;
  size: string;
  onClick: Function;
}
function MenuButton({ color, size, onClick }: Props) {
  const handleAction = (event) => {
    event.stopPropagation();
    onClick();
  };
  return (
    <div onClick={handleAction}>
      <svg
        width={size ?? "2.5rem"}
        height={size ?? "2.5rem"}
        viewBox="0 0 12 12"
        enableBackground="new 0 0 12 12"
      >
        <g>
          <path fill={color ?? "#currentColor"} />
          <rect
            fill={color ?? "#currentColor"}
            height="1"
            width="11"
            x="0.5"
            y="5.5"
          />

          <rect
            fill={color ?? "#currentColor"}
            height="1"
            width="11"
            x="0.5"
            y="2.5"
          />

          <rect
            fill={color ?? "#currentColor"}
            height="1"
            width="11"
            x="0.5"
            y="8.5"
          />
        </g>
      </svg>
    </div>
  );
}
export default MenuButton;
