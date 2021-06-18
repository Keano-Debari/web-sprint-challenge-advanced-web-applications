import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color />);
});
  
test("Renders the color passed into component", () => {
    render(<Color />);
    const color = screen.getByText(/color/i);
    expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const deletes = screen.getByRole('delete');
    userEvent.click(deletes);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const color = screen.getByRole('color');  
    userEvent.click(color);
});