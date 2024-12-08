type ChevronRightProps = {
  size?: number;
};
const ChevronRight = ({
  size = 24,
}: ChevronRightProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 -960 960 960"
      fill="#e8eaed"
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
  );
};
export default ChevronRight;
