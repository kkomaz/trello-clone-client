/**
 * Pass mergeProps parameter to override any changes needed in the test suite
 */

export default function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, stateProps, dispatchProps, ownProps);
}
