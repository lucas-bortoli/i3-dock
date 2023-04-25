import classNames from "classnames";

interface Props {
  marginLeft?: boolean;
  marginRight?: boolean;
  visible?: boolean;
}

const Separator = (props: Props) => {
  return (
    <span
      className={classNames("separator", {
        marginLeft: !!props.marginLeft,
        marginRight: !!props.marginRight,
        visible: props.visible ?? true,
      })}>
      |
    </span>
  );
};

export default Separator;
