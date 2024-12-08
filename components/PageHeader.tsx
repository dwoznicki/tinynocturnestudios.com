import { ComponentChildren } from "preact";

type PageHeaderProps = {
  children: ComponentChildren;
};
const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <h1 className="flex justify-center text-5xl uppercase font-extralight tracking-[0.5rem]">
      {children}
    </h1>
  );
};
export default PageHeader;
