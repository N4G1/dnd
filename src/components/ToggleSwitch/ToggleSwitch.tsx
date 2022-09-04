import "./ToggleSwitch.css";

interface Props {
  on: boolean;
  onClick: () => void;
  testId?: string;
  large?: boolean;
  labelOff: string;
  labelOn: string;
}

const ToggleSwitch = ({ on, onClick, labelOff, labelOn }: Props) => (
  <div className="switch-parent">
    <p>{labelOff}</p>
    <label className="switch">
      <input checked={on} onChange={onClick} type="checkbox" />
      <span className="slider round" />
    </label>
    <p>{labelOn}</p>
  </div>
);

export default ToggleSwitch;
