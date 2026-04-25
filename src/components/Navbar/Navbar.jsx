import logo from "../../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between px-15 pt-7 pb-15">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="relative ">
      <select className="select select-primary bg-[#312f4b] rounded-lg outline-0 cursor-pointer border-0 m-2">
        <option>Units</option>
        <option>VScode fork</option>
        <option>Another VScode fork</option>
      </select>
      </div>
    </div>
  );
};
export default Navbar;