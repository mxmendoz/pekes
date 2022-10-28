import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Francisco',
    email: 'franciscopetzey1@gmail.com',
    password: bcrypt.hashSync('Chico_$2022', 10),
    isAdmin: true,
  },
  {
    name: 'Maribel',
    email: 'mguozcampa@gmail.com',
    password: bcrypt.hashSync('MGCA2018', 10),
  },
];

export default users;
