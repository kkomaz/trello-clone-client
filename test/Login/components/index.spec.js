import LoginPageForm from 'User/index.jsx';
import { renderComponent }from '../../test_helper';

describe('LoginPage', () => {
    let component;
    let spy;

    beforeEach(() => {
      spy = jest.genMockFunction().mockReturnValueOnce(new Promise((resolve) => resolve()));
      component = renderComponent(LoginPageForm, { loginUser: spy });
    });

    it('renders parent div', () => {
      expect(component.find('.login').length).toBe(1);
    });

    it('contains 3 inputs', () => {
      expect(component.find('input').length).toBe(2);
    });

    it('calls loginUser', () => {
      const form = component.find('form');
      const email = component.find('input').first();
      const password = component.find('input').last();

      email.simulate('change', { target: { value: 'f@f.com' }});
      password.simulate('change', { target: { value: 'password' }});
      form.simulate('submit');
      expect(spy.mock.calls.length).toBe(1);
    });
});
