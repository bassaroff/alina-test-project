let users = [
    {
        login: 'bassaroff',
        firstName: 'Almat',
        lastName: 'Bassarov',
        passWord: 'qwerty'
    },
    {
        login: 'test',
        firstName: 'Test',
        lastName: 'Testov',
        passWord: 'qwerty'
    },
    {
        login: 'admin',
        firstName: 'Admin',
        lastName: 'Adminov',
        passWord: 'admin'
    },
];

export const getAllUsers = (req, res) => {
    res.json(users)
}