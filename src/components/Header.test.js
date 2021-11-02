import {render, screen} from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
    test('renders Cuisine Carousel as text', () => {
        //Arrange
        render(<Header />);
      
        //Act
        //....nothing
      
        //Assert
        const cuisineCarouselElement = screen.getByText('Cuisine Carousel');
        expect(cuisineCarouselElement).toBeInTheDocument();
    });

    test('renders Login as button', () => {
        //Arrange
        render(<Header />);
      
        //Act
        //....nothing
      
        //Assert
        const loginElement = screen.getByText('Login');
        expect(loginElement).toBeInTheDocument();
    });

    test('does not render Logout as button', () => {
        //Arrange
        render(<Header />);
      
        //Act
        //....nothing
      
        //Assert
        const loginElement = screen.queryByText('Logout', {exact: false});
        expect(loginElement).not.toBeInTheDocument();
    });
});
