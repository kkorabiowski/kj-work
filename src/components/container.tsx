type Props = { children: React.ReactNode | React.ReactNode[] };

export const Container = ({ children }: Props) => (
  <div className="container px-2.5 md:px-5">{children}</div>
);
