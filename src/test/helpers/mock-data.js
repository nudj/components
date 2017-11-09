const data = [
  {
    id: 1,
    from: {},
    firstName: 'John',
    to: {
      email: 'test@email.com'
    },
    lastName: 'Smith',
    source: 'LinkedIn',
    company: 'Grand Testing Inc.',
    title: 'Chief Executive Tester'
  },
  {
    id: 2,
    from: {},
    to: {
      email: 'jane@email.com'
    },
    source: 'LinkedIn',
    lastName: 'Doe',
    company: 'Grand Testing Inc.',
    firstName: 'Jane',
    title: 'Chief Executive Tester'
  },
  {
    id: 3,
    from: {},
    company: 'Grand Testing Inc.',
    to: {
      email: 'john.stevens@email.com'
    },
    firstName: '',
    lastName: 'Stevens',
    source: 'LinkedIn',
    title: 'Chief Executive Tester'
  },
  {
    id: 4,
    to: {
      email: 'dave@email.com'
    },
    from: {},
    firstName: 'Davy',
    source: 'Manual',
    lastName: 'Jones',
    company: 'Grand Testing Inc.',
    title: 'Chief Executive Tester'
  },
  {
    id: 5,
    from: {},
    to: {
      email: 'jgord@email.com'
    },
    firstName: 'James',
    lastName: 'Gordon',
    title: 'Chief Executive Tester',
    source: 'Google Contacts',
    company: 'Grand Testing Inc.'
  },
  {
    id: 6,
    from: {},
    firstName: 'Bob',
    lastName: '',
    source: 'Manual',
    to: {
      email: 'bob@email.com'
    },
    company: 'Test Inc.',
    title: 'Tester'
  },
  {
    id: 7,
    from: {},
    firstName: 'M',
    lastName: 'Bison',
    source: 'Facebook',
    to: {
      email: 'bison@email.com'
    },
    company: 'Fake',
    title: 'Junior Sales Rep'
  }
]

module.exports = {
  data
}
