import { connect } from "react-redux";
import { closeModal } from "../store/actions";

export function mapStateToProps({ modal: { isOpen }, photo }) {
  return {
    isOpen,
    photo,
  };
}

const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps);
