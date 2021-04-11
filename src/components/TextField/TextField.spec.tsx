import { render, cleanup, fireEvent, screen } from '@testing-library/react';

import TextField from './TextField';

afterEach(cleanup);

it('Should render TextField Componet', () => {
    const component = render(<TextField />);
    expect(component).toBeTruthy();
});

it('Should render TextField with placeholder prop', async () => {
    const placeHolder = 'Enter with name';
    const { findAllByPlaceholderText } = render(<TextField placeHolder={placeHolder} />);
    const elements = await findAllByPlaceholderText(placeHolder);

    expect(elements).toHaveLength(1);
});

it('Should call function when changing input text', async () => {
    const mockFn = jest.fn();
    const placeHolder = 'Enter with name';
    const { findByPlaceholderText } = render(<TextField onTextChange={mockFn} placeHolder={placeHolder} />);
    const input = await findByPlaceholderText(placeHolder);
    fireEvent.change(input, {
        target: { value: 'Teste' },
    });
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
});
