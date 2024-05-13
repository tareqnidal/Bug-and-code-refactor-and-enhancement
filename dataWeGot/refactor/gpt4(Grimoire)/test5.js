```
Certainly! Here's the complete refactored version of the validator module, enhancing readability, modularity, and maintainability.
 The code includes detailed validations for user registration, login, donation addition, and other related functionalities:

```

import { validate as uuidValidator } from 'uuid';

export const validator = {};

function renderWithError(res, view, flashMessage, info, user = null) {
  res.status(400).render(view, { flashMessage, user, ...info });
}

function validateFields(fields, res, view, info) {
  for (const [field, message] of fields) {
    if (!info[field]) {
      renderWithError(res, view, message, info);
      return false;
    }
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const requirements = [
    { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
    { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
    { regex: /[0-9]/, message: 'Password must contain at least one number' }
  ];
  for (const { regex, message } of requirements) {
    if (!regex.test(password)) {
      return message;
    }
  }
  return null;
}

validator.register = (req, res, next) => {
  const info = req.body;
  const fields = [
    ['firstName', 'Please enter your first name'],
    ['lastName', 'Please enter your last name'],
    ['username', 'Please enter your username'],
    ['email', 'Please enter your email'],
    ['password', 'Please enter your password']
  ];

  if (!validateFields(fields, res, 'register', info)) return;

  if (!validateEmail(info.email)) {
    return renderWithError(res, 'register', 'Please enter a valid email address', info);
  }

  if (info.password.length < 8) {
    return renderWithError(res, 'register', 'Password must be at least 8 characters long', info);
  }

  const passwordError = validatePassword(info.password);
  if (passwordError) {
    return renderWithError(res, 'register', passwordError, info);
  }

  next();
};

validator.login = (req, res, next) => {
  const info = req.body;
  const fields = [
    ['username', 'Please enter your username'],
    ['password', 'Please enter your password']
  ];

  if (!validateFields(fields, res, 'login', info)) return;

  next();
};

validator.addDonation = (req, res, next) => {
  const user = req.session.user ?? null;
  const info = req.body;

  if (!user) {
    return renderWithError(res, 'login', 'Please login to be able to add items', info, user);
  }

  if (!uuidValidator(user.id)) {
    return renderWithError(res, 'login', 'Something is wrong with your credentials', info, user);
  }

  info.description = info.description.trim() || 'No description was provided';
  info.title = info.title.trim() || 'No title was provided';
  info.isPublic = !req.body.private;

  next();
};

validator.isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return renderWithError(res, 'login', 'Please login to continue');
  }
  next();
};

validator.isOkToRegister = (req, res, next) => {
  if (req.session.user) {
    return res.status(400).render('home', {
      flashMessage: 'You are already logged in',
      user: req.session.user
    });
  }
  next();
};

validator.validateId = (req, res, next) => {
  if (!uuidValidator(req.params.id)) {
    req.session.flashMessage = 'Invalid ID';
    return res.status(400).redirect('/donation-listing');
  }
  next();
};

validator.validateUserItem = (req, res, next) => {
  const { user, items } = req.session;
  if (user.id !== items[0].createdBy) {
    req.session.flashMessage = 'You are not allowed to edit this item';
    return res.status(401).redirect('/donation-listing');
  }
  next();
};

validator.validateIsPublic = (req, res, next) => {
  const item = req.session.items[0];
  if (!item.isPublic && (!req.session.user || req.session.user.id !== item.createdBy)) {
    req.session.flashMessage = 'Invalid Item ID';
    return res.status(404).redirect('/donation-listing');
  }
  next();
};

validator.updateProfile = (req, res, next) => {
  const info = req.body;
  const fields = [
    ['firstName', 'Please enter your first name'],
    ['lastName', 'Please enter your last name'],
    ['username', 'Please enter your username'],
    ['email', 'Please enter your email']
  ];

  if (!validateFields(fields, res, 'profileUpdate', info)) return;

  next();
};


```
This complete refactor of your validator module ensures better structure,
 error handling, and validation practices, adhering to modern JavaScript development standards.


```