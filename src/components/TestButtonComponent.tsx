import React, { FormEvent } from 'react';


interface TestButtonProps  {
    onClickButton: ( ) => void;
};

function TestButtonComponent( { onClickButton }: TestButtonProps ) {
    return (
        <input type="submit" value="테스트" onClick={onClickButton}/>
    );
}

export default TestButtonComponent;