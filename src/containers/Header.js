import { connect } from "react-redux";
import { fetchPhoto } from "../store/actions";

export function mapStateToProps() {
  return {};
}

const mapDispatchToProps = { fetchPhoto };

export default connect(mapStateToProps, mapDispatchToProps);
