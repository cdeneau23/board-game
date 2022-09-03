/* eslint-disable-next-line */
export interface SubheaderProps {
  title: string;
}

export function Subheader(props: SubheaderProps) {
  return (
    <div className="subheader-container center">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Subheader;
