import { render } from '@testing-library/svelte';
import Prova from './Prova.svelte';
import { createEvent } from '@testing-library/dom';
import '$lib/services/ao';

jest.mock('$lib/services/ao');

describe('Prova component', () => {
	it('should render', async () => {
		const res = render(Prova);
		expect(res.container).toBeInTheDocument();
	});

	it('should have input value dependant on input', async () => {
		const res = render(Prova, { ciao: 'asd' });
		const input = await res.findByDisplayValue('asd');
		createEvent('input', input, { target: { value: 'ciaoooo' } });
		expect(input).toHaveValue('ciaoooo');
	});

	it('should correctly use mock instead of real', () => {
		const res = render(Prova, { ciao: 'asd' });
		expect(res.getByText('bomba')).toBeInTheDocument();
	});
});
