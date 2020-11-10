import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { Template } from './';

storiesOf("__Template", module)
    .add("with text", () => <Template>Hello Button</Template>)
    .add("with colored text", () => <Template color="red">Hello Button</Template>);
