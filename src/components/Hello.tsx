import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

export interface DispatchProps {
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Hello extends React.Component<Props & DispatchProps, Object> {
    render() {
        const { name, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('you could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name  + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>

        );
    }

     getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }
}

export default Hello;
