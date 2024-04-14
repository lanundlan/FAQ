import CollapsibleComponent from '../app/CollapsibleComponent';
import {render, screen, cleanup} from '@testing-library/react';
beforeEach(()=>{
  render(<CollapsibleComponent title='testTitle' body='testBody'></CollapsibleComponent>);
})
test('when initial render: the title should show, the body should be hidden',()=>{
  expect(screen.findByPlaceholderText('testTitle')).toBeInTheDocument;
  expect(screen.findByPlaceholderText('testBody')).toBeNull;
})

test('click detail button, the body should be shown',()=>{
  const buttonElement = screen.getByTestId('detail-id');
  buttonElement.click();
  expect(screen.findByPlaceholderText('testTitle')).toBeInTheDocument;
  expect(screen.findByPlaceholderText('testBody')).toBeInTheDocument;
})

test('click detail button again, the body should be hidden',()=>{
  const buttonElement = screen.getByTestId('detail-id');
  buttonElement.click();
  expect(screen.findByPlaceholderText('testTitle')).toBeInTheDocument;
  expect(screen.findByPlaceholderText('testBody')).toBeNull;
})