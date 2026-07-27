type InstagramProps = {
  size?: number;
};
/**
 * Plain outline of the Instagram mark. It draws itself in the current text
 * colour, so it flips along with the page when the about section lightens.
 */
const Instagram = ({
  size = 28,
}: InstagramProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.25" cy="6.75" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
};
export default Instagram;
