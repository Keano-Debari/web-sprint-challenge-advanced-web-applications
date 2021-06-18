import React from 'react';
import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import EditMenu from './EditMenu';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList />);
});

test("Renders a list of colors without errors", () => {
    render(<ColorList />);
    const colors = screen.getByText(/colors/i);
	    expect(colors).toBeInTheDocument();
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    render(<EditMenu />);
    const editing = screen.getByText(/editing/i);
        expect(editing).toEqual('true');
});
