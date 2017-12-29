import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Require TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputCSSModules
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="first name is required"
            />
        )
    }
}
