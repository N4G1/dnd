import "./ToggleSwitch.css";

interface Props {
  on: boolean;
  onClick: () => void;
  testId?: string;
  large?: boolean;
  labelOff?: string;
  labelOn?: string;
}

const ToggleSwitch = ({ on, onClick, testId, large, labelOff = "T", labelOn = "K" }: Props) => (
  <>
    <label className="switch">
      <input checked={on} onChange={onClick} type="checkbox" />
      <span className="slider round" />
    </label>
  </>
);

export default ToggleSwitch;
