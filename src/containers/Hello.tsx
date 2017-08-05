import Hello, { DispatchProps } from '../components/Hello';
import * as actions from '../actions/enthusiasm';
import { MainState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { Props } from '../components/Hello';

export function mapStateToProps( { enthusiasm : { enthusiasmLevel, languageName } }: MainState): Props {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): DispatchProps {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);