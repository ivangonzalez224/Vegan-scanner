import BackImg from '../../assets/images/backScan.png';

const HomeItem = () => (
  <div className="land-main">
    <img alt="landing logo" src={BackImg} />
    <button className="land-scan-btn" type="button">Scan a code</button>
  </div>
);

export default HomeItem;
